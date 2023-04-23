import axios from "axios";

const loader = async () => {
  try {
    const res = await axios.get("http://localhost:3000/postss");
    // console.log(res);
    return [null, res];
  } catch (err) {
    console.log(err);
    return [err, null];
  }
};

export default loader;
