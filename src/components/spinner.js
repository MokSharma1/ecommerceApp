import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useNavigate, useLocation } from "react-router-dom";
const Spinner = () => {
  const [count, SetCount] = useState(5);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const interval = setInterval(() => {
      SetCount(count - 1);
    }, 1000);
    count === 0 && navigate("/login", { state: location.pathname });

    return () => clearInterval(interval);
  }, [count, navigate, location]);

  return (
    <>
      <div
        className=" d-flex flex-column align-items-center justify-content-center text-center "
        style={{ minHeight: "100vh" }}
      >
        <div
          className="spinner-border "
          style={{ height: "4rem", width: "4rem" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
        <div>
          <h2>Redirecting you in {count} seconds</h2>
        </div>
      </div>
    </>
  );
};

export default Spinner;
