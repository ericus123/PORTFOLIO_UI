import React, { useState, useEffect } from "react";
import { Media, Button, Alert, Carousel, Spinner } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams, useLocation } from "react-router-dom";
import { getPosts, searchPosts } from "../../redux/actions/blog/posts";
import "./styles.scss";
import "../scss/styles.scss";

const PostsSlider = () => {
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.posts.posts);
  const isLoading = useSelector((state) => state.posts.isLoading);
  const error = useSelector((state) => state.posts.error);
  const mesage = useSelector((state) => state.posts.message);

  const postsSlider = posts.length 
    ? posts.slice(-5).map((post) => {
        return (
          <Carousel.Item style={{ maxHeight: "400px" }} interval={3000}>
            <img className="d-block w-100" src={post.imageUrl} />
            <Carousel.Caption>
              <Link
                to={"/blog/post/" + post._id}
                style={{
                  color: "rgb(0, 123, 255)",
                  background: "white",
                  textDecoration: "none",
                  paddingLeft: "2px",
                  marginRight: "2px",
                }}
              >
                {post.title}
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })
    : null;

  const err = error ? (
    <Alert variant="danger" style={{ textAlign: "center" }}>
      {error}
    </Alert>
  ) : null;

  return (
  
          <span>
            {err}
            
            <Carousel>{postsSlider}</Carousel>
            <br />
            </span>
     
  );
};
export default PostsSlider;
