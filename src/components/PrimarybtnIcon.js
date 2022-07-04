import React, { Component } from "react";
import "./styles.css";

class PrimarybtnIcon extends Component {
  render() {
    return (
      <button className="btn_primary btn_icon">
        <img src={this.props.icon} alt="icon" />{" "}
        <span> {String(this.props.text).toUpperCase()}</span>
      </button>
    );
  }
}

export default PrimarybtnIcon;
