import axios from "axios";
import { redirect } from "react-router-dom";

const action = async ({ request }) => {
  try {
    const data = Object.fromEntries(await request.formData());
    const token = localStorage.getItem("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    const res = await axios.post("http://localhost:3000/posts", data);
    if (res.data.success) {
      return redirect("/posts");
    }
    return res;
  } catch (err) {
    return err;
  }
};

export default action;
