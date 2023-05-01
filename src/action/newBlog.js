import axios from "axios";
import { redirect } from "react-router-dom";

const action = async ({ request }) => {
  try {
    const data = Object.fromEntries(await request.formData());
    const { title, body, imageUrl } = data;

    if (!imageUrl.trim()) {
      data.imageUrl =
        "https://res.cloudinary.com/dzpobfxwj/image/upload/v1682680878/blog/istock-918973570_aerhwc.jpg";
    }

    if (!title.trim()) {
      return "Title is required";
    }

    if (!body.trim()) {
      return "Article is required";
    }

    const token = localStorage.getItem("token");
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    const res = await axios.post("http://localhost:3000/posts", data);
    if (res.data.success) {
      return redirect("/");
    }
    return res;
  } catch (err) {
    return err;
  }
};

export default action;
