import axios from "axios";

const loader = async ({ params }) => {
  const { postId } = params;
  const res = await axios.get(`http://localhost:3000/posts/${postId}/comments`);
  if (res.data.comments) {
    return res.data.comments;
  }
  return null;
};

export default loader;
