import { useState } from "react";
import axios from "axios";

const Register = () => {
  const registerUrl = `${process.env.REACT_APP_BASE_URL}/register`;

  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    const enteredUsername = e.target[0].value;
    const enteredPassword = e.target[1].value;

    // Check if both username and password are provided
    if (!enteredUsername || !enteredPassword) {
      alert("All fields are mandatory");
      return;
    }

    // Grab data with axios that has been sent via POST
    axios
      .post(registerUrl, {
        username: enteredUsername,
        password: enteredPassword,
      })
      .then((response) => {
        if (response.status === 201) {
          // Successful Registration
          setIsRegister(true);
          setError("");
          setUsername("");
          setPassword("");
        } else {
          // Handle register failure
          setError("Registration failed");
        }
      })
      .catch((error) => {
        if (error.response.status === 400) {
          setError("Username already exists, please Login");
          setUsername("");
          setPassword("");
        } else {
          setError("Error during registration");
        }
      });
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <div>
          Username:{" "}
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          Password:{" "}
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
      {error && <p>{error}</p>}
      {isRegister && <p>Registration successful!</p>}
    </div>
  );
};

export default Register;
