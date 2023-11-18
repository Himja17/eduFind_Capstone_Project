import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  const loginUrl = `${process.env.REACT_APP_BASE_URL}/login`;

  const [isLogin, setIsLogin] = useState(false);
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const loginUsername = e.target[0].value;
    const loginPassword = e.target[1].value;

    if (!loginUsername || !loginPassword) {
      alert("All fields are mandatory");
      return;
    }

    axios
      .post(loginUrl, {
        username: loginUsername,
        password: loginPassword,
      })
      .then((response) => {
        
        if (response.status === 200 && response.data.token) {
          // Store token in sessionStorage
          sessionStorage.setItem("token", response.data.token);

          // Set authorization header
          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer${response.data.token}`;

          // Login successful
          setIsLogin(true);

          // Clear any previous error
          setError("");

          navigate("/explore");
        }
      })
      .catch((error) => {
        if (error.response.status === 400) {
          setUsername("");
          setPassword("");
        } else {
          setError("Login failed, please check username and password");
        }
        console.log(error);
      });
  };

  return (
    <div className="login__body">
      <div className="login__main">
        <form onSubmit={handleLogin} className="login__form">
          <h1 className="login__title">Login</h1>
          <div>
            <input
              type="text"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
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
              Login
            </button>
          </div>
        </form>
        {error && <p>{error}</p>}
        {isLogin && <p>Login successful!</p>}
        <div className="login__noaccount">
          {`Don't have an account? `}
          <Link to="/register" className="login__noaccount">
           Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
