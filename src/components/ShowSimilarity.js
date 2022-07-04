import React, { Component } from "react";
import LoadingScreen from "./LoadingScreen";
import ErrorMessage from "./ErrorMessage";
import { connect } from "react-redux";

class ShowSimilarity extends Component {
  constructor(props) {
    super(props);
  }

  produceRows = () => {
    const { Name1, Name2, Similarity } = this.props.data;
    const tableLength = Name1.length;
    let tableBody = [];
    for (let i = 0; i < tableLength; i += 1) {
      tableBody.push(
        <tr key={i}>
          <td>{Name1[i]}</td>
          <td>{Name2[i]}</td>
          <td>{String(Similarity[i]) + "%"}</td>
        </tr>
      );
    }
    return tableBody;
  };

  render() {
    let { showTable, loadingSpinner, error } = this.props.flags;
    if (showTable === true) {
      return (
        <div>
          <table>
            <thead>
              <tr>
                <th>Name 1</th>
                <th>Name 2</th>
                <th>Similarity</th>
              </tr>
            </thead>
            <tbody>{this.produceRows()}</tbody>
          </table>
        </div>
      );
    } else if (loadingSpinner === true) {
      return <LoadingScreen />;
    } else if (error === true) {
      return (
        <ErrorMessage
          errorMessage={
            " File format or file structure is not valid, please read instructions"
          }
        />
      );
    }
  }
}

const mapStateToProps = (state) => {
  return { data: state.tableDataReducer, flags: state.flagsReducer };
};

export default connect(mapStateToProps)(ShowSimilarity);
