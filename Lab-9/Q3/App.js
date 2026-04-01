import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const containerStyle = {
    textAlign: "center",
    marginTop: "100px",
    fontFamily: "Arial, sans-serif",
  };

  const counterStyle = {
    fontSize: "50px",
    margin: "20px",
    color: "#333",
  };

  const buttonStyle = {
    padding: "10px 20px",
    margin: "10px",
    fontSize: "18px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  };

  const incButton = {
    ...buttonStyle,
    backgroundColor: "#4CAF50",
    color: "white",
  };

  const decButton = {
    ...buttonStyle,
    backgroundColor: "#f44336",
    color: "white",
  };

  return (
    <div style={containerStyle}>
      <h1>Counter App</h1>

      <div style={counterStyle}>{count}</div>

      
      <button style={incButton} onClick={increment}>
        Increment
      </button>

      <button style={decButton} onClick={decrement}>
        Decrement
      </button>
    </div>
  );
}

export default App;