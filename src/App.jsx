import React from "react";
import axios from "axios";
import "./scss/main.scss";
import Deck from "./components/Deck";
import Nav from "./components/Nav";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carrierCardData: [],
      carriersSearched: 0,
      searchTime: 0,
      formValue: "best",
      loading: true,
    };
  }

  // Get all data via mock query and store in state
  getData = () => {
    axios
      .get("http://localhost:3001/carrier")
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

  // Takes in form event and updates state to reflect form value
  handleFormChange = (event) => {
    this.setState({ formValue: event.target.value });
  };

  componentDidMount() {
    // Call query method once Application mounts
    this.getData();
  }

  render() {
    return (
      <div className="App">
        {this.state.loading ? (
          <div className="app-loading-wrapper">
            <div className="app-loading">Loading...</div>
          </div>
        ) : (
          <>
            <Nav
              carriersSearched={this.state.carriersSearched}
              searchTime={this.state.searchTime}
              handleFormChange={this.handleFormChange}
            />
            <Deck
              carrierCardData={this.state.carrierCardData}
              formValue={this.state.formValue}
            />
          </>
        )}
      </div>
    );
  }
}
