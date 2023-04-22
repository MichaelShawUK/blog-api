import Comment from "./Comment";

const Comments = ({ comments }) => {
  return (
    <div className="comments">
      <h2>Comments</h2>
      {comments.map((comment) => {
        return <Comment key={comment._id} comment={comment} />;
      })}
    </div>
  );
};

export default Comments;
