import React from "react";
import useStorePost from "../../stores/storePost";
import { useParams, useSearchParams } from "react-router";

export function Pagination() {
  const { posts, fetchAllPosts, fetchPostsByCategory } = useStorePost();
  const { categoryId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = posts.current_page || 1;
  const lastPage = posts.last_page || 1;

  const handlePageChange = (page) => {
    if (page < 1 || page > lastPage) return;

    setSearchParams({ page: page.toString() });

    if (categoryId) {
      fetchPostsByCategory(categoryId, page);
    } else {
      fetchAllPosts(page);
    }
  };

  const getPageNumbers = () => {
    const maxPageToShow = 10;
    const pages = [];

    let startPage = Math.max(1, currentPage - Math.floor(maxPageToShow / 2));
    let endPage = Math.min(lastPage, startPage + maxPageToShow - 1);

    if (endPage - startPage + 1 < maxPageToShow) {
      startPage = Math.max(1, endPage - maxPageToShow + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="container mx-auto px-4 py-8 flex justify-center">
      <div className="flex items-center space-x-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="w-10 h-10 flex items-center justify-center bg-[#a27d56] text-white text-sm manrope hover:bg-[#8b6a47] transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {getPageNumbers().map((page) => (
          <button key={page}
            onClick={() => handlePageChange(page)}
            className={`px-4 py-2 border ${
              page === currentPage
                ? "bg-[#a27d56] text-white"
                : "hover:bg-[#a27d56] hover:text-white"
            } transition-colors`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === lastPage}
          className="w-10 h-10 flex items-center justify-center bg-white text-[#666666] text-sm manrope border border-[#e5e5e5] hover:bg-[#f5f5f5] transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
