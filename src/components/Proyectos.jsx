import React from "react";
import bolsillo from "../Img/bolsillo.png";
import paises from "../Img/ort.png";
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
          <a
            href="https://muvinai-lofredo-fk0j5za5j-juanbalofredo.vercel.app/home"
            target="blank"
          >
            <div className="paises">
              <img src={paises} alt="paises" />
              <div>
                <p>{t("proyes.con")}</p>
              </div>
            </div>
          </a>
        </div>
        <Tecnologias />
      </div>
    </>
  );
};
export default Proyectos;
