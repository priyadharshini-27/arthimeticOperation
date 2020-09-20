import React from "react";

const Result = ({ model }) => {
  return (
    <div style={{ marginLeft: "20px" }}>
      <label>Result</label>
      <br />
      <input value={model.result} style={{ marginTop: "7px" }} />
      {/* {console.log(model)} */}
    </div>
  );
};

export default Result;
