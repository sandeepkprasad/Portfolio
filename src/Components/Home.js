import React, { useContext } from "react";
import avatar from "../Assests/avatar.gif";
import hero from "../Assests/hero.gif";
import resume from "../Assests/sandeepkprasad.pdf";
import portfolioContext from "../Context/portfolioContext";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { useTypewriter } from "react-simple-typewriter";

const Home = () => {
  const { mode } = useContext(portfolioContext);

  const [tech] = useTypewriter({
    words: ["Full Stack Web Developer", "MERN Stack Web Developer"],
    loop: 0,
  });

  return (
    <section className="home pb-5" id="home">
      <div className="container-lg">
        <div className="row min-vh-100 align-items-center align-content-center">
          <div className="col-md-6 mt-5 mt-md-0">
            <div className="home-img text-center">
              <img
                className="rounded mw-100"
                src={mode === "light" ? avatar : hero}
                alt="profile_img"
              />
            </div>
          </div>
          <div className="col-md-6 mt-5 mt-md-0 order-md-first d-none d-sm-block">
            <div className="home-text p-4">
              <p
                className={`text-${mode === "light" ? "muted" : "light"} mb-1`}
              >
                Hello, I'm
              </p>
              <h1 className="text-warning text-uppercase fs-1 fw-bold">
                SANDEEP KUMAR
              </h1>
              <h4
                className={`fs-4 text-${mode === "light" ? "dark" : "light"}`}
              >
                {tech}|
              </h4>
              <div className="socials mt-4">
                <a
                  className="text-decoration-none"
                  href="https://github.com/sandeepkprasad"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiGithub
                    className={`fs-4 ms-1 me-2 text-${
                      mode === "light" ? "dark" : "light"
                    }`}
                  />
                </a>
                <a
                  className="text-decoration-none"
                  href="https://www.linkedin.com/in/sandeepkumarprasad/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiLinkedin
                    className={`fs-4 ms-2 text-${
                      mode === "light" ? "dark" : "light"
                    }`}
                  />
                </a>
              </div>
              <a
                className="btn btn-warning mt-5"
                href={resume}
                target="_blank"
                rel="noreferrer"
                role="button"
              >
                Resume &darr;
              </a>
            </div>
          </div>

          <div className="col-md-6 mt-3 mt-md-0 order-md-first d-block d-sm-none">
            <div className="home-text p-4 text-center">
              <p
                className={`text-${mode === "light" ? "muted" : "light"} mb-1`}
              >
                Hello, I'm
              </p>
              <h1 className="text-warning text-uppercase fs-1 fw-bold">
                SANDEEP KUMAR
              </h1>
              <h4
                className={`fs-4 text-${mode === "light" ? "dark" : "light"}`}
              >
                {tech}|
              </h4>
              <div className="socials mt-3">
                <a
                  className="text-decoration-none"
                  href="https://github.com/sandeepkprasad"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiGithub
                    className={`fs-4 ms-1 me-2 text-${
                      mode === "light" ? "dark" : "light"
                    }`}
                  />
                </a>
                <a
                  className="text-decoration-none"
                  href="https://www.linkedin.com/in/sandeepkumarprasad/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FiLinkedin
                    className={`fs-4 ms-2 text-${
                      mode === "light" ? "dark" : "light"
                    }`}
                  />
                </a>
              </div>
              <a
                className="btn btn-warning mt-4"
                href={resume}
                target="_blank"
                rel="noreferrer"
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

export default Home;
