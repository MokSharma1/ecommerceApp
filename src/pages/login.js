import React, { useState } from "react";
import Layout from "../components/layout/layout";
import { useAuth } from "../components/context/auth";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate, useLocation } from "react-router-dom";
const Login = () => {
  const location = useLocation();
  const nvg = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [sKey, setSKey] = useState("");
  const [newpass, setnewpass] = useState("");
  const [cnewpass, setcnewpass] = useState("");
  const [skeymatched, setSKeymatched] = useState(false);
  const [knowPass, setKnowPass] = useState(true);
  const [User, SetUser] = useAuth();
  const navig = useNavigate();
  const fAftSub = async (e) => {
    e.preventDefault();
    try {
      if (!skeymatched) {
        if (knowPass) {
          const res = await axios.post(`${process.env.REACT_APP_API}/login`, {
            email,
            pass,
          });

          if (res.data.success) {
            SetUser({ ...User, user: res.data.user, token: res.data.token });
            localStorage.setItem("auth", JSON.stringify(res.data));
            navig(location.state || "/");
            toast.success(res.data.message);
          } else {
            toast.error(res.data.message);
          }
        } else {
          const res = await axios.post(
            `${process.env.REACT_APP_API}/forgotpass`,
            { email, sKey }
          );
          if (res.data.success) {
            toast.success(res.data.message);
            setSKeymatched(true);
          } else {
            // setSKeymatched(false);
            toast.error(res.data.message);
          }
        }
      } else {
        const res = await axios.post(
          `${process.env.REACT_APP_API}/changepass`,
          { newpass, cnewpass, email }
        );
        if (res.data.success) {
          toast.success(res.data.message);
          setKnowPass(true);
          setSKeymatched(false);
        } else {
          toast.error(res.data.message);
        }
      }
    } catch (error) {
      console.log("Couldn't proceed in the login part due to " + error);
    }
  };
  return (
    <Layout>
      <div className="d-flex flex-column justify-content-center align-items-center registerTopDiv">
        <h1>LOGIN</h1>
        <form onSubmit={fAftSub}>
          {!skeymatched ? (
            <>
              {" "}
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
              {knowPass ? (
                <>
                  <div className="mb-3">
                    <input
                      type="password"
                      value={pass}
                      onChange={(e) => {
                        setPass(e.target.value);
                      }}
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                </>
              ) : (
                <>
                  <input
                    type="text"
                    className="form-control"
                    value={sKey}
                    onChange={(e) => {
                      setSKey(e.target.value);
                    }}
                    id="exampleInputPassword1"
                    placeholder="Enter your secret key"
                    required
                  />
                </>
              )}
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <a
                onClick={() => {
                  setKnowPass(!knowPass);
                }}
                style={{ cursor: "pointer" }}
              >
                {knowPass ? (
                  <>
                    <h6 className="mt-3"> Forgot password?</h6>
                  </>
                ) : (
                  <>
                    <h6 className="mt-3"> Login</h6>
                  </>
                )}
              </a>
            </>
          ) : (
            <>
              <div className="mb-3">
                <input
                  type="text"
                  value={newpass}
                  onChange={(e) => {
                    setnewpass(e.target.value);
                  }}
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter new pass"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  value={cnewpass}
                  onChange={(e) => {
                    setcnewpass(e.target.value);
                  }}
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Confirm new pass"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </>
          )}
        </form>
      </div>
    </Layout>
  );
};

export default Login;
