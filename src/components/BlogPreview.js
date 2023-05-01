import "../index.css";
import { Link } from "react-router-dom";

const BlogPreview = (post) => {
  const { title, body, updatedAt, imageUrl } = post.post;

  const date = new Date(updatedAt);

  const dateFormatted = date.toLocaleDateString("en-us", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="blog-preview">
      <Link to={`/posts/${post.post._id}`}>
        <img src={imageUrl} alt="" className="blog-img" />
        <div className="date-posted">{dateFormatted}</div>
        <div className="blog-title">{title}</div>
        <div>{body}</div>
      </Link>
    </div>
  );
};

export default BlogPreview;
