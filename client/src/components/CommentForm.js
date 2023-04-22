import { Form, useParams } from "react-router-dom";

const showForm = (e) => {
  const commentForm = document.getElementById("comment-form-container");
  commentForm.classList.remove("displayNone");
  e.target.style = "display: none";
};

const hideForm = (e) => {
  const commentForm = document.getElementById("comment-form-container");
  commentForm.classList.add("displayNone");
};

const CommentForm = () => {
  const { postId } = useParams();
  return (
    <>
      <button onClick={showForm} className="add-comment-btn">
        Add Comment
      </button>
      <div id="comment-form-container" className="displayNone">
        <Form
          action={`/posts/${postId}/comments`}
          method="post"
          id="comment-form"
        >
          <input name="post" type="text" value={postId} hidden readOnly></input>
          <label htmlFor="author">Name</label>
          <input id="author" name="author" type="text"></input>
          <label htmlFor="body">Comment</label>
          <textarea id="body" name="body" rows={10}></textarea>
          <button type="submit" onClick={hideForm}>
            Submit Comment
          </button>
        </Form>
      </div>
    </>
  );
};

export default CommentForm;
