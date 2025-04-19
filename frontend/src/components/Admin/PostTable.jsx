import React, { useState } from "react";
import { PostContent } from "./PostContent";

export function PostTable() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const samplePosts = [
    {
      id: 1,
      title: "Introducing ShelfBrackets",
      publisher: "Admin",
      status: "Draft",
      content:
        "Kevin had a lot going on in his life and was trying to find the right educational environment to fit into his needs and schedule.",
    },
  ];
  return (
    <div className="">
      <div className="bg-white p-6 shadow-sm border border-[#e5e5e5]">
        <h2 className="text-xl font-semibold dm-serif text-[#262626] mb-4">
          Post's Management
        </h2>
        <table className="w-full text-left manrope">
          <thead>
            <tr className="border-b border-[#e5e5e5] text-[#666666]">
              <th className="py-2">ID</th>
              <th className="py-2">Title</th>
              <th className="py-2">Publisher</th>
              <th className="py-2">Status</th>
              <th className="py-2 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {samplePosts.map((post) => (
              <tr
                key={post.id}
                className="border-b border-[#e5e5e5] text-[#666666]"
              >
                <td className="py-2">{post.id}</td>
                <td className="py-2">{post.title}</td>
                <td className="py-2">{post.publisher}</td>
                <td className="py-2">
                  <span
                    className={`px-2 py-1 rounded ${
                      post.status === "Draft"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {post.status}
                  </span>
                </td>
                <td className="py-2">
                  <div className="flex items-center justify-center gap-2">
                    <div>
                      <button onClick={() => {setIsModalOpen(true)}} className="px-2 py-1 text-[#a27d56] hover:text-[#8b6a47] manrope">
                        View Details
                      </button>
                      
                    </div>
                    <button className="px-2 py-1 text-green-600 hover:text-green-800 manrope">
                      Publish
                    </button>
                    <button className="px-2 py-1 text-yellow-600 hover:text-yellow-800 manrope">
                      Draft
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <PostContent
                        isOpen={isModalOpen}
                        onClose={() => {
                          setIsModalOpen(false);
                        }}
                        post={samplePosts[0]}
                      />
    </div>
  );
}
