import { Component } from "react";
import MainLayout from "../layouts/MainLayout";
import Building from "../pages/Building";
import Home from "../pages/Home";
import Availability from "../pages/Availability";
import Apartment from "../pages/Apartment";
import Blog from "../pages/Blog";
import Post from "../pages/Post";
const routes = [
    { path: "/", component: Home, layout: MainLayout},
    { path: "/building", component: Building, layout: MainLayout},
    { path: "/availability", component: Availability, layout: MainLayout},
    { path: "/apartment", component: Apartment, layout: MainLayout},
    { path: "/Blog", component: Blog, layout: MainLayout},
    { path: "/BlogPost", component: Post, layout: MainLayout},
];

export default routes;