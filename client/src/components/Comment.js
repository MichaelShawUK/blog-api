const Comment = ({ comment }) => {
  const date = new Date(comment.createdAt);
  const dateFormatted = date.toLocaleTimeString("en-gb", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: false,
  });

  return (
    <div className="comment">
      <div className="comment-header">
        <span>
          <strong>{comment.author}</strong>
        </span>
        <span className="date-posted">{dateFormatted}</span>
      </div>
      <p>{comment.body}</p>
    </div>
  );
};

export default Comment;
