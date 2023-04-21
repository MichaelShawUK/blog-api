import Nav from "./Nav";
import { Link, Outlet } from "react-router-dom";
import "../index.css";
import { useState } from "react";

const Root = () => {
  const [username, setUsername] = useState(localStorage.getItem("username"));
  return (
    <>
      <header className="header">
        <Link to="/posts">
          <h1>BLOG SPACE</h1>
        </Link>
        {!username && <Nav />}
        {username && (
          <div className="login-info">
            <span>
              Logged in as <strong>{username}</strong>
            </span>
            <button
              onClick={() => {
                localStorage.clear();
                setUsername(null);
              }}
            >
              Log Out
            </button>
          </div>
        )}
      </header>
      <Outlet />
      <Link to="/protected">Protected Route</Link>
    </>
  );
};

export default Root;
