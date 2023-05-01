import Comment from "./Comment";

const Comments = ({ comments }) => {
  return (
    <div className="comments">
      <h2>Comments</h2>
      {comments &&
        comments.map((comment) => {
          return <Comment key={comment._id} comment={comment} />;
        })}
      {!comments && <p>There are no comments for this post</p>}
    </div>
  );
};

export default Comments;
