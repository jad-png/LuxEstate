import { Component } from "react";
import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";
import AuthLayout from "../layouts/AuthLayout";
import AgentLayout from "../layouts/AgentLayout";
import Building from "../pages/Building";
import Home from "../pages/Home";
import Availability from "../pages/Availability";
import Apartment from "../pages/Apartment";
import Blog from "../pages/Blog";
import Post from "../pages/Post";
import ContactRequest from "../pages/ContactRequest";
import Admin_property from "../pages/Admin_property";
import Admin_features from "../pages/Admin_features";
import AdminBlog from '../pages/Admin_blog';
import AdminNotifcation from '../pages/Admin_notification';
import Favorites from "../pages/Favorites";
import Profile from "../pages/Profile"
import ProfileLayout from "../layouts/ProfileLayout";
import Properties from "../pages/Properties";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import ClientCommunicationPage from "../pages/Agent/ClientCommunicationPage";

const routes = [
  { path: "/login", component: Login, layout: AuthLayout},
  { path: "/register", component: Register, layout: AuthLayout},
  { path: "/", component: Home, layout: MainLayout },
  { path: "/building", component: Building, layout: MainLayout },
  { path: "/favorites", component: Favorites, layout: MainLayout },
  { path: "/availability", component: Availability, layout: MainLayout },
  { path: "/apartment", component: Apartment, layout: MainLayout },
  { path: "/Blog", component: Blog, layout: MainLayout },
  { path: "/BlogPost", component: Post, layout: MainLayout },
  { path: "/contact-request", component: ContactRequest, layout: MainLayout },
  { path: "/Admin/properties", component: Admin_property, layout: AdminLayout },
  { path: "/Admin/features", component: Admin_features, layout: AdminLayout },
  { path: "/Admin/blog", component: AdminBlog, layout: AdminLayout },
  { path: "/Admin/notification", component: AdminNotifcation, layout: AdminLayout },
  { path: "/my-profile", component: Profile, layout: ProfileLayout},
  { path: "/properties", component: Properties, layout: MainLayout},
  { path: "/agents/clients", component: ClientCommunicationPage, layout: AgentLayout},
];

export default routes;
