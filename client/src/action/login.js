import axios from "axios";
import { redirect } from "react-router-dom";

const action = async ({ request }) => {
  const data = Object.fromEntries(await request.formData());
  const res = await axios.post("http://localhost:3000/login", data);
  if (res.data.success) {
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("username", res.data.username);
    return redirect("/posts");
  }
  return res.data.message;
};

export default action;
