import React from "react";
import bolsillo from "../Img/bolsillo.png";
import paises from "../Img/paises.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Tecnologias from "./Tecnologias";
import { useTranslation } from "react-i18next";

const Proyectos = () => {
  AOS.init({
    duration: 1000,
  });
  const [t] = useTranslation("global");
  return (
    <>
      <div className="proy-cont">
        <h2>{t("proyes.tit")}</h2>
        <div className="proyes" id="proyets">
          <a href="https://bolsillo-feliz.vercel.app/" target="blank">
            <div className="bolsillo">
              <div>
                <p>{t("proyes.bols")}</p>
              </div>
              <img src={bolsillo} alt="bolsillo" />
            </div>
          </a>
          <div className="paises">
            <a
              href="https://www.youtube.com/watch?v=R_cjEpVWbcs&ab_channel=JuanLofredo"
              target="blank"
            >
              <img src={paises} alt="paises" />
              <div>
                <p>{t("proyes.con")}</p>
              </div>
            </a>
          </div>
        </div>
        <Tecnologias />
      </div>
    </>
  );
};
export default Proyectos;
