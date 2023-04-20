import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import BlogPreview from "./components/BlogPreview";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log("RUNS ONCE");
    axios.get("http://localhost:3000/posts").then((res) => {
      console.log(res.data);
      setPosts(res.data.posts);
    });
  }, []);

  return (
    <div className="App">
      <BlogPreview />
      {posts.map((post) => {
        return (
          <div key={post._id}>
            <h1>{post.title}</h1>
            <p>
              Posted by <strong>{post.author.name}</strong>
            </p>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
