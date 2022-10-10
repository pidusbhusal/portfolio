import React from "react";

export default function Website({
  types,
  name,
  description,
  thumbnail_location,
  brandColor,
}) {
  const different_types = types?.map((type) => <p className="type">{type}</p>);
  const mystyle = {
    backgroundColor: { brandColor },
  };
  return (
    <div className="website">
      <a className="website_card">
        <div className="details brand_color" style={mystyle}>
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
        <div className="thumbnail">
          <img className="thumbnail_image" src={thumbnail_location} alt="" />
        </div>
      </a>
    </div>
  );
}
