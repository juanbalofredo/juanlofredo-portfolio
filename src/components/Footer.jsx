import React from "react";
import insta from "../Img/redes/instablanco.png";
import git from "../Img/redes/gitblanco.png";
import mail from "../Img/redes/gmailblanco.png";
import wat from "../Img/redes/whatblanco.png";
import link from "../Img/redes/linkedinblanmco.png";
import hen from "../Img/redes/original.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  var fecha = new Date();
  var ano = fecha.getFullYear();
  const [t, i18n] = useTranslation("global");
  return (
    <>
      <div className="footer-cont">
        <div className="redes-cont">
          <div className="insta-r">
            <a href="https://www.instagram.com/juan.lofredo/" target="blank">
              <img src={insta} alt="insta" />
            </a>
          </div>
          <div className="git-r">
            <a href="https://github.com/juanbalofredo" target="blank">
              <img src={git} alt="git" />
            </a>
          </div>
          <div className="mail-r">
            <a
              href="mailto:juanbautistalofredo@gmail.com?Subject=Contacto%20desde%20portafolio"
              target="blank"
            >
              <img src={mail} alt="mail" />
            </a>
          </div>
          <div className="wat-r">
            <a
              href="https://wa.me/5401132695097?text=¡Estoy+interesado!"
              target="blank"
            >
              <img src={wat} alt="wat" />{" "}
            </a>
          </div>
          <div className="link-r">
            <a href="https://www.linkedin.com/in/juan-lofredo" target="blank">
              <img src={link} alt="link" />{" "}
            </a>
          </div>
          <div className="hen-r">
            <a
              href="https://www.talent.soyhenry.com/?searchInput=juan%20bautista%20lofredo&hl=es"
              target="blank"
            >
              <img src={hen} alt="hen" />{" "}
            </a>
          </div>
        </div>
        <h4>
          {t("footer.cop1")}
          {ano}©JuanLofredo
        </h4>
      </div>
    </>
  );
};
export default Footer;
