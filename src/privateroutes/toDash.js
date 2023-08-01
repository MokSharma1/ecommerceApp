import React, { useEffect, useState } from "react";
import { useAuth } from "../components/context/auth";
import { Outlet } from "react-router-dom";
import Spinner from "../components/spinner";
import axios from "axios";
import { useLocation } from "react-router-dom";
import AdminDashboard from "../pages/admin/adminDashboard";

const ToDash = () => {
  const [User] = useAuth();
  const loc = useLocation();
  const [loggedIn, SetLoggedIn] = useState(false);
  useEffect(() => {
    const authCheck = async () => {
      const res = await axios.get(`${process.env.REACT_APP_API}/user-auth`, {
        headers: { Authorization: User?.token },
      });
      if (res.data.ok) {
        SetLoggedIn(true);
      }
    };
    if (User?.token) authCheck();
  }, [User?.token]);

  return loggedIn ? (
    User.user.role == 0 ? (
      <Outlet />
    ) : (
      <AdminDashboard />
    )
  ) : (
    <Spinner />
  );
};

export default ToDash;
