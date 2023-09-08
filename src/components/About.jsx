import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
const About = () => {
  AOS.init({
    duration: 1000,
  });
  const [t] = useTranslation("global");

  return (
    <>
      <div className="abot-cont" id="sobremi">
        <h2>{t("about.sobre")}</h2>
        <div className="about-cont">
          <div>
            {t("about.text")}
          </div>
          <table>
            <tr>
              <td>
                <h4>{t("about.hab")}</h4>
              </td>
              <td>
                <h4>{t("about.con")}</h4>
              </td>
              <td>
                <h4>{t("about.exp")}</h4>
              </td>
            </tr>
            <tr data-aos="flip-up" data-aos-delay="400">
              <td>Inglés</td>
              <td className="estrelya">★★★★★</td>
              <td>10 años</td>
            </tr>
            <tr data-aos="flip-up" data-aos-delay="600">
              <td>React JS</td>
              <td className="estrelya">★★★★★</td>
              <td>2 años</td>
            </tr>
            <tr data-aos="flip-up" data-aos-delay="800">
              <td>CSS</td>
              <td className="estrelya">★★★★★</td>
              <td>4 años</td>
            </tr>
            <tr data-aos="flip-up" data-aos-delay="1000">
              <td>JavaScript</td>
              <td className="estrelya">
                ★★★★<span>★</span>{" "}
              </td>
              <td>3 años</td>
            </tr>
            <tr data-aos="flip-up" data-aos-delay="1200">
              <td>Node JS</td>
              <td className="estrelya">
                ★★★<span>★★</span>{" "}
              </td>
              <td>3 años</td>
            </tr>
            <tr data-aos="flip-up" data-aos-delay="1400">
              <td>HTML</td>
              <td className="estrelya">
                ★★★<span>★★</span>
              </td>
              <td>3 años</td>
            </tr>
            <tr data-aos="flip-up" data-aos-delay="1600">
              <td>PostgreSQL</td>
              <td className="estrelya">
                ★★★<span>★★</span>
              </td>
              <td>1 año</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};
export default About;
