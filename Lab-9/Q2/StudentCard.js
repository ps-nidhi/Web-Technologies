import React from "react";

function StudentCard({ name, department, marks }) {
  const cardStyle = {
    maxWidth: "300px",
    margin: "15px",
    padding: "20px",
    border: "2px solid #2196F3",
    borderRadius: "10px",
    backgroundColor: "#e3f2fd",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
  };

  const headerStyle = {
    textAlign: "center",
    color: "#2196F3",
    marginBottom: "15px",
    fontSize: "20px",
  };

  const detailStyle = {
    fontSize: "16px",
    margin: "6px 0",
  };

  const labelStyle = {
    color: "#333",
  };

  return (
    <div style={cardStyle}>
      <h2 style={headerStyle}>{name}</h2>
      <p style={detailStyle}>
        <strong style={labelStyle}>Department:</strong> {department}
      </p>
      <p style={detailStyle}>
        <strong style={labelStyle}>Marks:</strong> {marks}
      </p>
    </div>
  );
}

export default StudentCard;