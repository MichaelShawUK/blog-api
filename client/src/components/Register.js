const Register = () => {
  return (
    <div className="login">
      <div className="login-form">
        <form action="/register" method="post">
          <p className="form-header">Get Started</p>
          <input
            id="username"
            name="username"
            type="text"
            placeholder="Username"
            autoFocus
          ></input>
          <input id="name" name="name" type="text" placeholder="Name"></input>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
          ></input>
          <input
            id="confirm-password"
            name="confirm-password"
            type="password"
            placeholder="Confirm Password"
          ></input>
          <button type="submit">Register</button>
        </form>
        <p>
          Already have an account? <a href="/login">Log In</a>
        </p>
      </div>
      <div className="login-img"></div>
    </div>
  );
};

export default Register;
