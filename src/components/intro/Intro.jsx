import React from "react";
import "./intro.css";
import Me from "../../img/me.png";

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-left">
        <div className="intro-left-wrapper">
          <h2 className="intro-i">Hello , my name is</h2>
          <h1 className="intro-name">Vishal Panwar</h1>
          <div className="intro-title">
            <div className="intro-title-wrapper">
              <div className="intro-title-item">Web Developer</div>
              <div className="intro-title-item">UI/UX Designer</div>
              <div className="intro-title-item">Photographer</div>
              <div className="intro-title-item">Content Creater</div>
            </div>
          </div>
          <p className="intro-disc">
            I design and develop services for customers of all sizes,
            specializing <br /> in creating stylish, modern websites, web
            services and online <br /> stores.
          </p>
        </div>
      </div>
      <div className="intro-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
