import React from "react";

function Logo_project({
  types,
  name,
  description,
  thumbnail_location,
  brandColor,
  textColor,
}) {
  const mystyle = {
    background: brandColor,
    color: textColor,
  };
  const typestyle = {
    background: textColor,
    color: brandColor,
  };

  const different_types = types?.map((type) => (
    <p className="type" style={typestyle}>
      {type}
    </p>
  ));

  return (
    <div className="Logo_project" style={mystyle}>
      <div className="mockup_wrapper">
        <img src={thumbnail_location} alt="" className="image_size" />
        <img src="./shadow.svg" alt="" className="shadow" />
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

export default Logo_project;
