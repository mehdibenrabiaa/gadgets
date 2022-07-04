import { combineReducers } from "redux";

const precentageReducer = (percentage = 30, action) => {
  if (action.type === "PERCENTAGE") {
    return action.payload;
  } else {
    return percentage;
  }
};

const fileReducer = (file = "", action) => {
  if (action.type === "FILE") {
    return action.payload;
  } else {
    return file;
  }
};

const tableDataReducer = (
  data = { Name1: [], Name2: [], Similarity: [] },
  action
) => {
  if (action.type === "TABLE_DATA") {
    return action.payload;
  } else {
    return data;
  }
};

const flagsReducer = (
  flags = { showTable: false, loadingSpinner: false, error: false },
  action
) => {
  if (action.type === "FLAGS") {
    return action.payload;
  } else {
    return flags;
  }
};

export default combineReducers({
  precentageReducer: precentageReducer,
  fileReducer: fileReducer,
  tableDataReducer: tableDataReducer,
  flagsReducer: flagsReducer,
});
