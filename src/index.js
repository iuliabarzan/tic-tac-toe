import React from "react";
import ReactDOM from "react-dom";
import Game from "./components/Game";

import "./styles.css";

function App() {
  return (
    <Game />
  );
}
  
  ReactDOM.render(<App />, document.getElementById("root"));
   