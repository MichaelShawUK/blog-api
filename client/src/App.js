import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import BlogPreview from "./components/BlogPreview";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log("RUNS ONCE");
    axios.get("http://localhost:3000/posts").then((res) => {
      setPosts(res.data.posts);
    });
  }, []);

  return (
    <div className="App">
      {posts.map((post) => (
        <BlogPreview key={post._id} post={post} />
      ))}
    </div>
  );
}

export default App;
