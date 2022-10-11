import React from "react";

function Random({ types, name, description, thumbnail_location, brandColor }) {
  const mystyle = {
    background: brandColor,
  };
  const different_types = types?.map((type) => <p className="type">{type}</p>);

  return (
    <div className="Random_container" style={mystyle}>
      <div className="mockup_wrapper">
        <img
          src={thumbnail_location}
          alt=""
          width="302px"
          className="random_image"
        />
      </div>
      <div className="logo_card">
        <div className="details">
          <div className="details_wrapper">
            <div className="upper_section">
              <div className="type_wrapper">{different_types}</div>
              <h1 className="project_name">{name}</h1>
              <p2 className="project_details">{description}</p2>
            </div>
            <div className="readmore">
              <div className="info">Read Case Study</div>
              <img className="arrow" src="./work_arrow.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Random;
