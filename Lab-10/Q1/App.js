import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});

  const containerStyle = {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "25px",
    border: "2px solid #4CAF50",
    borderRadius: "10px",
    fontFamily: "Arial",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    margin: "8px 0",
    borderRadius: "5px",
    border: "1px solid #ccc",
  };

  const errorStyle = {
    color: "red",
    fontSize: "14px",
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const validate = () => {
    let tempErrors = {};

    if (!name) {
      tempErrors.name = "Name is required";
    }

    if (!email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = "Invalid email format";
    }

    if (!password) {
      tempErrors.password = "Password is required";
    } else if (password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters";
    }

    return tempErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      alert("Form submitted successfully!");

      setName("");
      setEmail("");
      setPassword("");
      setErrors({});
    }
  };

  return (
    <div style={containerStyle}>
      <h2>User Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={handleName}
          style={inputStyle}
        />
        {errors.name && <div style={errorStyle}>{errors.name}</div>}

        <input
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={handleEmail}
          style={inputStyle}
        />
        {errors.email && <div style={errorStyle}>{errors.email}</div>}


        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={handlePassword}
          style={inputStyle}
        />
        {errors.password && <div style={errorStyle}>{errors.password}</div>}

      
        <button type="submit" style={buttonStyle}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;