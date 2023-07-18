import React from "react";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import portfolioContext from "../Context/portfolioContext";
import { useContext } from "react";

const Education = () => {
  const { mode } = useContext(portfolioContext);
  return (
    <section className="education py-5" id="education">
      <div className="container-lg py-4">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section-title text-center">
              <h2
                className={`fw-bold mb-5 text-${
                  mode === "light" ? "dark" : "light"
                }`}
              >
                Education & Experience
              </h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div
              className={`education-item d-flex mb-4 p-4 shadow rounded bg-${mode}`}
            >
              <div className="icon text-warning">
                <h3 className="fs-2">
                  <FaGraduationCap />
                </h3>
              </div>
              <div className="text ms-3">
                <h3
                  className={`fs-5 text-${mode === "light" ? "dark" : "light"}`}
                >
                  MCA
                </h3>
                <p className={`text-${mode === "light" ? "muted" : "light"}`}>
                  SAMS, Bangalore
                </p>
                <p className={`text-${mode === "light" ? "muted" : "light"}`}>
                  2020 - 2022
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className={`education-item d-flex mb-4 p-4 shadow rounded bg-${mode}`}
            >
              <div className="icon text-warning">
                <h3 className="fs-2">
                  <FaBriefcase />
                </h3>
              </div>
              <div className="text ms-3">
                <h3
                  className={`fs-5 text-${mode === "light" ? "dark" : "light"}`}
                >
                  MERN Stack Web Developer
                </h3>
                <p className={`text-${mode === "light" ? "muted" : "light"}`}>
                  RCS Technology, Bangalore
                </p>
                <p className={`text-${mode === "light" ? "muted" : "light"}`}>
                  2022
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
