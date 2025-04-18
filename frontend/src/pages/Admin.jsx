import React from "react";
import { DataTable } from "../components/Admin/DataTable";
import { StatsCard } from "../components/Admin/StatsCard";

const Admin = () => {
  return (
    <div className="">
      <div className="md:flex md:justify-center md:py-2">
        <div className="md:flex md:w-full justify-between md:py-2">
          <StatsCard />
          <StatsCard />
          <StatsCard />
        </div>
      </div>
      <DataTable />
    </div>
  );
};

export default Admin;
