import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BlogArticle = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [date, setDate] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/posts/${postId}`).then((res) => {
      setPost(res.data.post);
    });
  }, [postId]);

  useEffect(() => {
    if (post) {
      const timestamp = new Date(post.updatedAt);

      const dateFormatted = timestamp.toLocaleDateString("en-gb", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });

      setDate(dateFormatted);
    }
  }, [post]);

  return (
    <>
      {post && (
        <div className="blog-article">
          <img src={post.imageUrl} alt="" className="article-img"></img>
          <h1 className="blog-title blog-text">{post.title}</h1>
          <div className="blog-text">
            by <strong>{post.author.name}</strong> last edited {date}
          </div>
          <p className="blog-text">
            <i>{post.body}</i>
          </p>
          <div className="blog-text">
            Etiam semper leo a auctor blandit. Nullam neque nunc, tempor mattis
            quam et, suscipit varius enim. Aliquam venenatis diam eget diam
            euismod pulvinar. Vivamus non metus eu arcu tristique consequat a ut
            diam. Praesent tempor posuere augue, ac tincidunt neque pulvinar a.
            Duis auctor arcu eu metus lobortis, sit amet ultricies felis
            tristique. Nam semper est quis dictum sagittis. Fusce ac quam
            libero. Nunc imperdiet non lacus sed interdum. Mauris sit amet justo
            ac leo volutpat luctus. Interdum et malesuada fames ac ante ipsum
            primis in faucibus. Mauris tempor nunc luctus est efficitur, eu
            vehicula massa elementum.
            <br></br>
            <br></br>
            Mauris dictum accumsan augue, sed mattis ipsum vulputate in. Proin
            tincidunt enim ut risus fringilla mattis. Suspendisse in
            sollicitudin nibh, nec dignissim ante. Quisque pellentesque
            hendrerit mattis. Ut quis nisi imperdiet, maximus nisi vel,
            hendrerit sem. Duis sed nulla sodales odio eleifend rhoncus. Sed
            ultricies hendrerit felis, in sodales lacus elementum eu. In
            vulputate eget diam sit amet tristique. Aliquam metus felis,
            consequat id erat non, luctus gravida metus. Ut ultricies ut velit
            nec gravida. Nam dictum eros eu dolor vehicula ultricies. Vestibulum
            gravida maximus diam a ullamcorper. Quisque mi quam, tincidunt sed
            feugiat non, placerat id magna. Nam et libero ut arcu suscipit
            bibendum. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. Duis eleifend urna nisi, id
            sodales diam egestas a.
            <br></br>
            <br></br>
            Curabitur dictum urna ac venenatis consequat. In hac habitasse
            platea dictumst. Sed venenatis sapien ultrices tellus fringilla, id
            aliquet libero pulvinar. Vestibulum ligula neque, porta et enim ac,
            tincidunt finibus nisi. Nunc eu vulputate ex, tempor consectetur
            ipsum. Praesent nisl velit, posuere ac est quis, finibus viverra
            massa. Nullam et gravida ante, et facilisis massa.
            <br></br>
            <br></br>
            Mauris eu posuere lorem. Proin tincidunt nunc nisl, a venenatis mi
            pharetra vitae. Mauris malesuada dui et facilisis mollis. Fusce sed
            suscipit massa, vel lobortis ligula. Etiam eu erat in metus volutpat
            semper. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Phasellus nec turpis vel ex elementum viverra. Proin a
            sagittis mauris. Vivamus aliquet sem vel leo blandit, a commodo ante
            ornare.
            <br></br>
            <br></br>
            Pellentesque in mollis risus. Ut faucibus odio eu metus vulputate
            rhoncus eget et tellus. Pellentesque vel mi a risus pharetra
            porttitor sit amet at lorem. Aliquam quam libero, tincidunt a dolor
            ut, porttitor iaculis tortor. Aenean suscipit, velit ac vehicula
            rutrum, velit ipsum gravida nibh, nec facilisis tellus nibh at
            ligula. Mauris quis maximus nibh, vitae auctor orci. Donec congue
            placerat nisi sed luctus.
            <br></br>
            <br></br>
            In sagittis sollicitudin erat vel vestibulum. Donec semper magna vel
            turpis imperdiet, ac feugiat leo convallis. Curabitur lectus libero,
            suscipit vel quam porttitor, tempor vehicula elit. Duis tincidunt
            convallis leo. Vestibulum quis odio justo. Aliquam molestie urna
            arcu, non vulputate nisi commodo eu. Aliquam lacinia velit tempus,
            posuere dolor ut, cursus quam. In in massa massa. Integer tempor est
            at mi varius, sed iaculis quam gravida. Nullam posuere vulputate
            elit, sed pretium mi vehicula sit amet. Orci varius natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Pellentesque ut tempor arcu. Cras nec tortor condimentum, commodo
            quam at, tincidunt magna. Donec a turpis et leo cursus auctor. Nunc
            sit amet diam quis odio facilisis tristique.
          </div>
        </div>
      )}
    </>
  );
};

export default BlogArticle;
