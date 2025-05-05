import React, { useEffect } from "react";
import useBlogCategory from "../../stores/storeBlogCategory";
import { Link, useNavigate } from "react-router";

export function BlogSideBar() {
  const { blogCategories, error, loading, fetchCategories } = useBlogCategory();
  const navigate = useNavigate();

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const displayedCategories = (blogCategories || []).slice(0, 5);

  return (
    <div className="w-full md:w-1/3 mt-8 md:mt-0">
      <div className="bg-white p-6 border-l border-[#e5e5e5]">
        <h3 className="text-xl font-semibold text-[#a27d56] dm-serif border-b border-[#e5e5e5] pb-3">
          Categories
        </h3>
        {loading ? (
          <p className="py-4 px-4 text-center text-gray-600">Loading...</p>
        ) : error ? (
          <p className="py-4 px-4 text-center text-red-600">Error: {error}</p>
        ) : displayedCategories.length > 0 ? (
          <ul className="mt-4 text-[#666666] manrope">
            <li
              className="mt-2 cursor-pointer hover:text-[#a27d56]"
              onClick={() => navigate("/blog")}              
            >
              • All Posts
            </li>{" "}
            {displayedCategories.map((category) => (
              <li
                key={category.id}
                className="mt-2 cursor-pointer hover:text-[#a27d56]"
              >
                <Link to={`/blog/category/${category.id}`}>
                • {category.name}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="py-4 px-4 text-center text-gray-600">
            No categories available
          </p>
        )}
        {/* <div className="mt-6 relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-3 border border-[#e5e5e5] text-[#666666] manrope focus:outline-none focus:border-[#a27d56]"
          />
        </div> */}
      </div>
      <div className="border-b relative top-4 left-2 w-full"></div>
      <div className="mt-8 bg-white p-6 border-l border-[#e5e5e5]">
        <div>
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
            alt="Book a visit"
            className="w-full h-40 object-cover"
          />
          <h3 className="text-xl font-semibold mt-4 dm-serif text-[#262626]">
            Book A Visit
          </h3>
          <p className="text-sm text-[#666666] manrope mt-2">SALES@EXAMP.COM</p>
          <p className="text-sm text-[#666666] manrope mt-1">+1 121-25</p>
        </div>
      </div>
    </div>
  );
}
