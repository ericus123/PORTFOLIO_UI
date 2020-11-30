import React, { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useLocation, Link } from "react-router-dom";

const Paginate = () => {
  const { search } = useLocation();
  const page = new URLSearchParams(search).get("page") || 1;
  const prevPage = useSelector((state) => state.posts.prevPage);
  const nextPage = useSelector((state) => state.posts.nextPage);
  const maxPages = useSelector((state) => state.posts.maxPages);
  const error = useSelector((state) => state.posts.error);

  const checkPrev = () => {
    if (!(page - 1) <= 0) {
      return <Link to={"blog?page=" + (page - 1)}>&laquo;</Link>;
      console.log("yeye");
    } else {
      return (
        <Link to={""} style={{ pointerEvents: "none" }}>
          &laquo;
        </Link>
      );
    }
  };
  const checkNext = () => {
    if (page + 1 <= maxPages) {
      return <Link to={"blog?page=" + (page + 1)}>&raquo;</Link>;
    } else {
      return (
        <Link to={""} style={{ pointerEvents: "none" }}>
          &raquo;
        </Link>
      );
    }
  };
  const paginations = !error ? (
    <div class="pagination">
      {checkPrev()}

      {prevPage !== null ? (
        <Link to={"/blog?page=" + prevPage}>{prevPage}</Link>
      ) : null}
      <Link className="active">{page}</Link>
      {nextPage !== null ? (
        <Link to={"/blog?page=" + nextPage}>{nextPage}</Link>
      ) : null}
      {checkNext()}
    </div>
  ) : null;
  return paginations;
};
export default Paginate;
