import axios from "axios";
import image from "./assets/glenn-carstens-peters-P1qyEf1g0HU-unsplash.jpg";
const Blog = () => {
  // let article;
  // axios
  //   .get("https://apifeatures.herokuapp.com/api/posts")
  //   .then(async (response) => {
  //     article = await response.data.map((post) => {
  //       return (
  //         <div className="blog-left">
  //           <div className="post-title">
  //             <h1>{post.title}</h1>
  //           </div>
  //           <div className="post-image">
  //             <img src={image} />
  //           </div>
  //           <div className="post-description">
  //             <p>{post.description}</p>
  //           </div>
  //           <div></div>
  //         </div>
  //       );
  //     });
  //     console.log(article);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  return (
    <div className="blog">
      <div className="blog-header">Header</div>
      <div className="articles">
        <div className="blog-left">
          <div className="post-title">
            <h1>This is a sample post title</h1>
          </div>
          <div className="post-image">
            <img src={image} />
          </div>
          <div className="post-description">
            <p>
              This is a sample post description.This is a sample post
              description. This is a sample post description. This is a sample
              post description. This is a sample post description. This is a
              sample post description. This is a sample post description. This
              is a sample post description. This is a sample post description.
              This is a sample post description. This is a sample post
              description. This is a sample post description. This is a sample
              post description.
            </p>
          </div>
          <div></div>
          <div className="post-title">
            <h1>This is a sample post title</h1>
          </div>
          <div className="post-image">
            <img src={image} />
          </div>
          <div className="post-description">
            <p>
              This is a sample post description.This is a sample post
              description. This is a sample post description. This is a sample
              post description. This is a sample post description. This is a
              sample post description. This is a sample post description. This
              is a sample post description. This is a sample post description.
              This is a sample post description. This is a sample post
              description. This is a sample post description. This is a sample
              post description.
            </p>
          </div>
          <div></div>
          <div className="post-title">
            <h1>This is a sample post title</h1>
          </div>
          <div className="post-image">
            <img src={image} />
          </div>
          <div className="post-description">
            <p>
              This is a sample post description.This is a sample post
              description. This is a sample post description. This is a sample
              post description. This is a sample post description. This is a
              sample post description. This is a sample post description. This
              is a sample post description. This is a sample post description.
              This is a sample post description. This is a sample post
              description. This is a sample post description. This is a sample
              post description.
            </p>
          </div>
          <div></div>
          <div className="post-title">
            <h1>This is a sample post title</h1>
          </div>
          <div className="post-image">
            <img src={image} />
          </div>
          <div className="post-description">
            <p>
              This is a sample post description.This is a sample post
              description. This is a sample post description. This is a sample
              post description. This is a sample post description. This is a
              sample post description. This is a sample post description. This
              is a sample post description. This is a sample post description.
              This is a sample post description. This is a sample post
              description. This is a sample post description. This is a sample
              post description.
            </p>
          </div>
          <div></div>
          <div className="post-title">
            <h1>This is a sample post title</h1>
          </div>
          <div className="post-image">
            <img src={image} />
          </div>
          <div className="post-description">
            <p>
              This is a sample post description.This is a sample post
              description. This is a sample post description. This is a sample
              post description. This is a sample post description. This is a
              sample post description. This is a sample post description. This
              is a sample post description. This is a sample post description.
              This is a sample post description. This is a sample post
              description. This is a sample post description. This is a sample
              post description.
            </p>
          </div>
          <div></div>
        </div>
        <div className="blog-right">Right</div>
      </div>
    </div>
  );
};

export default Blog;
