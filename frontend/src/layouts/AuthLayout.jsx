import React from "react";
import { Outlet } from "react-router";
import { AuthHeader } from "../components/Auth/AuthHeader";
import { AuthFooter } from "../components/Auth/AuthFooter";

const AuthLayout = () => {
    return (
        <div>    
            <AuthHeader />
            <main>
                <Outlet/>
            </main>
            <AuthFooter />
        </div>
    );
};

export default AuthLayout;