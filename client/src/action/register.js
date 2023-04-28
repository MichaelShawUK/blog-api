import axios from "axios";
import { redirect } from "react-router-dom";

const action = async ({ request }) => {
  const data = Object.fromEntries(await request.formData());
  const { username, name, password } = data;
  const confirmPassword = data["confirm-password"];

  if (password !== confirmPassword) {
    return "Passwords do not match";
  }

  if (username.trim().length < 6) {
    return "Username must have minimum 6 characters";
  }

  if (!name.trim()) {
    return "Name is required";
  }

  if (!password.trim()) {
    return "Password is required";
  }

  if (password.length < 8) {
    return "Password must be minimum 8 characters";
  }

  const registerResponse = await axios.post(
    "http://localhost:3000/register",
    data
  );

  if (registerResponse.data.success) {
    const loginResponse = await axios.post("http://localhost:3000/login", data);
    if (loginResponse.data.success) {
      localStorage.setItem("token", loginResponse.data.token);
      localStorage.setItem("username", loginResponse.data.username);
      return redirect("/posts");
    }
  }
  return registerResponse.data.message;
};

export default action;
