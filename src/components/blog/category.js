import React, { useEffect } from "react";
import { Media, Alert } from "react-bootstrap";

import "./styles.scss";
import { getPostsByCat } from "../../redux/actions/blog/posts";
import { useSelector, useDispatch } from "react-redux";
import SideBar from "./sidebar/sideBar";
import { Link, useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import "./styles.scss";

const PostsByCategory = () => {
  const message = useSelector((state) => state.postsByCat.message);
  const isLoading = useSelector((state) => state.postsByCat.isLoading);
  const error = useSelector((state) => state.postsByCat.error);
  const catPosts = useSelector((state) => state.postsByCat.posts);
  const dispatch = useDispatch();
  const { category } = useParams();
  useEffect(() => {
    dispatch(getPostsByCat(category));
  }, [category]);

  const breadCrumb = catPosts.length ? (
    <>
      <br />
      <div>
        <Link to={"/blog"} style={{ textDecoration: "none" }}>
          Blog
        </Link>
        &nbsp;&gt;&nbsp;
        <a style={{ textDecoration: "none" }} className="">
          Category
        </a>
        &nbsp;&gt;&nbsp;
        <a style={{ textDecoration: "none" }} className="">
          {catPosts[0].category}
        </a>
      </div>
      <br />
    </>
  ) : null;
  const categorizedPosts = catPosts.length
    ? catPosts
        .slice()
        .sort((a, b) => (b.date > a.date ? 1 : -1))
        .map((post) => {
          return (
            <>
              <Media as="li" key={post._id} className="media">
                <div className="image_wrapper">
                  <Link
                    to={`/blog/post/${post._id}/${post.slug}`}
                    className="text-decoration-none"
                  >
                    <img
                      width={384}
                      height={256}
                      className="image"
                      src={post.imageUrl}
                      dpr="auto"
                    />
                  </Link>
                </div>
                <br />
                &nbsp; &nbsp;&nbsp;
                <Media.Body className="media-body">
                  <h4 className="title">
                    <Link
                      to={`/blog/post/${post._id}/${post.slug}`}
                      className="text-decoration-none "
                      style={{ color: "#000" }}
                    >
                      {post.title}
                    </Link>
                  </h4>
                  <p className="description">
                    {post.description
                      .replace(/(<([^>]+)>)/gi, "")
                      .substr(0, 250) + "..."}
                  </p>
                  <h6 style={{ marginTop: "10px" }}>
                    <Link
                      to={`/blog/post/${post._id}/${post.slug}`}
                      className="text-decoration-none link"
                    >
                      Read More
                    </Link>
                  </h6>
                </Media.Body>
              </Media>
              <br />
            </>
          );
        })
    : null;

  const err = error ? <Alert variant="danger">{error}</Alert> : null;
  return (
    <div className="Blog">
      <div className="blog-wrapper">
        <div className="content-wrapper col-md-auto">
          <ul className="list-unstyled">
            {isLoading ? (
              <div style={{ textAlign: "center" }}>
                <br />
                <br />
                <Spinner animation="border" size="lg" role="status" />
              </div>
            ) : null}
            {err}
            {breadCrumb}
            {categorizedPosts}
          </ul>
        </div>
        <div className="side-nav">
          <ul className="list-unstyled">
            <br />

            <SideBar />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PostsByCategory;
