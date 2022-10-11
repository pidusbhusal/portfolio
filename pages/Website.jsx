import React from "react";

function Website({
  types,
  name,
  description,
  thumbnail_location,
  brandColor,
  textColor,
  typeColor,
  arrowurl,
}) {
  const mystyle = {
    backgroundColor: brandColor,
    color: textColor,
  };

  const typestyle = {
    background: textColor,
    color: typeColor,
  };

  const different_types = types?.map((type) => (
    <p className="type" style={typestyle}>
      {type}
    </p>
  ));

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
              <img className="arrow" src={arrowurl} alt="" />
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
Website.defaultProps = {
  arrowurl: "./work_arrow.svg",
};

export default Website;
