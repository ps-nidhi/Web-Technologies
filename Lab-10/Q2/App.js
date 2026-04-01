import React, { useState } from "react";
import ItemList from "./ItemList";

function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const containerStyle = {
    maxWidth: "400px",
    margin: "50px auto",
    fontFamily: "Arial",
    textAlign: "center",
  };

  const inputStyle = {
    padding: "10px",
    width: "70%",
    marginRight: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  };

  const addButton = {
    padding: "10px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const addItem = () => {
    if (input.trim() === "") return;

    const newItem = {
      id: Date.now(), 
      text: input,
    };

    setItems([...items, newItem]);
    setInput("");
  };

  const removeItem = (id) => {
    const updatedList = items.filter((item) => item.id !== id);
    setItems(updatedList);
  };

  return (
    <div style={containerStyle}>
      <h2>Item List App</h2>

      <div>
        <input
          type="text"
          placeholder="Enter item"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={inputStyle}
        />
        <button style={addButton} onClick={addItem}>
          Add
        </button>
      </div>

      {items.length === 0 ? (
        <p>No items available</p>
      ) : (
        <ItemList items={items} removeItem={removeItem} />
      )}
    </div>
  );
}

export default App;