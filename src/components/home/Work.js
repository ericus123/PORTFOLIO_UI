import React, { useEffect } from "react";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import work1 from "../../assets/img/work1.jpg";
import work2 from "../../assets/img/work2.jpg";
import work3 from "../../assets/img/work3.jpg";
import work4 from "../../assets/img/work4.jpg";
import work5 from "../../assets/img/work5.jpg";
import work6 from "../../assets/img/work6.jpg";
import { GetWorks } from "../../redux/actions/home/work";

const Work = () => {
  const dispatch = useDispatch();

  const works = useSelector((state) => state.getWorks.works);
  const message = useSelector((state) => state.getWorks.message);
  const error = useSelector((state) => state.getWorks.error);
  // useEffect(() => {
  //   dispatch(GetWorks());
  // });

  return (
    <div className="work section" id="work">
      <h2 className="section-title">Work</h2>

      <div className="work__container bd-grid">
        <div className="work__img">
          <img src={work1} alt="" />
        </div>
        <div className="work__img">
          <img src={work2} alt="" />
        </div>
        <div className="work__img">
          <img src={work3} alt="" />
        </div>
        <div className="work__img">
          <img src={work4} alt="" />
        </div>
        <div className="work__img">
          <img src={work5} alt="" />
        </div>
        <div className="work__img">
          <img src={work6} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Work;
