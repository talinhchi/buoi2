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
    <form
      action=""
      style={{
        border: "1px soild black",
      }}
    >
      <label htmlFor="">Username</label>
      <input
        type="text"
        value={inpUsername}
        onChange={(e) => {
          setInpUsername(e.target.value);
        }}
      />
      <label htmlFor="">Password</label>
      <input
        type="text"
        value={inpPassword}
        onChange={(e) => {
          setInpPassword(e.target.value);
        }}
      />
      <input
        type="checkbox"
        value={inpIsadmin}
        onChange={(e) => {
          setInpIsadmin(!inpIsadmin);
        }}
      />
      <label htmlFor="">isAdmin?</label>
      <button onClick={handleLogin}>Login</button>
    </form>
  );
}

export default Login;
