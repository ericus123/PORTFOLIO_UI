import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  Alert,
} from "react-bootstrap";
import { faSearch } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  getPosts,
  searchPostsRequest,
} from "../../../redux/actions/blog/posts";
import GetCats from "./getCats";
import "./styles.scss";
import { BlogError } from "../../Alerts";
import { scrollTop } from "../../../utils/functions";

const SideBar = () => {
  const posts = useSelector((state) => state.posts.posts);
  const error = useSelector((state) => state.posts.error);
  const message = useSelector((state) => state.posts.message);
  const isLoading = useSelector((state) => state.posts.isLoading);
  const searchPosts = useSelector((state) => state.searchPosts.posts);
  const searchError = useSelector((state) => state.searchPosts.error);
  const searchMessage = useSelector((state) => state.searchPosts.message);
  const searchIsLoading = useSelector((state) => state.searchPosts.isLoading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  const history = useHistory();

  const recentPosts = posts.length
    ? posts.slice(0, 3).map((post) => {
        return (
          <div className="recent-posts">
            <img className="recent-image" src={post.imageUrl} />

            <div>
              <Link
                to={`/blog/post/${post._id}/${post.slug}`}
                style={{ textDecoration: "none" }}
                onClick={scrollTop}
              >
                <h6
                  className="recent-post-title"
                  style={{
                    color: "#007bff",
                    cursor: "pointer",
                    textDecoration: "none",
                  }}
                >
                  {post.title}
                </h6>
              </Link>
              <i className="text-muted " style={{ fontSize: "small" }}>
                {new Date(post.createdAt).toLocaleDateString("en-US", {
                  weekday: "short",
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                })}
              </i>
            </div>
          </div>
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
      {posts.length ? <h2 className="recent-title">What's new</h2> : null}
      {err}
      <br />
      {recentPosts}
      <br />
      {posts.length ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            scrollTop();
            dispatch(searchPostsRequest(e.target.data.value));
            history.push(`/blog/search?term=${e.target.data.value}`);
            e.target.reset();
          }}
        >
          <input type="text" placeholder="Search..." name="data" required />

          <Button className="submit_btn" type="submit">
            <FontAwesomeIcon className="search_icon" icon={faSearch} />
          </Button>
        </form>
      ) : null}
      <br />
      <GetCats />
      <br />
      <br />
    </div>
  );
};

export default SideBar;
