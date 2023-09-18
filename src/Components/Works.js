import React, { useContext } from "react";
import { MdLaunch } from "react-icons/md";
import portfolioContext from "../Context/portfolioContext";
import dashboard from "../Assests/dashboard.png";
import store from "../Assests/store.png";
import bloggy from "../Assests/bloggy.png";
import fooddy from "../Assests/fooddy.png";
import taskbox from "../Assests/taskbox.png";

const projects = [
  {
    id: "taskbox",
    image: taskbox,
    title: "TaskBox",
    link: "https://taskboxapp.netlify.app",
  },
  {
    id: "bloggy",
    image: bloggy,
    title: "Bloggy",
    link: "https://bloggywebapp.netlify.app",
  },
  {
    id: "fooddy",
    image: fooddy,
    title: "Fooddy",
    link: "https://fooddyapp.netlify.app",
  },
  {
    id: "store",
    image: store,
    title: "Store",
    link: "https://timely-strudel-110b26.netlify.app",
  },
  {
    id: "dashboard",
    image: dashboard,
    title: "Admin Dashboard",
    link: "https://shimmering-sunshine-7bb92e.netlify.app",
  },
];

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
        <div className="row justify-content-center">
          {projects &&
            projects.map((project) => {
              return (
                <div className="col-6 col-md-4 mb-4" key={project.id}>
                  <div
                    className={`works-item shadow-sm border h-100 p-4 rounded bg-${mode} text-center`}
                  >
                    <img
                      className="w-100 image-thumbnail rounded border"
                      src={project.image}
                      alt="work_img"
                    />
                    <h3
                      className={`text-capitalize fs-5 my-2 text-${
                        mode === "light" ? "dark" : "light"
                      }`}
                    >
                      {project.title}
                    </h3>
                    <p className="mt-3 mb-1">
                      <a
                        className="text-warning text-decoration-none"
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <MdLaunch className="fs-4" />
                      </a>
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Works;
