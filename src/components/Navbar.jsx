import React, { useEffect } from "react";
import foto1 from "../Img/4.png";
import foto2 from "../Img/1.png";
import { changeTheme } from "../redux/persistSlice";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import cv from "../Img/CV2.pdf";

const Navbar = () => {
  const [t] = useTranslation("global");
  const dispatch = useDispatch();
  const state = useSelector((state) => state.bolsilloPersist);
  useEffect(
    function () {
      if (state.darkMode === "off") {
        document.querySelector("body").setAttribute("class", "bodyDark");
        document.querySelector("body").setAttribute("theme", "dark");
        document
          .getElementById("assass")
          .setAttribute("class", "iconifymoon-icon");
      } else {
        document.querySelector("body").setAttribute("class", "");
        document.querySelector("body").setAttribute("theme", "light");
        document
          .getElementById("assass")
          .setAttribute("class", "iconifysun-icon");
      }
    },
    [state.darkMode]
  );
  return (
    <>
      <div className="nav-cont">
        <div className="nav-img">
          <img src={foto1} alt="4" />
          <img src={foto2} alt="3" />
        </div>
        <ul className="parent">
          <li className="child-nav">
            {" "}
            <a href="/#sobremi">{t("nav.sob")}</a>
          </li>
          <li className="child-nav">
            <a href="/#proyets">{t("nav.proy")}</a>
          </li>
          <li className="child-nav">
            <a href="/contacto">{t("nav.cont")}</a>
          </li>
        </ul>
        <div className="qasa">
          <label>
            <input
              className="toggle-checkbox"
              type="checkbox"
              defaultChecked
              id="assass"
              onClick={async () => dispatch(changeTheme())}
            />
            <div className="toggle-slot">
              <div className="sun-icon-wrapper">
                <div
                  className="iconifysun-icon"
                  data-icon="feather-sun"
                  data-inline="false"
                ></div>
              </div>
              <div className="toggle-button"></div>
              <div className="moon-icon-wrapper">
                <div
                  className="iconifymoon-icon"
                  data-icon="feather-moon"
                  data-inline="false"
                ></div>
              </div>
            </div>
          </label>

          {/* <div className="mydict">
            <div>
              <label>
                <input
                  type="radio"
                  name="radio"
                  defaultChecked
                  onClick={() => i18n.changeLanguage("es")}
                />
                <span>Español</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="radio"
                  onClick={() => i18n.changeLanguage("en")}
                />
                <span>English</span>
              </label>
            </div>
          </div> */}
        </div>


        <button className="button">
            <span className="button-content">
              <a href={cv}>Download CV</a>{" "}
            </span>
          </button>
      </div>
    </>
  );
};
export default Navbar;
