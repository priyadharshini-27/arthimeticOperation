import React, { useState } from "react";
import InputBox from "./components/InputBox";
import Result from "./components/Result";

function App() {
  const [model, setmodel] = useState({});

  function operation(x, y, symbol) {
    var model = {};
    // console.log(x);
    // console.log(y);
    //console.log(symbol);
    model.first = x;
    model.second = y;
    //console.log(model);
    setmodel(model);
    if (symbol === "+") {
      model.result = x + y;
    } else if (symbol === "-") {
      model.result = x - y;
    } else if (symbol === "*") {
      model.result = x * y;
    } else if (symbol === "/") {
      model.result = x / y;
    }
  }
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <InputBox operation={operation} />
      <Result model={model} />
    </div>
  );
}

export default App;
