import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../reducer/authSlice";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (type) => {
    dispatch(Login(type));
    navigate(type === "admin" ? "/admin" : "/user");
  };
  return (
    <div className="login-page">
      <h2> Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={() => handleLogin("user")}>Login s User</button>
      <button onClick={() => handleLogin("admin")}>Login as Admin</button>
    </div>
  );
};
export default Login;
