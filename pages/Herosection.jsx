import React from "react";

export const Herosection = () => {
  return (
    <div className="herosection">
      <div className="hero_wrapper">
        <h1 className="intro">I design solutions</h1>
        <h2 className="bref">
          Hello 🖐 Sudip here. I am a Designer trying to “ git push ” my way to
          a {`<Developer/>`}
        </h2>
        <div className="connect_wrappper">
          <div className="connect_button_wrapper">
            <input
              className="connect"
              id="connect"
              placeholder="Enter your email/linkedin address"
            />
            <label className="connect_btn" for="connect">
              Connect
            </label>
          </div>
          <p className="connect_copy">
            If you want to work together please enter your internet adress & I
            will get to you
          </p>
        </div>
      </div>
      <div className="showmore">
        Show my work <img src="./Arrow.svg" alt="Arrow" />
      </div>
    </div>
  );
};
