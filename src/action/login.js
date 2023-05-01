import axios from "axios";
import { redirect } from "react-router-dom";

const action = async ({ request }) => {
  const data = Object.fromEntries(await request.formData());
  const res = await axios.post(
    "http://blog-api-backend-production.up.railway.app/login",
    data
  );
  if (res.data.success) {
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("username", res.data.username);
    return redirect("/");
  }
  return res.data.message;
};

export default action;
