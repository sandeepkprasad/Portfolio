import React from "react";
import skillImage1 from "../Assests/skill-1.svg";
import skillImage2 from "../Assests/skill-2.svg";
import skillImage3 from "../Assests/skill-3.svg";
import portfolioContext from "../Context/portfolioContext";
import { useContext } from "react";

const Skills = () => {
  const { mode } = useContext(portfolioContext);
  return (
    <section className="skills py-5" id="skills">
      <div className="container-lg py-4">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div
              className={`section-title text-center text-${
                mode === "light" ? "dark" : "light"
              }`}
            >
              <h2 className="fw-bold mb-5">My Skills</h2>
            </div>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-6 col-lg-4 mb-4">
            <div className={`skills-item shadow h-100 p-4 rounded bg-${mode}`}>
              <div className="icon">
                <img
                  className="rounded mw-100"
                  src={skillImage1}
                  alt="skill_img"
                />
              </div>
              <h3
                className={`fs-5 py-2 text-${
                  mode === "light" ? "dark" : "light"
                }`}
              >
                Full Stack Web Development
              </h3>
              <p className={`text-${mode === "light" ? "muted" : "light"}`}>
                MERN Stack, ReactJS, Redux, JavaScript, HTML, CSS, Bootstrap,
                NodeJS, ExpressJS, MongoDB
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <div className={`skills-item shadow h-100 p-4 rounded bg-${mode}`}>
              <div className="icon">
                <img
                  className="rounded mw-100"
                  src={skillImage2}
                  alt="skill_img"
                />
              </div>
              <h3
                className={`fs-5 py-2 text-${
                  mode === "light" ? "dark" : "light"
                }`}
              >
                Web Designing
              </h3>
              <p className={`text-${mode === "light" ? "muted" : "light"}`}>
                HTML, CSS, Canva
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <div className={`skills-item shadow h-100 p-4 rounded bg-${mode}`}>
              <div className="icon">
                <img
                  className="rounded mw-100"
                  src={skillImage3}
                  alt="skill_img"
                />
              </div>
              <h3
                className={`fs-5 py-2 text-${
                  mode === "light" ? "dark" : "light"
                }`}
              >
                App Development
              </h3>
              <p className={`text-${mode === "light" ? "muted" : "light"}`}>
                Python, Java, JavaScript, C language & C++ Language
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
