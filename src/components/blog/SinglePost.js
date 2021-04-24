import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import Comments from "./Comments";
import { BigLike } from "./Likes/likes";
import {
  Media,
  Row,
  Alert,
} from "react-bootstrap";

import {
  getPost,
  PostComment,
  PostCommentReply,
  getPostReactions,
} from "../../redux/actions/blog/posts";
import "./styles.scss";
import SideBar from "./sidebar/sideBar";
import ProfImage from "../../assets/img/about.jpeg";
import ScrolButton from "../reusables/ScrollUp"
import { PostShares } from "./shares/Shares";

const SinglePost = () => {
  const dispatch = useDispatch();
  const { id, slug } = useParams();
  useEffect(() => {
    dispatch(getPost(id));
    dispatch(getPostReactions(id));
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
            <br/>
            <BigLike/>
          <br/>
          <br/>
          <br/>
          <br/>
          <Comments />
        </Media.Body>
      </Media>
    </>
  ) : null;

  const err = error ? <Alert variant="danger">{error}</Alert> : null;
  return (
    <div className="single-post">
      <>
        <ScrolButton />
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
