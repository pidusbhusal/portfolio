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
          brandColor="black"
        />
        <Logo_project className="logoprojects" bgcolor="white" />
      </div>
    </div>
  );
};
