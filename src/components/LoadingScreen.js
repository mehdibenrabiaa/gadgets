import React, { Component } from "react";

class LoadingScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (true) {
      return (
        <div className="loading_container">
          <div>
            <div class="loader"></div>
            <small className="loading_small">Loading</small>
          </div>
        </div>
      );
    }
  }
}

export default LoadingScreen;
