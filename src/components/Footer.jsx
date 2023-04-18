import React from "react";
import insta from "../Img/redes/instablanco.png";
import git from "../Img/redes/gitblanco.png";
import mail from "../Img/redes/gmailblanco.png";
import wat from "../Img/redes/whatblanco.png";
import link from "../Img/redes/linkedinblanmco.png";

const Footer = () => {
  return (
    <>
      <div className="footer-cont">
        <div className="redes-cont">
          <div className="insta-r">
            <img
              src={insta}
              alt="insta"
            />
          </div>
          <div className="git-r">
            <img
              src={git}
              alt="git"
            />
          </div>
          <div className="mail-r">
            <img
              src={mail}
              alt="mail"
            />
          </div>
          <div className="wat-r">
            <img
              src={wat}
              alt="wat"
            />
          </div>
          <div className="link-r">
            <img
              src={link}
              alt="link"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
