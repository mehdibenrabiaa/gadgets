import React, { Component } from "react";
import "./styles.css";
import fw_logo from "../images/fw_logo.svg";

class Navbar extends Component {
  state = {};

  render() {
    return (
      <div className="navbar">
        <img src={fw_logo} alt="pdfconverterlogo" className="pdflogo" />
      </div>
    );
  }
}

export default Navbar;
