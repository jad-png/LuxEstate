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
import VisitRequest from "../pages/VisitRequest";
import Admin_property from "../pages/Admin_property";
import Admin_features from "../pages/Admin_features";
import AdminBlog from '../pages/Admin_blog';
import AdminNotifcation from '../pages/Admin_notification';
import Favorites from "../pages/Favorites";
import Profile from "../pages/Profile"
import ProfileLayout from "../layouts/ProfileLayout";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import ClientCommunicationPage from "../pages/Agent/ClientCommunicationPage";
import { ManageAppointmentsPage } from "../pages/Agent/ManageAppointments";
import Appointment from "../pages/Appointment";
import PostForm from "../pages/BlogpostForm";
import CategoryProperties from "../pages/CategoryProperties";
import propertyDetails from "../pages/propertyDetails";


const routes = [
  { path: "/login", component: Login, layout: AuthLayout},
  { path: "/register", component: Register, layout: AuthLayout},
  { path: "/my-profile", component: Profile, layout: ProfileLayout, roles: [3]},
  { path: "/", component: Home, layout: MainLayout },
  { path: "/building", component: Building, layout: MainLayout },
  { path: "/properties-category/:categoryId", component: CategoryProperties, layout: MainLayout},
  { path: "/property/:id", component: propertyDetails, layout: MainLayout},
  { path: "/favorites", component: Favorites, layout: MainLayout },
  { path: "/availability", component: Availability, layout: MainLayout },
  { path: "/apartment", component: Apartment, layout: MainLayout },
  { path: "/appointments", component: Appointment, layout: MainLayout},
  { path: "/Blog", component: Blog, layout: MainLayout },
  { path: "/blog/category/:categoryId", component: Blog, layout: MainLayout },
  { path: "/create_post", component: PostForm, layout: MainLayout},
  { path: "/post/:postId", component: Post, layout: MainLayout },
  { path: "/contact", component: VisitRequest, layout: MainLayout },
  { path: "/agents/clients", component: ClientCommunicationPage, layout: AgentLayout},
  { path: "/agents/appointments", component: ManageAppointmentsPage, layout: AgentLayout},
  { path: "/admin/properties", component: Admin_property, layout: AdminLayout },
  { path: "/admin/features", component: Admin_features, layout: AdminLayout },
  { path: "/admin/blog", component: AdminBlog, layout: AdminLayout },
  { path: "/admin/notification", component: AdminNotifcation, layout: AdminLayout },
];

export default routes;
