import React from "react";
import portfolioContext from "../Context/portfolioContext";
import { useContext } from "react";
import mern from "../Assests/mern.png";
import news from "../Assests/newsLight.png";
import advice from "../Assests/advice.png";
import portfolio from "../Assests/portfolio.png";
import portfolioOld from "../Assests/portfolio-old.png";

const Works = () => {
  const { mode } = useContext(portfolioContext);
  return (
    <section className="works py-5" id="works">
      <div className="container-lg py-4">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div
              className={`section-title text-center text-${
                mode === "light" ? "dark" : "light"
              }`}
            >
              <h2 className="fw-bold mb-5">Latest Works</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4 mb-4">
            <div className={`works-item shadow h-100 p-4 rounded bg-${mode} text-center`}>
              <img
                className="w-100 image-thumbnail"
                src={mern}
                alt="work_img"
              />
              <h3
                className={`text-capitalize fs-5 my-2 text-${
                  mode === "light" ? "dark" : "light"
                }`}
              >
                Contacts (MERN Stack)
              </h3>
              <p className="mb-4">
                <a className="text-warning text-decoration-none" href="#home">
                  Live Demo
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <div className={`works-item shadow h-100 p-4 rounded bg-${mode} text-center`}>
              <img
                className="w-100 image-thumbnail"
                src={news}
                alt="work_img"
              />
              <h3
                className={`text-capitalize fs-5 my-2 text-${
                  mode === "light" ? "dark" : "light"
                }`}
              >
                NEWS Application
              </h3>
              <p className="mb-4">
                <a
                  className="text-warning text-decoration-none"
                  href="https://taupe-dango-51e537.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <div className={`works-item shadow h-100 p-4 rounded bg-${mode} text-center`}>
              <img
                className="w-100 image-thumbnail"
                src={advice}
                alt="work_img"
              />
              <h3
                className={`text-capitalize fs-5 my-2 text-${
                  mode === "light" ? "dark" : "light"
                }`}
              >
                Advice Application
              </h3>
              <p className="mb-4">
                <a
                  className="text-warning text-decoration-none"
                  href="https://dynamic-semifreddo-c93c54.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <div className={`works-item shadow h-100 p-4 rounded bg-${mode} text-center`}>
              <img
                className="w-100 image-thumbnail"
                src={portfolio}
                alt="work_img"
              />
              <h3
                className={`text-capitalize fs-5 my-2 text-${
                  mode === "light" ? "dark" : "light"
                }`}
              >
                Portfolio Website
              </h3>
              <p className="mb-4">
                <a className="text-warning text-decoration-none" href="#home">
                  Live Demo
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <div className={`works-item shadow h-100 p-4 rounded bg-${mode} text-center`}>
              <img
                className="w-100 image-thumbnail"
                src={portfolioOld}
                alt="work_img"
              />
              <h3
                className={`text-capitalize fs-5 my-2 text-${
                  mode === "light" ? "dark" : "light"
                }`}
              >
                Portfolio Website (Old)
              </h3>
              <p className="mb-4">
                <a
                  className="text-warning text-decoration-none"
                  href="https://resonant-sunshine-3fd109.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
