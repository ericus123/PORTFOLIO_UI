import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import Comments from "./comments/Comments";
import { BigLike } from "./Likes/likes";
import { Media, Row, Alert } from "react-bootstrap";
import readingTime from "reading-time";

import {
  getPost,
  PostComment,
  PostCommentReply,
  getPostReactions,
} from "../../redux/actions/blog/posts";
import unknown_avatar from "../../assets/img/avatar.png";
import "./styles.scss";
import SideBar from "./sidebar/sideBar";
import ProfImage from "../../assets/img/about.jpeg";
import ScrolButton from "../reusables/ScrollUp";
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
  const user = useSelector((state) => state.checkAuth.user);

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

  const singlePost = post ? (
    <>
      <Media as="li" className="single">
        <Media.Body className="body">
          <h3
            className="title"
            style={{ marginTop: "10px", marginBottom: "10px" }}
          >
            {post.title}
          </h3>
          <div className="author">
            <img
              className="author_image"
              src={post.author ? post.author.avatar : unknown_avatar}
            />
            <p className="more_details">
              {post.user ? (
                <span classname="authors_name">
                  {" "}
                  {post.author ? (
                    <b>{`${post.author.firstName} ${post.author.lastName}`}</b>
                  ) : (
                    "AMANI Eric"
                  )}
                </span>
              ) : (
                <span className="authors_name">AMANI Eric</span>
              )}
              <span className="post_det">
                Created at {new Date(post.createdAt).toLocaleString()}
                {post.updatedAt ? post.updatedAt : null} |&nbsp;
                 {readingTime(post.description).text}
              </span>
            </p>
          </div>
          <img className="mr-3" src={post.imageUrl} alt={post.title} />
          <br />
          <Row className="post-contribution">
            <PostShares />
          </Row>
          <br />
          <div dangerouslySetInnerHTML={{ __html: post.description }}></div>
          <br />
          <BigLike />
          <br />
          <br />
          <br />
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
