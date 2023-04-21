import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <div className="login-form">
        <form action="http://localhost:3000/login" method="post">
          <p className="form-header">Welcome Back</p>
          <input
            id="username"
            name="username"
            type="text"
            placeholder="Username"
            autoFocus
          ></input>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
          ></input>
          <button type="submit">Log In</button>
        </form>
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
        <p>
          Go to <Link to="/posts">Blog Posts</Link>
        </p>
      </div>
      <div className="login-img"></div>
    </div>
  );
};

export default Login;
