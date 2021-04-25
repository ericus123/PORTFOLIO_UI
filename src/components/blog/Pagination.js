import React, { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useLocation, Link } from "react-router-dom";

const Paginate = (props) => {

  const{ items, path } = props;
  const { search } = useLocation();
  let page = new URLSearchParams(search).get("page") || 1;
  const prevPage = items.prevPage;
  const nextPage = items.nextPage;
  const error =  items.error;

  const paginations = !error ? (
    <div class="pagination">
      {prevPage ? <Link to={prevPage}>&laquo;</Link> 
      : <Link to={""} style={{ pointerEvents: "none" }}>
          &laquo;
        </Link> }
      {prevPage ? (
        <Link to={path + prevPage}>{prevPage}</Link>
      ) : null}
      <Link className="active">{page}</Link>
      {nextPage ? (
        <Link to={path + nextPage}>{nextPage}</Link>
      ) : null}
      {nextPage ?  <Link to={path + (nextPage)}>&raquo;</Link> : 
      <Link to={""} style={{ pointerEvents: "none" }}>
          &raquo;
        </Link>}
    </div>
  ) : null;
  return paginations;
};
export default Paginate;
