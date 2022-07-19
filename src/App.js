import "./App.css";
import Light from "./Light";
import React, { useState } from "react";

function App() {
  const colors = ["red ", "yellow", "green"]
  const [lit, setLit] = useState("red");

  return (
    <div className="App">
      {colors.map((color) => {

        return <Light color={color} lit={lit} setLit={setLit} />;
      })}
    </div>
  );
}

export default App;
