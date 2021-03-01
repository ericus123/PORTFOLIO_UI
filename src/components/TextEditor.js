import React, { Component } from "react";
import { Editor } from "@tinymce/tinymce-react";

class TextEditor extends Component {
  handleEditorChange = (content, editor) => {
    localStorage.setItem("content", content);
  };

  render() {
    return (
      <Editor
        apiKey={process.env.REACT_APP_TINY_EDITOR}
        initialValue="<p>This is the initial content of the editor</p>"
        init={{
          height: 500,
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
        onEditorChange={this.handleEditorChange}
      />
    );
  }
}

export default TextEditor;
