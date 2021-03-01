import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { format, render, cancel, register } from "timeago.js";
import Comments from "./Comments";
import {
  Media,
  Row,
  Container,
  Col,
  Form,
  FormControl,
  Button,
  Image,
  ListGroup,
  Alert,
  Breadcrumb,
  Jumbotron,
  Dropdown,
  NavDropdown,
  Nav,
  Modal,
} from "react-bootstrap";
import {
  faAddressBook,
  faComment,
  faCommentAlt,
  faShare,
  faShareAlt,
  faShareSquare,
  faThumbsUp,
  faReply,
  faUser,
  faCaretDown,
  faEllipsisV,
  faPencilAlt,
  faTrashAlt,
} from "@fortawesome/fontawesome-free-solid";
import { faThumbsDown } from "@fortawesome/fontawesome-free-regular";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  getPost,
  PostComment,
  PostCommentReply,
  PostReaction,
} from "../../redux/actions/blog/posts";
import "./styles.scss";
import SideBar from "./sidebar/sideBar";
import ProfImage from "../../assets/img/about.jpeg";
import ScrollTop from "../ScrollTop";
import { PostShares } from "./shares/Shares";

const SinglePost = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getPost(id));
  }, [id]);

  const message = useSelector((state) => state.post.message);
  const isLoading = useSelector((state) => state.post.isLoading);
  const error = useSelector((state) => state.post.error);
  const post = useSelector((state) => state.post.post);
  const comments = useSelector((state) => state.post.comments);
  const postComment = useSelector((state) => state.postComment.comment);
  const postCommentError = useSelector((state) => state.postComment.error);
  const postCommentMessage = useSelector((state) => state.postComment.msg);
  const postCommentisLoading = useSelector(
    (state) => state.postComment.isLoading
  );
  const CommentReply = useSelector((state) => state.postCommentReply.reply);
  const CommentReplyError = useSelector(
    (state) => state.postCommentReply.error
  );
  const CommentReplyMessage = useSelector(
    (state) => state.postCommentReply.msg
  );
  const CommentReplyisLoading = useSelector(
    (state) => state.postCommentReply.isLoading
  );
  const reactionUser = useSelector((state) => state.postReaction.reactionUser);
  const reactionMsg = useSelector((state) => state.postReaction.reactionMsg);
  const reactionError = useSelector(
    (state) => state.postReaction.reactionError
  );
  const reactionisLoading = useSelector(
    (state) => state.postReaction.reactionisLoading
  );

  let errorField;
  const handleReplySubmit = async (e, id) => {};

  const singlePost = post ? (
    <>
      <Media as="li" className="single">
        <Media.Body className="body">
          <h3
            className="text-center title"
            style={{ marginTop: "10px", marginBottom: "10px" }}
          >
            {post.title}
          </h3>

          <img className="mr-3" src={post.imageUrl} alt={post.title} />
          <br />
          <Row className="post-contribution">
            <Row className="author">
              <img className="auth-image" src={ProfImage} />
              <p style={{ marginTop: "5px", marginLeft: "20px" }}>
                Written by{" "}
                <Link style={{ textDecoration: "none" }} to={"/blog"}>
                  <b>AMANI Eric</b>
                </Link>
                <br />
                <i>23 mins ago</i>
              </p>
            </Row>
            <PostShares />
          </Row>
          <br />
          <div dangerouslySetInnerHTML={{ __html: post.description }}></div>

          <ul className="list-group list-group-horizontal list-unstyled">
            <li
              className="list-group-item list-unstyled"
              style={{ border: "none" }}
            >
              <FontAwesomeIcon
                icon={faThumbsUp}
                style={{
                  color: "#007bff",
                  cursor: "pointer",
                }}
                // onClick={() => {
                //   this.props.PostReaction(postId, "like");
                // }}
              />
              <span className="badge badge-light">
                {post ? post.likes.length : null}
              </span>
            </li>
            <li
              className="list-group-item list-unstyled"
              style={{ border: "none" }}
            >
              <FontAwesomeIcon
                icon={faThumbsDown}
                style={{ color: "#007bff", cursor: "pointer" }}
                // onClick={() => {
                //   this.props.PostReaction(postId, "unlike");
                // }}
              />
              <span className="badge badge-light">
                {post ? post.unLikes.length : null}
              </span>
            </li>
            <li
              className="list-group-item list-unstyled"
              style={{ border: "none" }}
            >
              <FontAwesomeIcon
                icon={faCommentAlt}
                style={{ color: "#ffb366", cursor: "pointer" }}
              />
              <span className="badge badge-light">
                {post ? post.comments.length : null}
              </span>
            </li>
          </ul>
          <br />
          <Comments />
        </Media.Body>
      </Media>
    </>
  ) : null;

  const err = error ? <Alert variant="danger">{error}</Alert> : null;
  return (
    <div className="single-post">
      <>
        <ScrollTop />
        {singlePost}

        {isLoading ? (
          <div className="text-center mt-5">
            <div className="spinner-border" role="status"></div>
          </div>
        ) : null}
      </>
      <>
        <SideBar />
      </>
    </div>
  );
};

export default SinglePost;
