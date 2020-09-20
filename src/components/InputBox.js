import React, { useState } from "react";

const InputBox = ({ operation }) => {
  const [x, setX] = useState("");
  const [y, setY] = useState("");

  return (
    <div>
      <div id="top">
        <label style={{ marginRight: "7px" }}>X</label>
        <input
          onChange={(e) => setX(Number(e.target.value))}
          value={x}
          placeholder="input here"
        />
        <label style={{ marginRight: "7px", marginLeft: "7px" }}>Y</label>
        <input
          onChange={(e) => setY(Number(e.target.value))}
          value={y}
          placeholder="input here"
        />
      </div>
      <div id="button" style={{ display: "flex", justifyContent: "center",marginTop:'10px' }}>
        <button onClick={() => operation(x, y, "+")} style={button}>
          Add
        </button>
        <button onClick={() => operation(x, y, "-")} style={button}>
          Sub
        </button>
        <button onClick={() => operation(x, y, "*")} style={button}>
          Mul
        </button>
        <button onClick={() => operation(x, y, "/")} style={button}>
          Div
        </button>
      </div>
    </div>
  );
};

const button = {
  backgroundColor: "#3498db",
  color: "white",
  padding: "10px",
  borderRadius: "5px",
  border: "#3498db",
  margin: "5px",
};

export default InputBox;
