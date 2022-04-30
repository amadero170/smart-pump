import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function login() {
    setError("");
    // validate user
    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const user = await res.json();

    console.log(user);
    console.log(`USER:${user.address}`);

    if (user && user._id) {
      setUser(user);
      router.push("/");
    } else {
      setError("Username or password incorrect");
    }
  }

  function handleSubmit(event) {
    login();
    event.preventDefault();
  }

  return (
    <div>
      <Head>
        <title>Smart Pump</title>
      </Head>
      <header>
        <div className="image-container">
          <img className="logo" alt="Smart Pump logo" src="/logo.png" />
        </div>
      </header>
      <h2 className="title">Please login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Username
          <br />
          <input
            style={{ width: "100%" }}
            onChange={(event) => setUsername(event.target.value)}
            type="text"
            value={username}
          />
        </div>
        <div>
          Password
          <br />
          <input
            style={{ width: "100%" }}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            value={password}
          />
        </div>
        <div className="center">
          <input className="button" type="submit" value="Login" />
        </div>
        {error && <div style={{ color: "red" }}>{error}</div>}
      </form>
    </div>
  );
}
