import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import unknown_avatar from "../../../assets/img/avatar.png";
import { faHeart, faCrown } from "@fortawesome/fontawesome-free-solid";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { simpleAlert } from "../../Alerts";
import { Spinner, Form, Button, Modal, Col } from "react-bootstrap";
import {
  GetComments,
  PostComment,
  EditPostComment,
  DeletePostComment,
} from "../../../redux/actions/blog/posts";
import TimeAgo from "react-timeago";
import "./styles.scss";

const Comments = () => {
  const [sort, setSort] = useState("new");
  const [reply, setReply] = useState(null);
  const [delComShow, setDelComShow] = useState(false);
  const [edComShow, setEdComShow] = useState(false);
  const [comTxt, setComTxt] = useState("");
  const [comId, setComId] = useState(null);
  const [com, setCom] = useState("");
  const postComment = useSelector((state) => state.postComment.comment);
  const postCommentError = useSelector((state) => state.postComment.error);
  const postCommentMessage = useSelector((state) => state.postComment.message);
  const postCommentIsLoading = useSelector(
    (state) => state.postComment.isLoading
  );
  const post = useSelector((state) => state.post.post);
  const comments = useSelector((state) => state.getComments.comments);

  const editCommentError = useSelector((state) => state.editComment.error);
  const editCommentMessage = useSelector((state) => state.editComment.message);
  const editCommentIsLoading = useSelector(
    (state) => state.editComment.isLoading
  );

  const deleteCommentError = useSelector((state) => state.deleteComment.error);
  const deleteCommentMessage = useSelector(
    (state) => state.deleteComment.message
  );
  const deleteCommentIsLoading = useSelector(
    (state) => state.deleteComment.isLoading
  );

  const dispatch = useDispatch();
  const { id, slug } = useParams();
  useEffect(() => {
    dispatch(GetComments(post._id));
  }, [
    post,
    postCommentMessage,
    editCommentMessage,
    deleteCommentMessage,
    deleteCommentError,
    ,
    deleteCommentIsLoading,
  ]);

  useEffect(() => {
    setEdComShow(false);
  }, [editCommentMessage]);

  const DeleteCommentModal = (props) => {
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <h4>Delete comment</h4>
          <p>
            Are you sure you want to delete this comment?
            <br />
            This action can't be undone{" "}
          </p>
        </Modal.Body>
        <div className="mod-footer">
          <Button onClick={props.onHide}>No</Button>
          <Button
            variant="danger"
            onClick={() => {
              props.onHide();
              dispatch(DeletePostComment(comId));
            }}
          >
            Yes
          </Button>
        </div>
      </Modal>
    );
  };
  const EditCommentModal = (props) => {
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(EditPostComment(comId, e.target.desc.value));
          }}
        >
          <Modal.Body style={{ marginBottom: "-1%" }}>
            <h4>Edit comment</h4>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Control
                  as="textarea"
                  rows={3}
                  controlId="exampleForm.ControlTextarea1"
                  name="desc"
                  defaultValue={com}
                />
              </Form.Group>
            </Form.Row>
          </Modal.Body>
          <div className="mod-footer">
            {editCommentError ? simpleAlert("danger", editCommentError) : null}
          </div>
          <div className="mod-footer">
            {editCommentMessage
              ? simpleAlert("success", editCommentMessage)
              : null}
          </div>
          <div className="mod-footer">
            {editCommentIsLoading ? (
              <div style={{ textAlign: "center" }}>
                <Spinner animation="border" size="lg" role="status" />
              </div>
            ) : null}
          </div>

          {!editCommentError && !editCommentMessage && !editCommentIsLoading ? (
            <div className="mod-footer">
              <Button
                style={{ margin: "1% 1% 1% 0%" }}
                onClick={props.onHide}
                variant="danger"
              >
                Cancel
              </Button>{" "}
              <Button style={{ margin: "1% 1% 1% 0%" }} type="submit">
                Save changes
              </Button>
            </div>
          ) : null}
        </Form>
      </Modal>
    );
  };
  const all_comments = comments.length
    ? comments.map((comment) => {
        return (
          <div className="comment" key={comment._id}>
            <div className="avatar">
              <img src={comment.user ? comment.user.avatar : unknown_avatar} />
            </div>
            <div className="desc">
              <p style={{ marginBottom: "0px" }}>
                <span style={{ fontWeight: "BOLD" }}>
                  {comment.user
                    ? `${comment.user.firstName} ${comment.user.lastName}`
                    : "ANONYMOUS"}{" "}
                </span>
                &nbsp;
                <span style={{ fontWeight: ".5em", fontSize: "small" }}>
                  <TimeAgo date={comment.createdAt} />
                </span>
                &nbsp;
                {comment.updatedAt ? (
                  <span style={{ color: "gray" }}>
                    <i style={{ fontSize: "smaller" }}>updated</i>
                  </span>
                ) : null}
              </p>
              {post.user && post.user._id == comment.user._id ? (
                <p className="author-badge">
                  <FontAwesomeIcon icon={faCrown} />
                  &nbsp;Author
                </p>
              ) : null}

              <p className="text">{comment.description}</p>

              <p>
                <span className="com-like">
                  <FontAwesomeIcon className="icon" icon={faHeart} />
                </span>
                &nbsp; &nbsp;
                <span
                  className="com-reply"
                  onClick={() => {
                    if (reply == comment._id) {
                      setReply(null);
                    } else {
                      setReply(comment._id);
                    }
                  }}
                >
                  Reply
                </span>
                &nbsp;&nbsp;&nbsp;
                <span
                  style={{ color: "#17a2b8", cursor: "pointer" }}
                  onClick={() => {
                    setCom(comment.description);
                    setComTxt("");
                    setEdComShow(true);
                    setComId(comment._id);
                  }}
                >
                  Edit
                </span>
                &nbsp;
                <span
                  style={{ color: "#dc3545", cursor: "pointer" }}
                  onClick={() => {
                    setComId(comment._id);
                    setDelComShow(true);
                  }}
                >
                  Delete
                </span>
              </p>
              <div className="replies">
                <form className={reply == comment._id ? "form-on" : "form-off"}>
                  <textarea placeholder="Reply here..." />
                  <button>Reply</button>
                </form>
              </div>
            </div>
          </div>
        );
      })
    : null;
  return (
    <div className="comments">
      <p className="title">
        Comments&nbsp;<span className="comments-nbr">{comments.length}</span>
      </p>
      <hr style={{ fontWeight: "bold", fontSize: "10px" }} />
      {!comments.length ? (
        <p style={{ fontSize: ".8em", textAlign: "center" }}>
          Be the first to comment
        </p>
      ) : null}
      <div className="comment-wrapper">
        {all_comments}
        <DeleteCommentModal
          show={delComShow}
          onHide={() => setDelComShow(false)}
        />
        <EditCommentModal show={edComShow} onHide={() => setEdComShow(false)} />
        {/* <div className="comment">
          <div className="avatar">
            <img src={img1} />
          </div>
          <div className="desc">
            <p style={{ marginBottom: "0px" }}>
              <span style={{ fontWeight: "BOLD" }}>AMANI Eric</span>&nbsp;
              <span style={{ fontWeight: ".5em", fontSize: "small" }}>
                Yesterday
              </span>
            </p>
            <p className="text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type{" "}
            </p>
            <p>
              <span className="com-like">
                <FontAwesomeIcon className="icon" icon={faHeart} />
              </span>
              &nbsp; &nbsp;
              <span
                className="com-reply"
                onClick={() => {
                  if (reply == "1") {
                    setReply(null);
                  } else {
                    setReply("1");
                  }
                }}
              >
                Reply
              </span>
            </p>
            <div className="replies">
              <div className="reply">
                <div className="avatar">
                  <img src={img1} />
                </div>
                <div className="desc">
                  <p style={{ marginBottom: "0px" }}>
                    <span style={{ fontWeight: "BOLD" }}>AMANI Eric</span>&nbsp;
                    <span style={{ fontWeight: ".5em", fontSize: "small" }}>
                      Yesterday
                    </span>
                  </p>
                  <p className="text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type{" "}
                  </p>
                  <p>
                    <span className="rep-like">
                      <FontAwesomeIcon className="icon" icon={faHeart} /> 1
                    </span>
                  </p>
                </div>
              </div>
              <div className="replies">
                <form className={reply == "1" ? "form-on" : "form-off"}>
                  <textarea placeholder="Reply here..." />
                  <button>Reply</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="comment">
          <div className="avatar">
            <img src={image} />
          </div>
          <div className="desc">
            <p style={{ marginBottom: "0px" }}>
              <span style={{ fontWeight: "BOLD" }}>AMANI Eric</span>&nbsp;
              <span style={{ fontWeight: ".5em", fontSize: "small" }}>
                Yesterday
              </span>
            </p>
            <p className="author-badge"><FontAwesomeIcon icon={faCrown}/>&nbsp;Author</p>
            <p className="text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type{" "}
            </p>
            <p>
              <span className="com-like">
                <FontAwesomeIcon className="icon" icon={faHeart} />
              </span>
              &nbsp; &nbsp;
              <span
                className="com-reply"
                onClick={() => {
                  if (reply == "2") {
                    setReply(null);
                  } else {
                    setReply("2");
                  }
                }}
              >
                Reply
              </span>
            </p>
            <div className="replies">
              <form className={reply == "2" ? "form-on" : "form-off"}>
                <textarea placeholder="Reply here..." />
                <button>Reply</button>
              </form>
            </div>
          </div>
        </div>
        <div className="comment">
          <div className="avatar">
            <img src={img2} />
          </div>
          <div className="desc">
            <p style={{ marginBottom: "0px" }}>
              <span style={{ fontWeight: "BOLD" }}>AMANI Eric</span>&nbsp;
              <span style={{ fontWeight: ".5em", fontSize: "small" }}>
                Yesterday
              </span>
            </p>
            <p className="text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type{" "}
            </p>
            <p>
              <span className="com-like">
                <FontAwesomeIcon className="icon" icon={faHeart} /> 13
              </span>
              &nbsp; &nbsp;
              <span
                className="com-reply"
                onClick={() => {
                  if (reply == "3") {
                    setReply(null);
                  } else {
                    setReply("3");
                  }
                }}
              >
                Reply
              </span>
            </p>
            <div className="replies">
              <form className={reply == "3" ? "form-on" : "form-off"}>
                <textarea placeholder="Reply here..." />
                <button>Reply</button>
              </form>
            </div>
          </div>
              </div>*/}
      </div>
      <div className="com-sort">
        <div>
          <button
            className={sort == "top" ? "sort-on" : "sort-off"}
            onClick={() => {
              setSort("top");
            }}
          >
            Top Comments
          </button>
          <button
            className={sort == "new" ? "sort-on" : "sort-off"}
            onClick={() => {
              setSort("new");
            }}
          >
            Newest First
          </button>
        </div>
      </div>
      <form
        className="com-form"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(PostComment(post._id, e.target.desc.value));
          e.target.reset();
        }}
      >
        <textarea name="desc" />

        {postCommentError ? simpleAlert("danger", postCommentError) : null}
        {postCommentMessage ? simpleAlert("success", postCommentMessage) : null}
        {postCommentIsLoading ? (
          <div style={{ textAlign: "center" }}>
            <br />
            <Spinner animation="border" size="lg" role="status" />
          </div>
        ) : null}
        {postCommentError || postCommentIsLoading ? null : (
          <button stype="submit">Comment</button>
        )}
      </form>
    </div>
  );
};

export default Comments;
