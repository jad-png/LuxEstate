import React from "react";
import { Outlet } from "react-router";

const AgentLayout = () => {
    return (
        <div>
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default AgentLayout