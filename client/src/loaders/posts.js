import axios from "axios";

const loader = async () => {
  try {
    const res = await axios.get("http://localhost:3000/posts");
    return [null, res];
  } catch (err) {
    return [err, null];
  }
};

export default loader;
