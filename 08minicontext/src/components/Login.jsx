import React, { use, useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {setUser} = useContext(UserContext) // extracting setUser from UserContext

  const handleSubmit = (e) => {
    //prevent the page from refreshing
    e.preventDefault()
    setUser({username,password})
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="Username"
      />{" "}
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button
      onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
}

export default Login;
