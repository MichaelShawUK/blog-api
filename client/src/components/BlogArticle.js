import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BlogArticle = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/posts/${postId}`).then((res) => {
      setPost(res.data.post);
    });
  }, [postId]);

  return (
    <>
      {post && (
        <div className="blog-article">
          <img src={post.imageUrl} alt="" className="article-img"></img>
          <h1>{post.title}</h1>
          <div>{post.body}</div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec
            purus vestibulum, rhoncus sapien quis, auctor dui. Aenean tincidunt
            mauris in velit lobortis, eget lacinia purus finibus. Praesent at
            ullamcorper libero, et malesuada massa. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Vivamus eget ultricies tellus.
            Suspendisse ac nibh aliquet, sodales lorem vitae, sagittis justo.
            Duis auctor venenatis enim ac gravida. Nulla non urna eget purus
            varius rutrum quis sed augue. Duis pellentesque congue leo, ut
            efficitur eros volutpat eu. Cras justo lorem, malesuada vehicula
            feugiat a, tincidunt in dui. Etiam placerat ex eros, ac pulvinar
            massa cursus at. Quisque in risus commodo, pulvinar elit et,
            suscipit turpis. Nunc nisl nibh, accumsan sed sem in, porta euismod
            arcu. Proin dictum semper dolor vitae molestie. Curabitur efficitur
            congue nunc quis scelerisque. Etiam dignissim lacinia felis
            elementum fringilla. Nunc eu est blandit, accumsan odio sit amet,
            hendrerit leo. Vivamus dolor mi, suscipit ac mollis vulputate,
            congue eu leo. Nullam iaculis pellentesque massa nec rhoncus. Duis a
            elementum sem. Maecenas a mollis lorem. Sed tincidunt mi sit amet
            libero volutpat, eget suscipit enim malesuada. Ut lobortis lacus nec
            velit consequat convallis. Quisque eleifend, magna vel condimentum
            malesuada, ipsum eros consectetur ligula, at pellentesque nibh metus
            vel ipsum. Nulla fermentum vel diam sit amet consequat. Donec
            maximus mattis lacus, eget convallis nibh fermentum a. Duis vehicula
            enim eget tincidunt scelerisque. Quisque ornare commodo mauris et
            gravida. Vestibulum malesuada, eros sit amet pretium scelerisque, ex
            erat facilisis lectus, eu imperdiet tellus massa eget lacus. Nunc
            volutpat, dui a ultricies pretium, nibh diam laoreet erat, eget
            volutpat lacus augue ut nisi. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Nulla pharetra
            suscipit ullamcorper. Fusce porttitor augue leo, eget ullamcorper
            purus egestas id. Vivamus at felis sed mi efficitur volutpat. Fusce
            iaculis bibendum hendrerit. Donec varius nunc ultricies tellus
            efficitur pellentesque. Nulla nulla lectus, scelerisque sit amet
            tortor sit amet, varius lacinia lectus. Phasellus imperdiet urna
            eget lacinia posuere. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia curae; Aliquam ac dignissim
            purus. Quisque nibh diam, congue nec tristique in, efficitur sed
            magna. Quisque a risus et sapien dignissim hendrerit. Sed ante
            libero, suscipit ut turpis ut, ultricies lacinia augue. Proin magna
            tortor, vehicula id molestie et, ornare at eros. Aenean ut felis nec
            magna placerat bibendum at et tortor. Curabitur a ligula sodales,
            eleifend quam et, pulvinar lacus. Integer sodales, odio non
            scelerisque cursus, risus orci finibus diam, eget ultricies massa
            velit quis leo. In bibendum tortor quis ultrices lobortis. Nunc
            rhoncus enim felis, et tincidunt leo lacinia sit amet. Vivamus
            eleifend nec orci nec placerat. Nunc est purus, volutpat eget
            efficitur et, maximus eget orci. Duis venenatis felis quis nulla
            aliquam euismod. Fusce nec commodo nisl. Sed ac urna sit amet magna
            dapibus sagittis sit amet nec risus. Donec non augue sit amet quam
            elementum fermentum. Duis id tincidunt sapien, ut facilisis tellus.
            Quisque accumsan libero ac leo mollis tincidunt. Ut non ipsum
            ultricies, auctor risus id, eleifend dolor. Suspendisse massa velit,
            placerat eu lorem hendrerit, molestie ultricies erat. Sed efficitur
            pretium felis sed porta.
          </div>
        </div>
      )}
    </>
  );
};

export default BlogArticle;
