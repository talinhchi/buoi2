import { useState } from "react";
function Login() {
  const [inpUsername, setInpUsername] = useState("");
  const [inpPassword, setInpPassword] = useState("");
  const [inpIsadmin, setInpIsadmin] = useState(false);
  const handleLogin = (event) => {
    event.preventDefault();
    console.log("Username:", inpUsername);
    console.log("Password:", inpPassword);
    console.log("IsAdmin:", inpIsadmin);
  };
  return (
    <form action="" className="p-4 border rounded">
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          value={inpUsername}
          onChange={(e) => {
            setInpUsername(e.target.value);
          }}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={inpPassword}
          onChange={(e) => {
            setInpPassword(e.target.value);
          }}
        />
      </div>
      <div className="form-check mb-3">
        <input
          type="checkbox"
          className="form-check-input"
          id="isAdmin"
          checked={inpIsadmin}
          onChange={(e) => {
            setInpIsadmin(!inpIsadmin);
          }}
        />
        <label className="form-check-label" htmlFor="isAdmin">
          isAdmin?
        </label>
      </div>
      <button type="submit" className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </form>
  );
}

export default Login;
