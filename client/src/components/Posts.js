import { useState, useEffect } from "react";
import { useLoaderData, useOutletContext, Link } from "react-router-dom";
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
    <>
      {username && (
        <Link to="/posts/new">
          <button id="new-blog-btn">New Blog</button>
        </Link>
      )}
      {loaderError && <p>{loaderError.message}</p>}
      <div className="Posts">
        {posts.map((post) => (
          <BlogPreview key={post._id} post={post} />
        ))}
      </div>
    </>
  );
}

export default Posts;
