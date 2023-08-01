import React from "react";
import Header from "./header.js";
import Footer from "./footer.js";
import { Toaster } from "react-hot-toast";
import { Helmet } from "react-helmet";
const layout = (prop) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />

        <meta name="description" content={prop.description} />
        <meta name="keywords" content={prop.keywords} />
        <meta name="author" content={prop.author} />

        <title>{prop.title}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Header />

      <main style={{ minHeight: "80vh" }}>
        <Toaster />
        <h1> {prop.children}</h1>
      </main>
      <Footer />
    </div>
  );
};

export default layout;
