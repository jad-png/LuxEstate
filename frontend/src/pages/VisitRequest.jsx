import React, { useState } from "react";
import { VisitRequestModal } from "../components/Modals/VisitRequestModal";

function VisitRequest() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    
    return (
        <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Visit Us Section */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold dm-serif text-[#262626] mb-6">
              Visit Us
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold dm-serif text-[#262626]">
                  Manhattan
                </h3>
                <p className="text-[#666666] manrope">
                  401 Broadway, 24th Floor, Orchard View, London, UK
                </p>
                <p className="text-[#666666] manrope">
                  Tel: +1-212-125-6789
                </p>
                <a
                  href="#"
                  className="text-[#a27d56] manrope hover:text-[#8b6a47] underline"
                >
                  View on Google Map
                </a>
              </div>
              <div>
                <h3 className="text-lg font-semibold dm-serif text-[#262626]">
                  Brooklyn
                </h3>
                <p className="text-[#666666] manrope">
                  401 Broadway, 24th Floor, Orchard View, London, UK
                </p>
                <p className="text-[#666666] manrope">
                  Tel: +1-212-125-6789
                </p>
                <a
                  href="#"
                  className="text-[#a27d56] manrope hover:text-[#8b6a47] underline"
                >
                  View on Google Map
                </a>
              </div>
            </div>
            <div className="mt-8 p-6 bg-[#f8f3e9] flex items-center">
              <div className="w-12 h-12 bg-pink-200 flex items-center justify-center text-[#666666] manrope text-xl">
                A
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold dm-serif text-[#262626]">
                  More comfortable talking with us?
                </h3>
                <p className="text-[#666666] manrope">
                  Schedule a 15 min intro call with us. We'll answer your questions and discuss.
                </p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="mt-2 text-[#a27d56] manrope hover:text-[#8b6a47] underline"
                >
                  Schedule a Visit
                </button>
              </div>
            </div>
          </div>

          {/* Drop Us a Line Section */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold dm-serif text-[#262626] mb-6">
              Drop Us a Line
            </h2>
            <p className="text-[#666666] manrope mb-4">
              Your email will not be published. Required fields are marked *
            </p>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Name *"
                className="w-full p-3 border border-[#e5e5e5] text-[#666666] manrope focus:outline-none focus:border-[#a27d56]"
              />
              <input
                type="email"
                placeholder="E-mail *"
                className="w-full p-3 border border-[#e5e5e5] text-[#666666] manrope focus:outline-none focus:border-[#a27d56]"
              />
              <textarea
                placeholder="Message"
                rows="5"
                className="w-full p-3 border border-[#e5e5e5] text-[#666666] manrope focus:outline-none focus:border-[#a27d56] resize-none"
              />
              <button
                className="px-6 py-2 bg-[#a27d56] text-white manrope hover:bg-[#8b6a47]"
              >
                Submit
              </button>
            </div>
          </div>
        </div>

        <VisitRequestModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    );
};

export default VisitRequest;

// color pallette
// #c78960
// #8b8570
// #faf6f3
// #2c241e