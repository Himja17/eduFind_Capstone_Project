import { useState } from "react";
import axios from "axios";

const Login = () => {
  const loginUrl = `${process.env.REACT_APP_BASE_URL}/login`;

  const [isLogin, setIsLogin] = useState(false);
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
        console.log(response);
        if (response.status === 200) {
          // Login successful
          setIsLogin(true);

          // Clear any previous error
          setError("");
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
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
      {isLogin && <p>Login successful!</p>}
    </div>
  );
};

export default Login;
