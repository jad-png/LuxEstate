import { Component } from "react";
import MainLayout from "../layouts/MainLayout";
import Building from "../pages/Building";
import Home from "../pages/Home";

const routes = [
    { path: "/", component: Home, layout: MainLayout},
    { path: "/building", component: Building, layout: MainLayout},
];

export default routes;