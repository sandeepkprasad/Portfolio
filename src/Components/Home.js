import React from "react";
import profileImage from "../Assests/avatar.gif";
import resume from "../Assests/sandeep_resume.pdf";
import portfolioContext from "../Context/portfolioContext";
import { useContext } from "react";

const Home = () => {
  const { mode } = useContext(portfolioContext);
  return (
    <section className="home py-5 " id="home">
      <div className="container-lg">
        <div className="row min-vh-100 align-items-center align-content-center">
          <div className="col-md-6 mt-5 mt-md-0">
            <div className="home-img text-center">
              <img
                className="rounded mw-100"
                src={profileImage}
                alt="profile_img"
              />
            </div>
          </div>
          <div className="col-md-6 mt-5 mt-md-0 order-md-first">
            <div className="home-text p-4">
              <p
                className={`text-${mode === "light" ? "muted" : "light"} mb-1`}
              >
                Hi I'm
              </p>
              <h1 className="text-warning text-uppercase fs-1 fw-bold">
                SANDEEP KUMAR
              </h1>
              <h4
                className={`fs-4 text-${mode === "light" ? "dark" : "light"}`}
              >
                Full Stack Web Developer
              </h4>
              <a
                className="btn btn-warning mt-4"
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

export default Home;
