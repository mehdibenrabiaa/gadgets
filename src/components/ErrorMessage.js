import React, { Component } from "react";
import { connect } from "react-redux";
import { flagsAction } from "../actions";

class LoadingScreen extends Component {
  constructor(props) {
    super(props);
  }

  clear = () => {
    this.props.flagsAction({
      showTable: false,
      loadingSpinner: false,
      error: false,
    });
  };

  render() {
    if (true) {
      return (
        <div className="no_file_selected_msg">
          <div className="no_file_selected_ok">
            <span>Error</span>
            <p>{this.props.errorMessage}</p>
            <button
              className="btn_primary"
              onClick={this.clear}
              style={{ fontSize: "10px" }}
            >
              OK
            </button>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { flagsAction })(LoadingScreen);
