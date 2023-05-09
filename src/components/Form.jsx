import { useTranslation } from "react-i18next";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from 'sweetalert2'

const Form = () => {
  const form = useRef();

  const [input, setInput] = useState({
    message: "",
    user_mail: ""
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_wu06zqg",
        "template_zkjiv2j",
        form.current,
        "qaZPYXqfii62v0Bll"
      )
      .then(
        (result) => {
          if(result.text = "OK"){
            Swal.fire({
              title: 'Enviado!',
              text: 'Mensaje enviado correctamente',
              icon: 'success',
              confirmButtonText: 'OK'
            });
            setInput({
              message: "",
              user_mail: ""
            });
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const [t, i18n] = useTranslation("global");
  return (
    <>
      <div className="form-cont">
        <h3>{t("form.h1")}</h3>
        <div class="login-box">
          <form ref={form} onSubmit={sendEmail}>
            <div class="user-box">
              <input required type="email" name="user_mail" value={input.user_mail}  onChange={handleChange} />
              <label>{t("form.mail")}</label>
            </div>
            <div class="user-box">
              <textarea type="mensaje" name="message" required id="mensaje" value={input.message}  onChange={handleChange} />
              <label>{t("form.msg")}</label>
            </div>
            <center>
              <button type="submit" value="Send">
                {t("form.btn")}
                <span></span>
              </button>
            </center>
          </form>
        </div>
      </div>
    </>
  );
};
export default Form;
