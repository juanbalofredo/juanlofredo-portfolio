import React, { useEffect } from "react";
import { changeTheme } from "../redux/persistSlice";
import { useDispatch, useSelector } from "react-redux";
import cv from "../Img/Cv.pdf";
import darkb from "../Img/hamb/dark.png";
import currib from "../Img/hamb/ccvblanco.png";
import sobb from "../Img/hamb/perlanca.png";
import conb from "../Img/hamb/cartablanca.png";
const BurguerButton = () => {
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
      <div className="container">
        <input type="checkbox" name="" id="" class="check" />
        <ul className="menu-items">
          <li className="child-nav">
            {" "}
            <a href="/#sobremi">
              <img src={sobb} alt="" /> Sobre mí
            </a>
          </li>
          <li className="child-nav">
            <a href="/contacto">
              <img src={conb} alt="" />
              Contacto
            </a>
          </li>
          <li>
            {" "}
            <span className="button-content">
              <a href={cv}>
                <img src={currib} alt="" />
                Descargar CV
              </a>{" "}
            </span>
          </li>
          <li>
            <div className="qasa">
              <img src={darkb} alt="" />
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
          </li>
        </ul>
        <div class="ham-menu">
          <span class="line line1"></span>
          <span class="line line2"></span>
          <span class="line line3"></span>
        </div>
      </div>
    </>
  );
};

export default BurguerButton;
