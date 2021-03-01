import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import img1 from "../../assets/img/undraw_female_avatar_w3jk.svg";
import img2 from "../../assets/img/undraw_male_avatar_323b.svg";
import img3 from "../../assets/img/undraw_profile_pic_ic5t.svg";
import { Editor } from "@tinymce/tinymce-react";

const Comments = () => {
  const [commentEditor, setCommentEditor] = useState();
  const [replyEditor, setReplyEditor] = useState();
  const [reply, setShow] = useState("none");
  const handleCommentEditorChange = (content, editor) => {
    console.log("Content was updated:", content);
    setCommentEditor(content);
  };
  const handleReplyEditorChange = (content, editor) => {
    console.log("Content was updated:", content);
    setReplyEditor(content);
  };

  const editor = (type) => {
    const changeReplyShow = (id) => {
      if (reply === "none") {
        setShow("block");
      } else {
        setShow("none");
      }
    };

    return (
      <form class="ui reply form">
        <div class="field">
          <Editor
            apiKey={process.env.REACT_APP_TINY_EDITOR}
            initialValue=""
            init={{
              height: 300,
              menubar: true,
              plugins: [
                "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table paste code help wordcount",
              ],
              toolbar:
                "undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help",
            }}
            onEditorChange={
              type === "comment"
                ? handleCommentEditorChange
                : handleReplyEditorChange
            }
          />
        </div>
        {type === "comment" ? (
          <div
            class="ui blue labeled submit icon button"
            style={{ float: "right" }}
            onClick={() => {
              alert(commentEditor);
            }}
          >
            Add Comment
          </div>
        ) : (
          <div
            class="ui blue labeled submit icon button"
            style={{ float: "right" }}
            onClick={() => {
              alert(replyEditor);
            }}
          >
            Add Reply
          </div>
        )}
      </form>
    );
  };
  return (
    <div class="ui comments">
      <h3 class="ui dividing header">Comments</h3>
      <div class="comment">
        <a class="avatar">
          <img src={img1} />
        </a>
        <div class="content">
          <a class="author">Matt</a>
          <div class="metadata">
            <span class="date">Today at 5:42PM</span>
          </div>
          <div class="text">How artistic!</div>
          <div class="actions">
            <a
              class="reply"
              onClick={() => {
                console.log(document.querySelector(".field"));
                document.querySelector(".amani").innerText = "reply clicked";
              }}
            >
              Reply
            </a>
          </div>
          <div className="amani"></div>
        </div>
      </div>
      <div class="comment">
        <a class="avatar">
          <img src={img2} />
        </a>
        <div class="content">
          <a class="author">Elliot Fu</a>
          <div class="metadata">
            <span class="date">Yesterday at 12:30AM</span>
          </div>
          <div class="text">
            <p>This has been very useful for my research. Thanks as well!</p>
          </div>
          <div class="actions">
            <a class="reply">Reply</a>
          </div>
          {editor("reply")}
        </div>
        <div class="comments">
          <div class="comment">
            <a class="avatar">
              <img src={img1} />
            </a>
            <div class="content">
              <a class="author">Jenny Hess</a>
              <div class="metadata">
                <span class="date">Just now</span>
              </div>
              <div class="text">Elliot you are always so right :)</div>
              <div class="actions">
                <a class="reply">Reply</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="comment">
        <a class="avatar">
          <img src={img3} />
        </a>
        <div class="content">
          <a class="author">Joe Henderson</a>
          <div class="metadata">
            <span class="date">5 days ago</span>
          </div>
          <div class="text">Dude, this is awesome. Thanks so much</div>
          <div class="actions">
            <i class="reply icon"></i>
            <a class="reply">Reply</a>
            <i class="thumbs up icon"></i>
            <i class="ui circular label" style={{ fontSize: "7.5px" }}>
              3
            </i>
            &nbsp;
            <i class="thumbs down icon"></i>
            <i class="ui circular label" style={{ fontSize: "7.5px" }}>
              3
            </i>
          </div>
        </div>
        {editor("comment")}
      </div>
    </div>
  );
};

export default Comments;
