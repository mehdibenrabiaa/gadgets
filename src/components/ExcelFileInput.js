import React, { Component } from "react";
import "./styles.css";
import { connect } from "react-redux";
import { fileAction } from "../actions";
// IMPORT ICONS

class PdfFileInput extends Component {
  state = { inputted_file: null, fileon_style: {}, fileName: "" };

  trigger_file_input = () => {
    const file_input = document.getElementById("excel_input");
    file_input.click();
  };

  inputted_file_tostore = (e) => {
    const file = e.nativeEvent.target.files[0];
    this.props.fileAction(file);
    this.setState({ fileName: file.name });
  };

  render() {
    return (
      <React.Fragment>
        <form style={{ display: "none" }}>
          <input
            className="excelInput"
            type="file"
            name="excelImput"
            id="excel_input"
            onChange={this.inputted_file_tostore}
          />
        </form>
        <button
          className="file_input_btn"
          onClick={this.trigger_file_input}
          style={this.state.fileon_style}
        >
          Select File
        </button>
        <small className="file_name">{this.state.fileName}</small>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return { store: state };
};

export default connect(mapStateToProps, { fileAction })(PdfFileInput);
