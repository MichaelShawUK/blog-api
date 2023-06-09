import { Link, Form, useActionData } from "react-router-dom";

const Register = () => {
  const errors = useActionData();

  return (
    <div className="login">
      <div className="login-form">
        <Form action="/register" method="post">
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
        </Form>
        {errors && <span className="error">{errors}</span>}
        <p>
          Already have an account? <Link to="/login">Log In</Link>
        </p>
        <p>
          Go to <Link to="/">Blog Posts</Link>
        </p>
      </div>
      <div className="login-img"></div>
    </div>
  );
};

export default Register;
