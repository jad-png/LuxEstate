import React, { useState } from "react";
import { FeatureItem } from "./FeatureItem";
import { AddFeatureModal } from "./AddFeatureModal";

export function FeatureList() {
    const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="bg-white p-6 shadow-sm border border-[#e5e5e5]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold dm-serif text-[#262626]">
          All Features
        </h2>
        <div>
          <button 
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-[#a27d56] text-white manrope hover:bg-[#8b6a47]">
            Add New Feature
          </button>
          <AddFeatureModal isOpen={isModalOpen} onClose={() => {setIsModalOpen(false)}}/>
        </div>
      </div>
      <table className="w-full text-left manrope">
        <thead>
          <tr className="border-b border-[#e5e5e5] text-[#666666]">
            <th className="py-2 px-4">ID</th>
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Description</th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          <FeatureItem
          //   key={feature.id}
          //   id={feature.id}
          //   name={feature.name}
          />
        </tbody>
      </table>
    </div>
  );
}
