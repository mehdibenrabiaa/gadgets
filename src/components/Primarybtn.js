import React, { Component } from "react";
import "./styles.css";

class Primarybtn extends Component {
  state = {};
  render() {
    return (
      <button className="btn_primary">
        {String(this.props.text).toUpperCase()}
      </button>
    );
  }
}

export default Primarybtn;
