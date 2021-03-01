import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { format, render, cancel, register } from "timeago.js";
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
  const { id, slug } = useParams();
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

  const Comments = comments
    ? comments.map((comment) => {
        return (
          <Row>
            <Col xd={2} md={2} className="comment-profile">
              <Link className="link" to={"/blog"}>
                <Image
                  className="img"
                  src={comment.user.imageUrl}
                  roundedCircle
                />
              </Link>
            </Col>
            <Col>
              <Jumbotron style={{ padding: "10px" }}>
                {comment.user.username == localStorage.getItem("username") ? (
                  <Nav style={{ float: "right" }}>
                    <NavDropdown
                      title={
                        <FontAwesomeIcon
                          style={{
                            float: "right",
                            color: "#007bff",
                            cursor: "pointer",
                          }}
                          icon={faEllipsisV}
                        />
                      }
                      id="dropdown-menu-align-responsive-1"
                    >
                      <NavDropdown.Item style={{ color: "#17a2b8" }}>
                        <FontAwesomeIcon icon={faPencilAlt} /> Edit
                      </NavDropdown.Item>
                      <NavDropdown.Item style={{ color: "#dc3545" }}>
                        <FontAwesomeIcon icon={faTrashAlt} /> Delete
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                ) : null}

                <div style={{ display: "flex" }}>
                  <p>
                    <FontAwesomeIcon icon={faUser} />
                    &nbsp;
                    <span style={{ fontWeight: "500" }}>
                      {comment.user.username}
                    </span>
                    &nbsp;
                    <span style={{ fontWeight: "300", fontSize: "smaller" }}>
                      <i>{format(comment.date)}</i>
                    </span>
                  </p>
                </div>
                <p size="h6">{comment.description}</p>
                <p>
                  <Button
                    size="sm"
                    variant="primary"
                    style={{ border: "none" }}
                    onClick={() => {
                      document.querySelector(
                        `.reply-form-row${comment._id}`
                      ).style.display = "block";
                    }}
                  >
                    <FontAwesomeIcon icon={faReply} />
                    &nbsp; Reply
                  </Button>
                  &nbsp;
                  {comment.replies.length ? (
                    <Button
                      size="sm"
                      style={{ background: "	#ffb366", border: "none" }}
                      onClick={() => {
                        const links = document.querySelectorAll(
                          `.a${comment._id}`
                        );
                        links.forEach((link) => {
                          link.style.display = "block";
                        });
                      }}
                    >
                      Replies {comment.replies.length}
                    </Button>
                  ) : null}
                  &nbsp; &nbsp;&nbsp;
                  <FontAwesomeIcon
                    style={{ color: "#007bff", cursor: "pointer" }}
                    icon={faThumbsUp}
                  />
                  <span className="badge badge-light">
                    {comment.likes.length}
                  </span>
                  &nbsp;&nbsp;
                  <FontAwesomeIcon
                    style={{ color: "#007bff", cursor: "pointer" }}
                    icon={faThumbsDown}
                  />
                  <span className="badge badge-light">
                    {comment.unLikes.length}
                  </span>
                </p>
              </Jumbotron>
              <Col className={"a" + comment._id} style={{ display: "none" }}>
                <Row>
                  <h6
                    style={{
                      marginLeft: "auto",
                      color: "#007bff",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      const links = document.querySelectorAll(
                        `.a${comment._id}`
                      );
                      links.forEach((link) => {
                        link.style.display = "none";
                      });
                    }}
                  >
                    hide replies
                  </h6>
                </Row>
                {comment.replies.map((reply) => {
                  return (
                    <Row>
                      <Col xd={2} md={2} className="comment-profile">
                        <Image
                          className="img"
                          src={reply.user.imageUrl}
                          roundedCircle
                        />
                      </Col>
                      <Col>
                        <Jumbotron style={{ padding: "10px" }}>
                          <div style={{ display: "flex" }}>
                            <p>
                              <FontAwesomeIcon icon={faUser} />
                              &nbsp;
                              <span style={{ fontWeight: "500" }}>
                                {reply.user.username}
                              </span>
                              &nbsp;
                              <span
                                style={{
                                  fontWeight: "300",
                                  fontSize: "smaller",
                                }}
                              >
                                <i>{format(reply.date)}</i>
                              </span>
                            </p>
                          </div>
                          {reply.user.username ==
                          localStorage.getItem("username") ? (
                            <Nav style={{ float: "right" }}>
                              <NavDropdown
                                title={
                                  <FontAwesomeIcon
                                    style={{
                                      float: "right",
                                      color: "#007bff",
                                      cursor: "pointer",
                                    }}
                                    icon={faEllipsisV}
                                  />
                                }
                                id="dropdown-menu-align-responsive-1"
                              >
                                <NavDropdown.Item style={{ color: "#17a2b8" }}>
                                  <FontAwesomeIcon icon={faPencilAlt} /> Edit
                                </NavDropdown.Item>
                                <NavDropdown.Item style={{ color: "#dc3545" }}>
                                  <FontAwesomeIcon icon={faTrashAlt} /> Delete
                                </NavDropdown.Item>
                              </NavDropdown>
                            </Nav>
                          ) : null}

                          <p size="h6">{reply.description}</p>
                          <p>
                            &nbsp;
                            <FontAwesomeIcon
                              style={{ color: "#007bff", cursor: "pointer" }}
                              icon={faThumbsUp}
                            />{" "}
                            <span className="badge badge-light">
                              {reply.likes.length}
                            </span>
                            &nbsp;&nbsp;
                            <FontAwesomeIcon
                              style={{ color: "#007bff", cursor: "pointer" }}
                              icon={faThumbsDown}
                            />{" "}
                            <span className="badge badge-light">
                              {reply.unLikes.length}
                            </span>
                          </p>
                        </Jumbotron>
                      </Col>
                    </Row>
                  );
                })}
              </Col>
              <Row
                className={"reply-form-row" + comment._id}
                style={{ display: "none" }}
              >
                <Col>
                  <form
                    name="form"
                    onSubmit={(e) => {
                      handleReplySubmit(e, comment._id);
                    }}
                  >
                    <div class="form-group">
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        name="desc"
                      ></textarea>
                      <label className={"error" + comment._id}></label>
                    </div>

                    {CommentReplyisLoading ? (
                      <div className="text-center mt-5">
                        <div className="spinner-border" role="status">
                          <span className="sr-only">Loading...</span>
                        </div>
                      </div>
                    ) : (
                      <button type="submit" class="btn btn-primary">
                        Reply
                      </button>
                    )}
                  </form>
                  <br />
                </Col>
              </Row>
            </Col>
          </Row>
        );
      })
    : null;

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
          {Comments}
          <Form className="comment-form">
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>
                <b>Comment:</b>
              </Form.Label>
              <Form.Control
                className="comment-description"
                as="textarea"
                rows={3}
              />
              {postCommentError != null ? (
                <Form.Text style={{ color: "#dc3545", textAlign: "center" }}>
                  {postCommentError}
                </Form.Text>
              ) : null}
            </Form.Group>
            {postCommentisLoading ? (
              <div className="text-center mt-5">
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            ) : (
              <Button
                variant="primary"
                onClick={async () => {
                  const desc = document.querySelector(".comment-description")
                    .value;
                  // await this.props.PostComment(postId, desc);
                  document.querySelector(".comment-form").reset();
                }}
              >
                send
              </Button>
            )}
          </Form>
          <br />
          <div>
            <h2>Related posts:</h2> <br />
            <p>
              <span>1</span>Simple post title or any post content
            </p>
            <p>
              <span>2</span>Simple post title or any post content
            </p>
          </div>
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
