import React, { useEffect } from "react";
import useAuthStore from "../stores/authStore";
import { useNavigate } from "react-router";

const roleRedirectMap = {
  1: "/admin/properties",
  2: "/agent/",
  3: "/",
};

const ProptectedRoute = ({ children, allowedRoles = [] }) => {
  const { isAuthenticated, user } = useAuthStore();
  const navigate = useNavigate();
  const userRole = user?.role_id;

  useEffect(() => {
    if (!isAuthenticated) {
        navigate("/login", { replace: true });
    } else if (allowedRoles.length > 0 && !allowedRoles.includes(userRole)) {
        const redirectPath = roleRedirectMap[userRole] || "/";
        navigate(redirectPath, { replace: true });
    }
}, [isAuthenticated, userRole, navigate, allowedRoles]);

if (!isAuthenticated || (allowedRoles.length > 0 && !allowedRoles.includes(userRole))) {
    return null;
}

  return children;
};


export default ProptectedRoute;