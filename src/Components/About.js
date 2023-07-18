import React from "react";
import aboutImage from "../Assests/about.svg";
import resume from "../Assests/sandeep_resume.pdf";
import portfolioContext from "../Context/portfolioContext";
import { useContext } from "react";

const About = () => {
  const { mode } = useContext(portfolioContext);
  return (
    <section className="about py-5" id="about">
      <div className="container-lg py-4">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div
              className={`section-title text-center text-${
                mode === "light" ? "dark" : "light"
              }`}
            >
              <h2 className="fw-bold mb-5">About</h2>
            </div>
          </div>
        </div>
        <div className="row align-content-center">
          <div className="col-md-6 my-4">
            <div className="about-image text-center">
              <img src={aboutImage} alt="about_img" />
            </div>
          </div>
          <div className={`col-md-6 order-md-first shadow rounded bg-${mode}`}>
            <div className="about-text p-4">
              <h3
                className={`fs-4 mb-3 text-${
                  mode === "light" ? "dark" : "light"
                }`}
              >
                About Me
              </h3>
              <p className={`text-${mode === "light" ? "muted" : "light"}`}>
                I have completed MCA with 3 months of internship as Full Stack
                Web Developer. I consider myself a responsible and orderly
                person. I am looking forward for my work experience as a MERN
                Stack Web Developer.
              </p>
              <a
                class="btn btn-warning btn-sm my-3"
                href={resume}
                target="_blank"
                role="button"
              >
                Resume &darr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
