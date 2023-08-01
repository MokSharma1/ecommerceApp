import React from "react";
import Layout from "../components/layout/layout.js";
const PageNotFound = () => {
  return (
    <Layout title="404 Error">
      <section
        className="d-flex  justify-content-center align-items-center"
        style={{ minHeight: "80vh" }}
      >
        <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
          <h1 style={{ fontSize: "80px" }}>404 Error</h1>
          <h2>Page Doesn't Exist</h2>
        </div>
      </section>
    </Layout>
  );
};

export default PageNotFound;
