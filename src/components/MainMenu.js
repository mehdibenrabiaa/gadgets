import React, { Component } from "react";
import gadgets_logo from "../images/gadgets_logo.svg";
import fw_logo from "../images/fw_logo.svg";
import pdf_converter from "../images/pdf_converter_logo.svg";

class MainMenu extends Component {
  constructor(props) {
    super(props);
  }

  state = {};
  render() {
    return (
      <div className="main_menu_split">
        <div className="gadgets_logo">
          <img src={gadgets_logo} alt="gadgets_logo" />
        </div>
        <div className="apps_logo">
          <img src={pdf_converter} alt="gadgets_logo" />
        </div>
        <div className="apps_logo" onClick={this.props.open}>
          <img src={fw_logo} alt="gadgets_logo" />
        </div>
      </div>
    );
  }
}

export default MainMenu;
