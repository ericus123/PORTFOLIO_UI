import React, { useEffect } from "react";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { GetWorks } from "../../redux/actions/home/work";

const Work = () => {
  const dispatch = useDispatch();

  const works = useSelector((state) => state.getWorks.works);
  const message = useSelector((state) => state.getWorks.message);
  const error = useSelector((state) => state.getWorks.error);
  // useEffect(() => {
  //   dispatch(GetWorks());
  // });
  const _works = [1, 2, 3, 4, 5];
  return (
    <div className="works bd-grid">
      {_works.map((work) => {
        <div className="work">Work {work}</div>;
      })}
    </div>
  );
};
export default Work;
