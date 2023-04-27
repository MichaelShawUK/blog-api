import { Form } from "react-router-dom";

const NewBlog = () => {
  return (
    <Form action="/posts/new" method="post" id="new-blog-form">
      <section>
        <label htmlFor="title">Title</label>
        <input id="title" name="title" type="text" autoFocus></input>
      </section>
      <section>
        <label htmlFor="body">Article</label>
        <textarea id="body" rows={20}></textarea>
      </section>
      <section>
        <label htmlFor="imageUrl">Article Image URL</label>
        <input id="imageUrl" name="imageUrl" type="text"></input>
      </section>
      {/* <section> */}
      <label htmlFor="isPublished">Publish Article</label>
      <input id="isPublished" name="isPublished" type="checkbox"></input>
      {/* </section> */}
      <button type="submit">Add Blog</button>
    </Form>
  );
};

export default NewBlog;
