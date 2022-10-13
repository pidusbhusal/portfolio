import React from "react";

function Connect_section() {
  const socials = [
    {
      id: 1,
      coonect_icon_address: "./mail.svg",
      arrow_adress: "copy.svg",
      social_name: "hello@gmail.com",
      class_name: "connect-email connect-social",
    },
    {
      id: 2,
      coonect_icon_address: "./linkedin.svg",
      arrow_adress: "blackarrow.svg",
      social_name: "Linkedin",
      class_name: "connect-linkedin connect-social",
      address: "https://www.linkedin.com/in/pidus/",
    },
    {
      id: 3,
      coonect_icon_address: "./instagram.svg",
      arrow_adress: "blackarrow.svg",
      social_name: "Instagram",
      class_name: "connect-instagram connect-social",
      address: "https://www.instagram.com/pidus_b/",
    },
    {
      id: 4,
      coonect_icon_address: "./medium.svg",
      arrow_adress: "blackarrow.svg",
      social_name: "Medium",
      class_name: "connect-medium connect-social",
      address: "https://medium.com/@pidusbhusal",
    },
    {
      id: 5,
      coonect_icon_address: "./behance.svg",
      arrow_adress: "blackarrow.svg",
      social_name: "Behance",
      class_name: "connect-behance connect-social",
      address: "https://www.behance.net/pidus/",
    },
  ];

  const bundle_social = socials.map((social) => (
    <a target="_blank" href={social.address} className={social.class_name}>
      <div className="social-name-and-logo">
        <img width="30px" src={social.coonect_icon_address} alt="" />
        <div className="social-name">{social.social_name}</div>
      </div>

      <img
        loading="lazy"
        width="30px"
        src={social.arrow_adress}
        className="arrow"
        alt=""
      />
    </a>
  ));
  return (
    <div className="connect-section">
      <div className="connect-wrapper">
        <h1 className="connect-title">Say hi</h1>
        <div className="connect_button_wrappper">
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
          {bundle_social}
          <div className="divider-line email-divider"></div>
          <div className="divider-line linkedin-divider"></div>
          <div className="divider-line instagram-divider"></div>
        </div>
      </div>
    </div>
  );
}

export default Connect_section;
