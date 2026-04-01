import React from "react";
import StudentCard from "./StudentCard";

function App() {
  // Array of student data
  const students = [
    { name: "Rahul Kumar", department: "Computer Science", marks: 85 },
    { name: "Anjali Sharma", department: "Electronics", marks: 92 },
    { name: "Vikram Singh", department: "Mechanical", marks: 78 },
    { name: "Priya Reddy", department: "Civil", marks: 88 },
  ];

  const containerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: "30px",
  };

  return (
    <div style={containerStyle}>
      {students.map((student, index) => (
        <StudentCard
          key={index}
          name={student.name}
          department={student.department}
          marks={student.marks}
        />
      ))}
    </div>
  );
}

export default App;