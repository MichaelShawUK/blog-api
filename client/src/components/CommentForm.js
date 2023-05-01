import { Form, useParams } from "react-router-dom";
import { useState } from "react";

const CommentForm = () => {
  const [showCommentForm, setShowCommentForm] = useState(false);
  const { postId } = useParams();
  return (
    <>
      {!showCommentForm && (
        <button
          onClick={() => setShowCommentForm(true)}
          className="add-comment-btn"
        >
          Add Comment
        </button>
      )}
      {showCommentForm && (
        <Form
          action={`/posts/${postId}/comments`}
          method="post"
          id="comment-form"
          onSubmit={() => setShowCommentForm(false)}
        >
          <input name="post" type="text" value={postId} hidden readOnly></input>
          <label htmlFor="author">Name</label>
          <input id="author" name="author" type="text" required></input>
          <label htmlFor="body">Comment</label>
          <textarea id="body" name="body" rows={10} required></textarea>
          <button type="submit">Submit Comment</button>
        </Form>
      )}
    </>
  );
};

export default CommentForm;
