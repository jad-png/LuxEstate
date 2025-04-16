import React from "react";
import { BlogPost } from "../Global/BlogPost";
import { BlogSideBar } from "../Global/BlogSideBar";

export function BlogSection() 
{
    return (
        <div className="flex items-center justify-center flex-col lg:flex-row lg:gap-10 px-4 py-6">
            <BlogPost />
            <BlogSideBar />
        </div>
    );
}