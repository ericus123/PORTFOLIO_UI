import React from "react";
import "../scss/styles.scss";
import work3 from "../..//assets/img/about.jpeg";
import { Row, Col } from "react-bootstrap";

const Skills = () => {
  return (
    <div className="skills section" id="skills">
      <h2 className="section-title">Skills</h2>

      <div className="skills__container bd-grid">
        <div>
          <h2 className="skills__subtitle">Profesional Skills</h2>
          <div>
            <h4>Web Development</h4>
            <p>
              <i>
                &nbsp;nodejs&nbsp;| &nbsp;mongodb&nbsp;| &nbsp;postgresql&nbsp;|
                &nbsp;firebase &nbsp;|&nbsp;vanillaJs&nbsp;| &nbsp;react&nbsp;|
                &nbsp;redux&nbsp;| &nbsp;html&nbsp;| &nbsp;css&nbsp;|
                &nbsp;scss&nbsp;| &nbsp;github&nbsp;| &nbsp;heroku&nbsp;|
                &nbsp;figma&nbsp;|
              </i>
            </p>
            <br />
            <h4>Electronics</h4>
            <p>
              <i>
                &nbsp;pcb design&nbsp; |&nbsp;microcontroler programming&nbsp;
                |&nbsp;hardware programming with arduino&nbsp; | &nbsp;install &
                repair fire detector system &nbsp; | &nbsp;circuit design&nbsp;
                | &nbsp;cctv camera system installation & repair&nbsp; |
                &nbsp;electronics repair&nbsp;{" "}
              </i>
            </p>
          </div>
        </div>

        <div>
          <img src={work3} alt="" className="skills__img" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
