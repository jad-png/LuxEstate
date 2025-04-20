import React from "react";

export function AuthFooter() {
  return (
    <footer className="w-full bg-[#f8f3e9] py-4 border-t border-[#e5e5e5]">
      <div className="container mx-auto px-4 text-center">
        <p className="text-[#666666] manrope text-sm">
          © 2025 Luxtower. All rights reserved.
        </p>
        <div className="mt-2 flex justify-center space-x-4">
          <a
            href="/"
            className="text-[#a27d56] manrope text-sm hover:underline"
          >
            Back to Main Site
          </a>
        </div>
      </div>
    </footer>
  );
}
