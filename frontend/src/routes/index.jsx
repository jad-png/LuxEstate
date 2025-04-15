import { Component } from "react";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";

const routes = [
    { path: "/", Component: Home, layout: MainLayout},
];

export default routes;