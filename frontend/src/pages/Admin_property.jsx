import React from "react";
import { PropertyTable } from "../components/Admin/PropertyTable";
import { StatsCard } from "../components/Admin/StatsCard";
import { PropertyModel } from "../components/Admin/PropertyModal";

const Admin_property = () => {
  return (
    <div className="">
      <div className="md:flex md:justify-center md:py-2">
        <div className="md:flex md:w-full justify-between md:py-2">
          <StatsCard />
          <StatsCard />
          <StatsCard />
        </div>
      </div>
      <PropertyTable />
      <PropertyModel />
    </div>
  );
};

export default Admin_property;
