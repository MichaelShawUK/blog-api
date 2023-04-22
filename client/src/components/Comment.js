const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <div className="comment-header">
        <span>
          <strong>{comment.author}</strong>
        </span>
        <span>{comment.createdAt}</span>
      </div>
      <p>{comment.body}</p>
    </div>
  );
};

export default Comment;
