import { Form, useActionData } from "react-router-dom";

const NewBlog = () => {
  const error = useActionData();
  if (error) {
    return <div>{error?.data?.message}</div>;
  }

  return (
    <Form action="/posts/new" method="post" id="new-blog-form">
      <section>
        <label htmlFor="title">Title</label>
        <input id="title" name="title" type="text" autoFocus></input>
      </section>
      <section>
        <label htmlFor="body">Article</label>
        <textarea id="body" name="body" rows={20}></textarea>
      </section>
      <section>
        <label htmlFor="imageUrl">Article Image URL</label>
        <input id="imageUrl" name="imageUrl" type="text"></input>
      </section>
      {/* <label htmlFor="isPublished">Publish Article</label>
      <input id="isPublished" name="isPublished" type="checkbox"></input> */}
      <button type="submit">Add Blog</button>
    </Form>
  );
};

export default NewBlog;
