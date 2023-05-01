import axios from "axios";

const loader = async ({ params }) => {
  const { postId } = params;
  const res = await axios.get(
    `https://blog-api-backend-production.up.railway.app/posts/${postId}/comments`
  );
  if (res.data.comments) {
    return res.data.comments;
  }
  return null;
};

export default loader;
