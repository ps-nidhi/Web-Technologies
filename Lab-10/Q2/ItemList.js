import React from "react";

function ItemList({ items, removeItem }) {
  const listStyle = {
    listStyle: "none",
    padding: 0,
  };

  const itemStyle = {
    background: "#f1f1f1",
    margin: "8px 0",
    padding: "10px",
    borderRadius: "6px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const buttonStyle = {
    backgroundColor: "#f44336",
    color: "white",
    border: "none",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <ul style={listStyle}>
      {items.map((item) => (
        <li key={item.id} style={itemStyle}>
          {item.text}
          <button style={buttonStyle} onClick={() => removeItem(item.id)}>
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ItemList;