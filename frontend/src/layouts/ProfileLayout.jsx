import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Global/Header";
import "../App.css";

const ProfileLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default ProfileLayout;
