import React from "react";
import ReactDOM from "react-dom";
import Tabs from "./Tabs";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Online Shopping Order Steps</h1>
      <Tabs />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
