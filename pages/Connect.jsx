import React from "react";

function Connect() {
    const socials [{
        "id":1 ,
        "coonect_icon_address": "./mail.svg",
        "arrow_adress" :"blackarrow.svg",
    }

    ]
  return (
    <div className="connect-section">
      <div className="connect-wrapper">
        <h1>Say hi</h1>
        <div className="connect_wrappper">
          <div className="connect_button_wrapper">
            <input
              className="connect"
              id="connect"
              placeholder="Enter your email/linkedin address"
            />
            <label className="connect_btn" for="connect">
              Connect
            </label>
          </div>
          <p className="connect_copy">
            If you want to work together please enter your internet adress & I
            will get to you
          </p>
        </div>
        <div className="connect-link-wrapper">
          <div className="connector-email">
            <img src="" alt="" />
            hello@pidus.com
            <img src="" alt="" />
          </div>
          <div className="connector-linkedin">
            <img src="" alt="" />
            Linkedin
            <img src="" alt="" />
          </div>
          <div className="connector-medium">
            <img src="" alt="" />
            Medium
            <img src="" alt="" />
          </div>
          <div className="connector-instagram">
            <img src="" alt="" />
            Instagram
            <img src="" alt="" />
          </div>
          <div className="connector-behance">
            <img src="" alt="" />
            Behance
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Connect;
