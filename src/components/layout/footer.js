import React from "react";
import { Link } from "react-router-dom";
const footer = () => {
  return (
    <section className="bg-black text-light pt-3 pb-3 d-flex flex-column justify-content-center align-items-center">
      <h1 className="d-flex justify-content-center">
        🔵 2023. All rights reserved
      </h1>
      <div className="d-flex justify-content-center">
        <ul className="d-flex  footUl">
          <li>
            <Link to="/about">AboutUs</Link>
          </li>
          <li>
            {" "}
            <Link to="/contact">ContactUs</Link>
          </li>
          <li>
            <Link to="/policy">OurPolicies</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default footer;
