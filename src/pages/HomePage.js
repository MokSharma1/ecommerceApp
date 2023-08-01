import React from "react";
import Layout from "../components/layout/layout.js";
import { useAuth } from "../components/context/auth.js";
const HomePage = () => {
  const [User] = useAuth();
  return (
    <Layout title="Ecommerce app">
      HomePage
      <pre>{JSON.stringify(User)}</pre>
    </Layout>
  );
};

export default HomePage;
