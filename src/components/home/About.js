import React from "react";
import "../scss/styles.scss";
import about from "../../assets/img/about.jpeg";
import amani_eric from "../../assets/img/AMANI_Eric.jpg";

const About = () => {
  return (
    <div className="about section " id="about">
      <h2 className="section-title">About</h2>

      <div className="about__container bd-grid">
        <div className="about__img">
          <img src={amani_eric} alt="" />
        </div>

        <div>
          <h2 className="about__subtitle">I'm Amani</h2>
          <p className="about__text">
            A full stack web developer focused on crafting great web
            experiences.
            <br />
            Apart from web development I'm also an electronic hobbyist mainly
            working with electronics hardware repairs , installation and
            programming
            <br />
            I'm usually writing a lot of JavaScript 🛠️ I love working with
            Node.js,react and Figma 🎨 Ping me if you need help (or just wanna'
            chat) 🤖
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
