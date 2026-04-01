import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const containerStyle = {
    maxWidth: "600px",
    margin: "30px auto",
    fontFamily: "Arial",
  };

  const cardStyle = {
    background: "#f9f9f9",
    padding: "15px",
    margin: "10px 0",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); 

  return (
    <div style={containerStyle}>
      <h2>User List</h2>

      {loading && <p>Loading data...</p>}

      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {!loading &&
        !error &&
        data.map((user) => (
          <div key={user.id} style={cardStyle}>
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
            <p>City: {user.address.city}</p>
          </div>
        ))}
    </div>
  );
}

export default App;