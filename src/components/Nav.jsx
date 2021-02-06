import toMinutes from '../helpers/toMinutes';
import { connect } from 'react-redux';
// Helpers:
// toMinutes takes in milliseconds as a number. Returns time and as a string

const Nav = (props) => {
  // console.log('Nav props', props);
  return (
    <div className='nav-container'>
      <div className='nav__query-info'>
        <div className='nav__query-info-content'>
          You just compared
          <b className='nav__query-info-content--bold'>{` ${props.carriersSearched} rates`}</b>
          {` in ${toMinutes(props.searchTime)}!`}
        </div>
      </div>

      <form className='nav__form' id='sortform'>
        <label>
          Sort by:
          <select
            className='nav__form-selector'
            form='sortform'
            value={props.formValue}
            onChange={(e) => props.dispatch({ type: e.target.value })}
          >
            <option value='highest'>Price: Highest First</option>
            <option value='lowest'>Price: Lowest First</option>
            <option value='best'>Rating: Highest First</option>
            <option value='worst'>Rating: Lowest First</option>
            <option value='alphabeticalA'>{`Alphabetical (A-Z)`}</option>
            <option value='alphabeticalZ'>{`Alphabetical (Z-A)`}</option>
          </select>
        </label>
      </form>
    </div>
  );
};

export default connect((state, props) => {
  return {
    formValue: state.formValue,
  };
})(Nav);
