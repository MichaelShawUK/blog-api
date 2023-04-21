import loginImg from "../assets/images/login.jpg";

const Login = () => {
  return (
    <div className="login">
      <div className="login-form">
        <form action="/login" method="post">
          <p className="form-header">Welcome Back</p>
          {/* <label for="username">Username</label> */}
          <input
            id="username"
            name="username"
            type="text"
            placeholder="Username"
            autoFocus
          ></input>
          {/* <label for="password">Password</label> */}
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
          ></input>
          <button type="submit">Log In</button>
        </form>
        <p>
          Don't have an account? <a href="/register">Register</a>
        </p>
      </div>
      <div class="login-img"></div>
    </div>
  );
};

export default Login;
