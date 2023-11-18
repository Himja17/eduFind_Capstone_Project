import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../Login/Login.scss";

const Register = () => {
  const registerUrl = `${process.env.REACT_APP_BASE_URL}/register`;

  const [isRegister, setIsRegister] = useState(false);
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

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
          navigate("/explore");
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
    <div className="login__body">
      <div className="login__main">
        <form onSubmit={handleRegister} className="login__form">
          <h1 className="login__title">Register</h1>
          <div>
            <input
              type="text"
              name="username"
              value={username}
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="login__bttn-container">
            <button type="submit" className="login__bttn">
              Register
            </button>
          </div>
        </form>
        {error && <p>{error}</p>}
        {isRegister && <p>Registration successful!</p>}

        <div className="login__noaccount">
          {`Already have an account? `}
          <Link to="/login" className="login__noaccount">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
