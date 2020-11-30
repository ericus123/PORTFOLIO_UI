import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Row,
  Col,
  ListGroup,
  Spinner,
  Form,
  FormControl,
  Container,
  Button,
  Carousel,
  Alert,
} from "react-bootstrap";
import { getPosts, searchPosts } from "../../../redux/actions/blog/posts";
import GetCats from "./getCats";
import "./styles.scss";
import { BlogError } from "../../Alerts";
import { scrollTop } from "../../../utils/functions";

const SideBar = () => {
  const posts = useSelector((state) => state.posts.posts);
  const error = useSelector((state) => state.posts.error);
  const message = useSelector((state) => state.posts.message);
  const isLoading = useSelector((state) => state.posts.isLoading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  let videos = [1, 2, 3, 4, 5];
  const recentPosts = posts.length
    ? posts.slice(-3).map((post) => {
        return (
          <>
            <Row className="recent-posts">
              <Col>
                <img
                  width={100}
                  height={100}
                  className="recent-image"
                  src={post.imageUrl}
                />
              </Col>
              <Col>
                <Link
                  to={"/blog/post/" + post._id}
                  style={{ textDecoration: "none" }}
                  onClick={scrollTop}
                >
                  <h6
                    style={{
                      textAlign: "left",
                      color: "#007bff",
                      cursor: "pointer",
                      fontSize: "medium",
                      marginLeft: "-5%",
                      textDecoration: "none",
                    }}
                  >
                    {post.title}
                  </h6>
                </Link>
                <i className="text-muted " style={{ fontSize: "small" }}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    weekday: "short",
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                  })}
                </i>
              </Col>
            </Row>
            <br />
          </>
        );
      })
    : null;
  const err = error ? (
    <Alert variant="danger" style={{ textAlign: "center" }}>
      {error}
    </Alert>
  ) : null;

  return (
    <div className="side-bar">
      {posts ? <h2 className="recent-title">What's new</h2> : null}
      {err}
      <br />
      {recentPosts}
      {isLoading ? (
        <div style={{ textAlign: "center" }}>
          <Spinner animation="border" size="md" role="status" />
        </div>
      ) : null}
      <br />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(searchPosts(e.target.data));
        }}
      >
        <input
          type="text"
          size="sm"
          placeholder="Search..."
          name="data"
          className="mr-sm-1 search-input"
          required
        />
        <Button size="sm" type="submit">
          Search
        </Button>
      </form>
      <br />
      <GetCats />
      <br />
    </div>
  );
};

export default SideBar;