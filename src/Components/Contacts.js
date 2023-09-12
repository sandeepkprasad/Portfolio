import React from "react";
import { BsEnvelopeAt, BsPhone, BsGithub, BsLinkedin } from "react-icons/bs";
import portfolioContext from "../Context/portfolioContext";
import { useContext } from "react";

const Contacts = () => {
  const { mode } = useContext(portfolioContext);
  return (
    <section className="contacts py-5" id="contacts">
      <div className="container-lg py-4">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div
              className={`section-title text-center text-${
                mode === "light" ? "dark" : "light"
              }`}
            >
              <h2 className="fw-bold mb-5">Contacts & Socials</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div
              className={`contact-item d-flex mb-4 p-4 shadow-sm border rounded bg-${mode}`}
            >
              <div className="icon text-warning">
                <h3>
                  <BsEnvelopeAt />
                </h3>
              </div>
              <div className="text ms-3">
                <h3
                  className={`fs-5 text-${mode === "light" ? "dark" : "light"}`}
                >
                  Email
                </h3>
                <p className={`text-${mode === "light" ? "muted" : "light"}`}>
                  sandeepkprasad@outlook.in
                </p>
              </div>
            </div>
            <div
              className={`contact-item d-flex mb-4 p-4 shadow-sm border rounded bg-${mode}`}
            >
              <div className="icon text-warning">
                <h3>
                  <BsPhone />
                </h3>
              </div>
              <div className="text ms-3">
                <h3
                  className={`fs-5 text-${mode === "light" ? "dark" : "light"}`}
                >
                  Phone
                </h3>
                <p className={`text-${mode === "light" ? "muted" : "light"}`}>
                  +91 78589 68446
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              className={`contact-item d-flex mb-4 p-4 shadow-sm border rounded bg-${mode}`}
            >
              <div className="icon text-warning">
                <h3>
                  <BsGithub />
                </h3>
              </div>
              <div className="text ms-3">
                <h3
                  className={`fs-5 text-${mode === "light" ? "dark" : "light"}`}
                >
                  GitHub
                </h3>
                <p className={`text-${mode === "light" ? "muted" : "light"}`}>
                  github.com/sandeepkprasad
                </p>
              </div>
            </div>
            <div
              className={`contact-item d-flex mb-4 p-4 shadow-sm border rounded bg-${mode}`}
            >
              <div className="icon text-warning">
                <h3>
                  <BsLinkedin />
                </h3>
              </div>
              <div className="text ms-3">
                <h3
                  className={`fs-5 text-${mode === "light" ? "dark" : "light"}`}
                >
                  LinkedIn
                </h3>
                <p className={`text-${mode === "light" ? "muted" : "light"}`}>
                  linkedin.com/in/sandeepkumarprasad
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
