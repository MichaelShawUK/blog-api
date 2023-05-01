import axios from "axios";
import { redirect } from "react-router-dom";

const action = async ({ request }) => {
  const data = Object.fromEntries(await request.formData());
  const res = await axios.post(
    `http://blog-api-backend-production.up.railway.app/posts/${data.post}/comments`,
    data
  );
  if (res.data.success) {
    return redirect(`/posts/${data.post}`);
  }
  return null;
};

export default action;
