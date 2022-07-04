import React, { Component } from "react";

import Navbar from "./components/Navbar";
import Toolbar from "./components/Toolbar";
import ShowSimilarity from "./components/ShowSimilarity";
import LoadingScreen from "./components/LoadingScreen";
import MainMenu from "./components/MainMenu";

import "./components/styles.css";

class App extends Component {
  constructor(props) {
    super(props);
  }
  state = { displayApp: "none", displayMenu: "block" };

  open = () => {
    this.setState({ displayApp: "", displayMenu: "none" });
  };

  render() {
    return (
      <React.Fragment>
        <div style={{ display: this.state.displayMenu }}>
          <MainMenu open={this.open} />
        </div>

        <div style={{ display: this.state.displayApp }}>
          <Navbar />
          <div className="app_wrapper">
            <ShowSimilarity />
            <Toolbar />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
