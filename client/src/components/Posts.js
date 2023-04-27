import { useState, useEffect } from "react";
import { useLoaderData, useOutletContext } from "react-router-dom";
import BlogPreview from "./BlogPreview";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loaderError, setLoaderError] = useState(null);
  const [error, res] = useLoaderData();

  const username = useOutletContext();

  useEffect(() => {
    if (error) {
      setLoaderError(error);
    } else {
      setPosts(res.data.posts);
    }
  }, []);

  return (
    <div className="Posts">
      {username && (
        <a href="/posts/new">
          <button>New Blog</button>
        </a>
      )}
      {loaderError && <p>{loaderError.message}</p>}
      {posts.map((post) => (
        <BlogPreview key={post._id} post={post} />
      ))}
    </div>
  );
}

export default Posts;
