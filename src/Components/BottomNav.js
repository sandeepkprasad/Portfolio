import React, { useContext } from "react";
import portfolioContext from "../Context/portfolioContext";
import { BiHome } from "react-icons/bi";
import { GiSkills } from "react-icons/gi";
import { MdWorkOutline } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import { SiAboutdotme } from "react-icons/si";

const BottomNav = () => {
  const { mode } = useContext(portfolioContext);
  return (
    <section
      className={`fixed-bottom d-block d-sm-none pt-2 pb-3 bg-${mode} rounded-top-4 border-top`}
    >
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-2 text-center">
            <a
              className={`text-${
                mode === "light" ? "dark" : "light"
              } fs-1 fw-bold`}
              href="#home"
            >
              <BiHome />
            </a>
          </div>
          <div className="col-2 text-center">
            <a
              className={`text-${
                mode === "light" ? "dark" : "light"
              } fs-1 fw-bold`}
              href="#skills"
            >
              <GiSkills />
            </a>
          </div>
          <div className="col-2 text-center">
            <a
              className={`text-${
                mode === "light" ? "dark" : "light"
              } fs-1 fw-bold`}
              href="#works"
            >
              <MdWorkOutline />
            </a>
          </div>
          <div className="col-2 text-center">
            <a
              className={`text-${
                mode === "light" ? "dark" : "light"
              } fs-1 fw-bold`}
              href="#education"
            >
              <FaGraduationCap />
            </a>
          </div>
          <div className="col-2 text-center">
            <a
              className={`text-${
                mode === "light" ? "dark" : "light"
              } fs-1 fw-bold`}
              href="#contacts"
            >
              <MdContactPhone />
            </a>
          </div>
          <div className="col-2 text-center">
            <a
              className={`text-${
                mode === "light" ? "dark" : "light"
              } fs-1 fw-bold`}
              href="#about"
            >
              <SiAboutdotme />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomNav;
