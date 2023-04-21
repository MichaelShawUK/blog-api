import Nav from "./Nav";
import { Link, Outlet } from "react-router-dom";
import "../index.css";

const Root = () => {
  return (
    <>
      <header className="header">
        <Link to="/posts">
          <h1>BLOG SPACE</h1>
        </Link>
        <Nav />
      </header>
      <Outlet />
    </>
  );
};

export default Root;
