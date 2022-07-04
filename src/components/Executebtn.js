import React, { Component } from "react";
import Axios from "axios";
import { connect } from "react-redux";
import { tableDataAction, flagsAction } from "../actions";

import "./styles.css";

class Executebtn extends Component {
  constructor(props) {
    super(props);
  }

  exposeSimilarities = () => {
    // Flag loading spinner
    this.props.flagsAction({
      showTable: false,
      loadingSpinner: true,
      error: false,
    });

    // Destructuting variables
    const { file, percentage } = this.props;

    // Create the form-data
    let formdata = new FormData();
    formdata.append("file", file);
    formdata.append("percentage", percentage);

    // Send request using axios
    Axios({
      method: "POST",
      url: "https://fuzzydjangoapp.herokuapp.com/fuzzy/exposesimilarities",
      data: formdata,
    })
      .then((res) => {
        this.props.flagsAction({ showTable: true, loadingSpinner: false });
        this.props.tableDataAction(res.data);
        this.props.flagsAction({
          showTable: true,
          loadingSpinner: false,
          error: false,
        });
      })
      .catch((err) => {
        this.props.flagsAction({
          showTable: false,
          loadingSpinner: false,
          error: true,
        });
      });
  };

  render() {
    return (
      <div className="flex_column_center executebtn_container">
        <div>
          <button className="excecute_btn" onClick={this.exposeSimilarities}>
            <div>/></div>
          </button>
        </div>
        <small>Expose Similarities</small>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    file: state.fileReducer,
    percentage: state.precentageReducer,
  };
};
export default connect(mapStateToProps, {
  tableDataAction,
  flagsAction,
})(Executebtn);
