import React, { Component } from "react";
import "./styles.css";
import Primarybtn from "./Primarybtn";
import Executebtn from "./Executebtn";
import ExcelFileInput from "./ExcelFileInput";
import { connect } from "react-redux";
import { percentageAction } from "../actions";
// ICONS IMPORT

class Toolbar extends Component {
  state = { windowHeight: "800px", percentage: 30 };

  componentDidMount() {
    let getWindowHeight = () => {
      let height = String(window.innerHeight) + "px";
      this.setState({ windowHeight: height });
    };
    setInterval(getWindowHeight, 500);
  }

  range_value_to_state = (e) => {
    const value = e.nativeEvent.target.value;
    this.setState({ percentage: value });
    this.props.percentageAction(value);
  };

  render() {
    return (
      <div className="toolbar" style={{ height: this.state.windowHeight }}>
        <Executebtn />
        <form>
          <small className="percentage_text">
            {this.state.percentage + "%"}
          </small>
          <input
            className="percentage_bar"
            min={1}
            max={99}
            type="range"
            name="precentage"
            id="percentage_picker"
            step={1}
            onChange={this.range_value_to_state}
            value={this.state.percentage}
          />
          <label htmlFor="percentage_picker" className="percentage_text">
            Percentage
          </label>
        </form>
        <ExcelFileInput />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { percentageAction })(Toolbar);
