import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {

  const [role, setRole] = useState("student");
  const navigate = useNavigate();

  const handleLogin = () => {

    if (role === "admin") {
      navigate("/admin");
    }
    else if (role === "teacher") {
      navigate("/teacher");
    }
    else {
      navigate("/student");
    }

  };

  return (

    <div className="login-page">

      <div className="login-card">

        <h1>PPS ERP</h1>

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="student">🎓 Student</option>
          <option value="teacher">👨‍🏫 Teacher</option>
          <option value="admin">🛡️ Admin</option>
        </select>

        <input
          type="email"
          placeholder="Enter Email"
        />

        <input
          type="password"
          placeholder="Enter Password"
        />

        <button
          className="login-btn"
          onClick={handleLogin}
        >
          Login
        </button>

      </div>

    </div>

  );
}

export default Login;