import "./Posts.css";
import axios from "axios";
import { useState, useEffect } from "react";
import BlogPreview from "./components/BlogPreview";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log("RUNS ONCE");
    axios.get("http://localhost:3000/posts").then((res) => {
      setPosts(res.data.posts);
    });
  }, []);

  return (
    <div className="Posts">
      {posts.map((post) => (
        <BlogPreview key={post._id} post={post} />
      ))}
    </div>
  );
}

export default Posts;
