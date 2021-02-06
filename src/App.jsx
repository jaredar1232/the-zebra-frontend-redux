import React from 'react';
import axios from 'axios';
import './scss/main.scss';
import Deck from './components/Deck';
import Nav from './components/Nav';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carrierCardData: [],
      carriersSearched: 0,
      searchTime: 0,
      formValue: 'highest',
      loading: true,
    };
  }

  // Getting all data from mock backend
  getData = () => {
    axios
      .get('http://localhost:3001/carrier')
      .then((response) => {
        this.setState({
          carrierCardData: response.data.carrier_cards,
          carriersSearched: response.data.carriers_searched,
          searchTime: response.data.search_time,
          loading: false,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div className='App'>
        {this.state.loading ? (
          <div className='app-loading-wrapper'>
            <div className='app-loading'>Loading...</div>
          </div>
        ) : (
          <>
            <Nav
              carriersSearched={this.state.carriersSearched}
              searchTime={this.state.searchTime}
            />
            <Deck carrierCardData={this.state.carrierCardData} />
          </>
        )}
      </div>
    );
  }
}
