import { useState } from "react";

function Card() {
  const [light, setLight] = useState(true);

  const toggle = () => {
    setLight(!light);
  };

  return (
    <section className={light ? "light" : "dark"}>
      <div className="card">
        <div className="toggle" onClick={toggle}></div>
        <div className="content">
          <div className="header">
            <div className="avatar">
              <img src="https://github.com/henriquezolini.png" alt="" />
            </div>
            <h3>
              Henrique Zolini
              <br />
              <span>Developer</span>
            </h3>
          </div>
          <ul className="socials">
            <li>
              <a
                href="https://www.linkedin.com/in/henriquezolini/"
                target="_blank"
              >
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://www.github.com/henriquezolini/" target="_blank">
                <i className="fa fa-github"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/henriquezolini/"
                target="_blank"
              >
                <i className="fa fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Card;
