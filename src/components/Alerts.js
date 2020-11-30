import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alert } from "react-bootstrap";

export const BlogError = (error) => {
  const [show, setShow] = useState(true);

  return (
    <Alert variant="danger" onClose={() => setShow(false)} dismissible>
      <Alert.Heading>{error}</Alert.Heading>
      <p>
        Reload the page or click
        <Link style={{ textDecoration: "none" }} to={"/blog"}>
          here
        </Link>
        if the issue is not resolved!
      </p>
    </Alert>
  );
};
