import { Component } from "react";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";

const routes = [
    { path: "/", component: Home, layout: MainLayout},
];

export default routes;