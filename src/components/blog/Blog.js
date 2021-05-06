import React, { useEffect } from "react";
import { Media, Alert, Spinner } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation, useHistory } from "react-router-dom";
import { getPosts } from "../../redux/actions/blog/posts";
import ScrollButton from "../reusables/ScrollUp";
import SideBar from "./sidebar/sideBar";
import "./styles.scss";
import "../scss/styles.scss";
import Paginate from "./Pagination";
import { simpleAlert } from "../Alerts";
import CantFind from "../notfound/CantFind";
import { scrollTop } from "../../utils/functions";
import PostsSlider from "./PostsSlider";
import { Helmet } from "react-helmet";

const Blog = () => {
  const dispatch = useDispatch();

  const message = useSelector((state) => state.posts.message);
  const isLoading = useSelector((state) => state.posts.isLoading);
  const error = useSelector((state) => state.posts.error);
  const postsPerPage = useSelector((state) => state.posts.postsPerPage);
  const prevPage = useSelector((state) => state.posts.prevPage);
  const nextPage = useSelector((state) => state.posts.nextPage);

  const { search } = useLocation();
  const page = new URLSearchParams(search).get("page") || 1;

  useEffect(() => {
    dispatch(getPosts(page, 10));
  }, [page]);

  const loader = isLoading ? (
    <div style={{ textAlign: "center" }}>
      <br />
      <Spinner animation="border" size="lg" role="status" />
    </div>
  ) : null;
  const decodeHtml = (html) => {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  };
  const postsList = postsPerPage.length
    ? postsPerPage.map((post) => {
        return (
          <>
            <Media as="li" key={post._id} className="media">
              <div className="image_wrapper">
                <Link
                  to={`/blog/post/${post._id}/${post.slug}`}
                  className="text-decoration-none"
                  onClick={scrollTop}
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
                    onClick={scrollTop}
                  >
                    {post.title}
                  </Link>
                </h4>
                <p className="description">
                  {decodeHtml(
                    post.description
                      .replace(/(<([^>]+)>)/gi, "")
                      .substr(0, 250) + "..."
                  )}
                </p>
                <h6 style={{ marginTop: "10px" }}>
                  <Link
                    to={`/blog/post/${post._id}/${post.slug}`}
                    className="text-decoration-none link"
                    onClick={scrollTop}
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
  const err = error ? <>{simpleAlert("danger", error)}</> : null;

  return (
    <div className="Blog">
      <Helmet>
        {" "}
        <meta
          name="keywords"
          content="web developer, programmer, react, noed js, js , rwanda, kigali"
        />
        <meta
          name="description"
          content="A web designer/developer focused on crafting great web experiences."
        />
      </Helmet>
      <br />
      <ScrollButton />
      <div className="blog-wrapper">
        <div className="content-wrapper col-md-auto">
          <ul className="list-unstyled">
            {loader}
            {err}
            <PostsSlider />
            {message && !postsPerPage.length && !error ? (
              <>
                <CantFind />
              </>
            ) : null}
            <br />

            {postsList}
            <br />
            {postsPerPage.length ? (
              <div style={{ textAlign: "center" }}>
                <Paginate
                  path="blog?page="
                  items={{
                    prevPage: prevPage,
                    nextPage: nextPage,
                    error: error,
                  }}
                />
              </div>
            ) : null}
            <br />
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
export default Blog;
