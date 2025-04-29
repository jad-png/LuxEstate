import React from "react";
import { NotificationForm } from "../components/Admin/NotificationForm";
import { NotificationsList } from "../components/Admin/NotificationsList";

const Admin_notification = () => {
    return (
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-semibold dm-serif text-[#262626] mb-6">
            Notification Management
          </h1>
          <NotificationsList />
          <NotificationForm />
        </div>
    );
}

export default Admin_notification;