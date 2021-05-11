import React, { useEffect } from "react";
import { Media, Alert } from "react-bootstrap";

import "./styles.scss";
import { getPostsByCat } from "../../redux/actions/blog/posts";
import { useSelector, useDispatch } from "react-redux";
import SideBar from "./sidebar/sideBar";
import { Link, useParams, useLocation } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import Paginate from "./Pagination";
import CantFind from "../notfound/CantFind";
import NotFound from "../notfound/404";
import ScrollButton from "../reusables/ScrollUp";
import "./styles.scss";

const PostsByCategory = () => {
  const message = useSelector((state) => state.postsByCat.message);
  const isLoading = useSelector((state) => state.postsByCat.isLoading);
  const error = useSelector((state) => state.postsByCat.error);
  const catPosts = useSelector((state) => state.postsByCat.postsPerPage);
  const prevPage = useSelector((state) => state.postsByCat.prevPage);
  const nextPage = useSelector((state) => state.postsByCat.nextPage);
  const maxPages = useSelector((state) => state.postsByCat.maxPages);

  const dispatch = useDispatch();
  const { category } = useParams();
  const { search } = useLocation();
  const page = new URLSearchParams(search).get("page") || 1;

  useEffect(() => {
    dispatch(getPostsByCat(category, page));
  }, [category, page]);

  const decodeHtml = (html) => {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  };
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
          {category}
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
      <ScrollButton />
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
            {message && !catPosts.length ? <NotFound /> : null}
            {breadCrumb}
            {categorizedPosts}
          </ul>
          {catPosts.length ? (
            <div style={{ textAlign: "center" }}>
              <Paginate
                path={`${category}?page=`}
                items={{
                  prevPage: prevPage,
                  nextPage: nextPage,
                  maxPages: maxPages,
                  error: error,
                }}
              />
            </div>
          ) : null}
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
