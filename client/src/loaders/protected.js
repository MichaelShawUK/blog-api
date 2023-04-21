import axios from "axios";

const loader = async () => {
  const token = localStorage.getItem("token");
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
  const res = await axios.get("http://localhost:3000/protected");
  return res;
};

export default loader;
