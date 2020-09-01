import React, { useState } from "react";

function App() {
  function onclic() {
    setHeadingText("Submitted");
  }
  function setStyle() {
    setBGColor("black");
  }
  function setOutStyle() {
    setBGColor("white");
  }
  const [btntext, setHeadingText] = useState("Hello");
  const [bgColor, setBGColor] = useState(false);
  return (
    <div className="container">
      <h1>{btntext}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onClick={onclic}
        onMouseOver={setStyle}
        onMouseOut={setOutStyle}
        style={{ backgroundColor: bgColor }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
