import React from "react";
import Website from "./Website";
import Logo_project from "./Logo_project";
import Random from "./Random";

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
        <Logo_project
          className="logoprojects"
          types={["Branding"]}
          name="Click & Capture"
          description=" Website for my fellow front end developer. He wanted something that he"
          thumbnail_location="./Click&Capture.png"
          brandColor="linear-gradient(200.21deg, #CB2525 13.46%, #B81224 90.36%)"
        />

        <Logo_project
          style
          className="logoprojects"
          types={["Logo"]}
          name="Hispeed Trading Company"
          description="IT-related sales and services, Import, Export, Office Suppliers, IT related Training and Skill development"
          thumbnail_location="./htc.png"
          brandColor="radial-gradient(50% 50% at 50% 50%, rgba(34, 80, 173, 0) 0%, rgba(34, 80, 173, 0.07) 100%)"
        />

        <Website
          types={["Web Design"]}
          name="Edger Wright"
          description=" Website for my fellow front end developer. He wanted something that he could send to recruiters. The main aim of the website was to showcase his expertise and get him hired. And it was a greating sucess😉."
          thumbnail_location="./Edge.png"
          brandColor="#00000A"
        />

        <Random
          style
          className="logoprojects"
          className="logoprojects"
          types={["Branding"]}
          name="Click & Capture"
          description=" Website for my fellow front end developer. He wanted something that he"
          thumbnail_location="./Click&Capture.png"
          brandColor="linear-gradient(200.21deg, #CB2525 13.46%, #B81224 90.36%)"
        />
      </div>
    </div>
  );
};
