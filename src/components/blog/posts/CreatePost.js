import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getPostCats } from "../../../redux/actions/blog/posts";
import TextEditor from "../../TextEditor";
import http from "../../../utils/axios/axios";

const CreatePost = () => {
  const error = useSelector((state) => state.getPostCats.error);
  const cats = useSelector((state) => state.getPostCats.cats);

  const dispatch = useDispatch();
  useEffect(() => dispatch(getPostCats()), []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const postForm = document.querySelector(".post-form");

    var filesSelected = document.getElementById("exampleFormControlFile1")
      .files;

    // if (filesSelected.length > 0) {
    var fileToLoad = filesSelected[0];

    var fileReader = new FileReader();

    fileReader.onload = function (fileLoadedEvent) {
      var srcData = fileLoadedEvent.target.result; // <--- data: base64
      localStorage.setItem("base64", srcData);
    };

    fileReader.readAsDataURL(fileToLoad);

    http
      .post("/api/posts", {
        title: postForm.title.value,
        description: localStorage.getItem("content"),
        category: "609c49aa2ba6bc002c72cf54",
        img: localStorage.getItem("base64"),
      })
      .then((response) => {
        console.log(response);
        postForm.reset();
        document.getElementById("exampleFormControlFile1").value = null;
        localStorage.removeItem("base64");
      })
      .catch((error) => {
        console.log(error.response);
        console.log(error);
      });
  };
  return (
    <div style={{ margin: "20%" }}>
      <Form
        onSubmit={handleSubmit}
        className="post-form"
        style={{ display: "block" }}
        encType="multipart/form-data"
      >
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Title</Form.Label>
          <Form.Control as="textarea" rows={1} name="title" required />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <TextEditor />
        </Form.Group>
        <Form.Group>
          <Form.File id="exampleFormControlFile1" label="Post Image" required />
        </Form.Group>
        <Form.Group controlId="formGridState">
          <Form.Label>Category</Form.Label>
          <Form.Control
            as="select"
            defaultValue="none"
            name="category"
            required
          >
            {cats
              ? cats.map((cat) => {
                  return <option>{cat.name}</option>;
                })
              : null}
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Post
        </Button>
      </Form>
    </div>
  );
};

export default CreatePost;
