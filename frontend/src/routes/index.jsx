import { Component } from "react";
import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";
import Building from "../pages/Building";
import Home from "../pages/Home";
import Availability from "../pages/Availability";
import Apartment from "../pages/Apartment";
import Blog from "../pages/Blog";
import Post from "../pages/Post";
import ContactRequest from "../pages/ContactRequest";
import Admin from "../pages/Admin";

const routes = [
  { path: "/", component: Home, layout: MainLayout },
  { path: "/building", component: Building, layout: MainLayout },
  { path: "/availability", component: Availability, layout: MainLayout },
  { path: "/apartment", component: Apartment, layout: MainLayout },
  { path: "/Blog", component: Blog, layout: MainLayout },
  { path: "/BlogPost", component: Post, layout: MainLayout },
  { path: "/contact-request", component: ContactRequest, layout: MainLayout },
  { path: "/Admin", component: Admin, layout: AdminLayout },
];

export default routes;
