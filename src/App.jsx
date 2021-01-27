import React from "react";
import axios from "axios";
import "./scss/main.scss";
import Card from "./components/Card";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      carrierCardData: [],
      carriersSearched: 0,
      searchTime: 0,
      formValue: "best",
    };

    // Binds implicit with ES6 arrow functions
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
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // Takes in milliseconds. Returns time and proper english as a string
  toMinutes = (milliseconds) => {
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

  // Takes in sort keyword and data. Returns sorted array of data
  sortData = (keyword, dataArray) => {
    // TODO: IMPLEMENT SORTING ALGORITHMS.
    // console.log("keyword", keyword);
    // console.log("dataArray", dataArray);
    // for(let i=0; i < )
  };

  // Takes in a form change event. Sets formValue and carrierCardData state
  handleChange = (event) => {
    this.setState({ formValue: event.target.value });
    this.sortData(event.target.value, this.state.carrierCardData);
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div className="App">
        <div className="nav-container">
          <div className="query-info">
            <div className="query-info-content">
              You just compared
              <b className="query-info-bold">{` ${this.state.carriersSearched} rates`}</b>
              {` in ${this.toMinutes(this.state.searchTime)}!`}
            </div>
          </div>

          <form className="form">
            <label>
              Sort by:
              <select
                className="form-selector"
                value={this.state.formValue}
                onChange={this.handleChange}
              >
                <option value="highest">Price: Highest First</option>
                <option value="lowest">Price: Lowest First</option>
                <option value="best">Rating: Highest First</option>
                <option value="worst">Rating: Lowest First</option>
                <option value="alphabetical">{`Alphabetical (A-Z)`}</option>
              </select>
            </label>
          </form>
        </div>
        <div className="card-container">
          {this.state.carrierCardData.map((aCardData) => (
            <Card aCardData={aCardData} key={aCardData.name} />
          ))}
        </div>
      </div>
    );
  }
}
