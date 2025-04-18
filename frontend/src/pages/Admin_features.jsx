import React from "react";
import { FeatureItem } from "../components/Admin/FeatureItem";
import { FeatureList } from "../components/Admin/FeatureList";
import { AttachFeatureModal } from "../components/Admin/AttachFeatureModal";
import { AddFeatureModal } from "../components/Admin/AddFeatureModal";

const Admin_features = () => {
  return (
    <div className="">
      <FeatureList />
      <AttachFeatureModal />
    </div>
  );
};

export default Admin_features;
