import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <NavLink to="/login">Log In</NavLink>
      <NavLink to="/register">Register</NavLink>
    </nav>
  );
};

export default Nav;
