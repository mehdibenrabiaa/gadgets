export const percentageAction = (percentage) => {
  return {
    type: "PERCENTAGE",
    payload: percentage,
  };
};

export const fileAction = (file) => {
  return {
    type: "FILE",
    payload: file,
  };
};

export const tableDataAction = (data) => {
  return {
    type: "TABLE_DATA",
    payload: data,
  };
};

export const flagsAction = (flags) => {
  return {
    type: "FLAGS",
    payload: flags,
  };
};
