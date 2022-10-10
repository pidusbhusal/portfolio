import React from "react";

export default function Website() {
  return (
    <div className="website">
      <div className="website_card">
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
        <div className="thumbnail">
          <img className="thumbnail_image" src="./Thumbnail.png" alt="" />
        </div>
      </div>
    </div>
  );
}
