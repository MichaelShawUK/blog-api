import "../index.css";

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
      <a href={`/${post.post._id}`}>
        <img src={imageUrl} alt="" className="blog-img" />
        <div className="date-posted">{dateFormatted}</div>
        <div className="blog-title">{title}</div>
        <div>{body}</div>
      </a>
    </div>
  );
};

export default BlogPreview;
