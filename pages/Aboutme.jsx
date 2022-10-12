import React from "react";

function Aboutme() {
  return (
    <div className="aboutme">
      <div className="aboutme-wrapper">
        <div className="aboutme-image">
          <img width="480px" src="./Aboutme-image.jpg" alt="" />
        </div>
        <div className="aboutme-content">
          <h1 className="aboutme-title">
            Hi, I am <bold className="name">Pidus</bold>
          </h1>
          <p className="aboutme-paragraph">
            Hello I am sudip Bhusal I have been doing graphic design for 5 years
            and UI design for 2 year and counting. I have also dipped my toes in
            templating and front end dev Having a background as graphic
            designer, I am quite familiar with the Branding and Marketing. Over
            the year I have helped many company to create their unique identity.
            I have worked with a lot of programmers over the years and also have
            developed some programming skill.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
