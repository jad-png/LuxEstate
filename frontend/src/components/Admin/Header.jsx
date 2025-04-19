import React from "react";

export function Header() {
    return (
        <header className="bg-white border-b border-[#e5e5e5] p-4 flex justify-end items-center fixed top-0 left-64 right-0">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-[#e5e5e5] rounded-full flex items-center justify-center text-[#666666] manrope text-sm">
                A
              </div>
              <span className="ml-2 text-[#262626] manrope font-semibold">Admin</span>
            </div>
          </div>
        </header>
    );
}