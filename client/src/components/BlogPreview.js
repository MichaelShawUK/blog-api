import "../index.css";

const BlogPreview = () => {
  return (
    <div className="blog-preview">
      <img
        src="https://res.cloudinary.com/dzpobfxwj/image/upload/v1682002860/blog/abstract3_hoyu66.jpg"
        alt=""
        className="blog-img"
      />
      <div className="date-posted">April 19, 2023</div>
      <div className="blog-title">
        Axios vs. fetch: Performing HTTP requests
      </div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras at turpis
        tincidunt, hendrerit velit at, luctus nulla. Cras accumsan augue eu odio
        tempor, et maximus.
      </div>
    </div>
  );
};

export default BlogPreview;
