import React from "react";
import axios from "axios";
import "./scss/main.scss";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      carrierCardData: [],
      carriersSearched: 0,
      searchTime: 0,
    };
    this.getData = this.getData.bind(this);
  }

  // mock query to "database" and store in state
  getData() {
    axios
      .get("http://localhost:3001/carrier")
      .then((response) => {
        this.setState({
          carrierCardData: response.data.carrier_cards,
          carriersSearched: response.data.carriers_searched,
          searchTime: response.data.search_time,
        });
      })
      .finally(() => {
        console.log(this.state);
      });
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return <div className="App">React is rendering</div>;
  }
}

export default App;
