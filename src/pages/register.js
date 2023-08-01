import React, { useState } from "react";
import Layout from "../components/layout/layout.js";
// import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import axios from "axios";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPassword] = useState("");
  const [sKey, setSKey] = useState("");
  const [phoneNo, setPhone] = useState("");
  // const navigateOnReg = useNavigate();
  return (
    <Layout>
      <div className="d-flex flex-column justify-content-center align-items-center registerTopDiv">
        <h1>Register</h1>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            try {
              const res = await axios.post(
                `${process.env.REACT_APP_API}/register`,
                { name, email, pass, sKey, phoneNo }
              );
              if (res.data.success) {
                toast.success(res.data.message);
              } else {
                toast.error(res.data.message);
              }
            } catch (error) {
              console.log(error);
              toast.error("Something went wrong");
            }
          }}
        >
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter your Name"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-3">
            <input
              value={pass}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="mb-3">
            <input
              value={sKey}
              onChange={(e) => {
                setSKey(e.target.value);
              }}
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter any secretKey"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="number"
              value={phoneNo}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter your phoneNo"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
