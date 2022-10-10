import React from "react";

function Logo_project() {
  return (
    <div className="Logo_project">
      <div className="mockup">
        <img src="./Click&Capture.png" alt="" className="image_size" />
        <img src="./shadow.svg" alt="" className="shadow" />
      </div>
      <div className="logo_card">
        <div className="details">
          <div className="details_wrapper">
            <div className="upper_section">
              <div className="type_wrapper">
                <p className="type">App Design</p>
              </div>
              <h1 className="project_name">Sunrise Ecommerce</h1>
              <p2 className="project_details">
                I was tasked with creating an mobile app with still
                in-development website.{" "}
              </p2>
            </div>
            <div className="readmore">
              <div className="info">Read Case Study</div>
              <img src="./work_arrow.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logo_project;
