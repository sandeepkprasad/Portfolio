import React from "react";

const Footer = () => {
  return (
    <>
      <section
        className="footer-section bg-warning rounded-top d-none d-sm-block"
        id="footer"
      >
        <div className="container-lg py-3">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="footer-item">
                <p className="text-muted">Sandeep Kumar</p>
                <p className="text-muted mb-0">2023</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section
        className="footer-section my-5 bg-warning rounded-top-4 d-block d-sm-none"
        id="footer"
      >
        <div className="container-lg py-3">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="footer-item">
                <p className="text-muted">Sandeep Kumar</p>
                <p className="text-muted mb-0">2023</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
