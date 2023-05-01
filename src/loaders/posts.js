import axios from "axios";

const loader = async () => {
  try {
    const res = await axios.get(
      "https://blog-api-backend-production.up.railway.app/posts"
    );
    return [null, res];
  } catch (err) {
    return [err, null];
  }
};

export default loader;
