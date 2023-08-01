import React from "react";
import Layout from "../components/layout/layout.js";
import ContactImg from "../images/aboutUs.jpg";
const About = () => {
  return (
    <Layout title="About us">
      <section
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "80vh" }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              <img
                alt="Not found"
                src={ContactImg}
                style={{ width: "", height: "450px" }}
              ></img>
            </div>
            <div className="col-6 d-flex justify-content-center align-items-center">
              <h1> ABOUT US </h1>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
