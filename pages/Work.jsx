import React from "react";
import Website from "./Website";
import Logo_project from "./Logo_project";

export const Work = () => {
  return (
    <div className="work">
      Works💪
      <div className="work_wrapper">
        <Website />
        <Logo_project className="logoprojects" />
        <Logo_project className="logoprojects" />
        <Website />
        <Website />
      </div>
    </div>
  );
};
