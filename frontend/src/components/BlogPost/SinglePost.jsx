import React from "react";
import { BlogSideBar } from "../Global/BlogSideBar";

export function SinglePost() {
  return (
    <div className="flex items-center justify-center flex-col lg:flex-row lg:gap-10 px-4 py-6">
      <div className="flex flex-col items-center gap-6 w-full lg:w-3/4">
        {/* <div className="w-full">
          <div className="w-56">
            <Pagination />
          </div>
        </div> */}
      </div>
      <BlogSideBar />
    </div>
  );
}
