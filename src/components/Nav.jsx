const Nav = (props) => {
  // Takes in milliseconds. Returns time and proper english as a string
  const toMinutes = (milliseconds) => {
    let minutes = Math.ceil(milliseconds / 60000);
    if (minutes >= 2) {
      return `${minutes} minutes`;
    } else if (minutes === 1) {
      return `${minutes} minute`;
    } else if (minutes < 1) {
      // Handles "impossible" case of an instant return (see Math.ceil above, Math.floor doesn't match mockup)
      return `less than 1 minute`;
    }
  };

  return (
    <div className="nav-container">
      <div className="query-info">
        <div className="query-info-content">
          You just compared
          <b className="query-info-bold">{` ${props.carriersSearched} rates`}</b>
          {` in ${toMinutes(props.searchTime)}!`}
        </div>
      </div>

      <form className="form">
        <label>
          Sort by:
          <select
            className="form-selector"
            value={props.formValue}
            onChange={(e) => props.handleFormChange(e)}
          >
            <option value="highest">Price: Highest First</option>
            <option value="lowest">Price: Lowest First</option>
            <option value="best">Rating: Highest First</option>
            <option value="worst">Rating: Lowest First</option>
            <option value="alphabeticalA">{`Alphabetical (A-Z)`}</option>
            <option value="alphabeticalZ">{`Alphabetical (Z-A)`}</option>
          </select>
        </label>
      </form>
    </div>
  );
};

export default Nav;
