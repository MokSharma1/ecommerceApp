import React from "react";
import Layout from "../components/layout/layout.js";
import ContactImg from "../images/contactUs.jpg";
const Contact = () => {
  return (
    <Layout title="Contact us">
      {" "}
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
              <h1> CONTACT US </h1>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
