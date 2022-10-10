import React from "react";
import Website from "./Website";
import Logo_project from "./Logo_project";

export const Work = () => {
  return (
    <div className="work">
      Works💪
      <div className="work_wrapper">
        <Website
          types={["App Design", "Logo Design"]}
          name="Sunrise E-Commerce"
          description=" I detailswas tasked with creating an mobile app with still
                in-development website."
          thumbnail_location="./Thumbnail.png"
          brandColor="#2D0B00"
        />
        <Logo_project className="logoprojects" />
        <Logo_project className="logoprojects" />
        <Website
          types={["Web Design"]}
          name="Edger Wright"
          description=" Website for my fellow front end developer. He wanted something that he could send to recruiters. The main aim of the website was to showcase his expertise and get him hired. And it was a greating sucess😉."
          thumbnail_location="./Edge.png"
          brandColor="#00000A"
        />
      </div>
    </div>
  );
};
