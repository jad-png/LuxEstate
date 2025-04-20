import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Global/Header";
import "../App.css";
import Footer from "../components/Global/Footer";

const ProfileLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default ProfileLayout;
