import { useState } from "react";

function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("ecomUser"));

    if (!savedUser) {
      alert("No user found! Please signup first.");
      return;
    }

    if (savedUser.email === email && savedUser.password === password) {
      setUser(savedUser);
      alert("Login Successful!");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /> <br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /> <br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
