import React from "react";

function StudentProfile() {
  const name = "Rahul Kumar";
  const department = "Computer Science";
  const year = "3rd Year";
  const section = "A";

  // Inline styles
  const cardStyle = {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "25px",
    border: "2px solid #4CAF50",
    borderRadius: "12px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
  };

  const headerStyle = {
    textAlign: "center",
    color: "#4CAF50",
    marginBottom: "20px",
  };

  const detailStyle = {
    fontSize: "18px",
    margin: "8px 0",
  };

  const labelStyle = {
    color: "#333",
  };

  return (
    <div style={cardStyle}>
      <h1 style={headerStyle}>Student Profile</h1>
      <p style={detailStyle}>
        <strong style={labelStyle}>Name:</strong> {name}
      </p>
      <p style={detailStyle}>
        <strong style={labelStyle}>Department:</strong> {department}
      </p>
      <p style={detailStyle}>
        <strong style={labelStyle}>Year:</strong> {year}
      </p>
      <p style={detailStyle}>
        <strong style={labelStyle}>Section:</strong> {section}
      </p>
    </div>
  );
}

export default StudentProfile;