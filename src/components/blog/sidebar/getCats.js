import React, { useEffect } from "react";
import { getPostCats } from "../../../redux/actions/blog/posts";
import { useSelector, useDispatch } from "react-redux";
import { ListGroup, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import { scrollTop } from "../../../utils/functions";
import "../styles.scss";

const GetCats = () => {
  const message = useSelector((state) => state.getPostCats.message);
  const isLoading = useSelector((state) => state.getPostCats.isLoading);
  const error = useSelector((state) => state.getPostCats.error);
  const cats = useSelector((state) => state.getPostCats.cats);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostCats());
  }, []);

  const allCats = cats.length
    ? cats.map((cat) => {
        return (
          <ListGroup style={{ border: "none" }}>
            <Link
              style={{ textDecoration: "none" }}
              to={"/blog/category/" + cat.name}
            >
              <ListGroup.Item
                className="text-decoration-none cat-item"
                style={{
                  color: "#007bff",
                  cursor: "pointer",
                  fontSize: "medium",
                }}
                onClick={scrollTop}
              >
                &gt; {cat.name}
              </ListGroup.Item>
            </Link>
          </ListGroup>
        );
      })
    : null;
  return (
    <div>
      <br />
      {cats ? <h2 className="cat-title">Blog Categories</h2> : null}
      {allCats}
      {isLoading ? (
        <div style={{ textAlign: "center" }}>
          <br />
          <Spinner animation="border" size="md" role="status" />
        </div>
      ) : null}
    </div>
  );
};

export default GetCats;
