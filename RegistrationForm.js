import React, { useState, useEffect } from "react";

const RegistrationForm = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(savedUsers);
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user.name || !user.email || !user.password) {
      alert("Please fill all fields!");
      return;
    }

    const updatedUsers = [...users, user];
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    setUser({ name: "", email: "", password: "" }); 
  };

  const clearAll = () => {
    localStorage.removeItem("users");
    setUsers([]);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <h2>User Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Password: </label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" style={{ marginTop: "10px",color:"blue", fontWeight:"bold"}}>
          REGISTER
        </button>
      </form>

      {users.length > 0 ? (
        <>
          <h3 style={{ marginTop: "30px" }}>Registered Users</h3>
          <table border="1" cellPadding="8" style={{ width: "100%", marginTop: "10px" }}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u, index) => (
                <tr key={index}>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td>{u.password}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            onClick={clearAll}
            style={{
              marginTop: "15px",
              backgroundColor: "red",
              color: "white",
              padding: "8px 12px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Clear All
          </button>
        </>
      ) : (
        <p style={{ marginTop: "20px" }}>No users registered yet.</p>
      )}
    </div>
  );
};

export default RegistrationForm;
