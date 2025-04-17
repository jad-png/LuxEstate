import React from "react";

export function Comments() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80"
            alt="City street"
            className="w-full h-96 object-cover rounded-lg"
          />
          <div className="absolute top-4 left-4 bg-[#a27d56] text-white text-xs uppercase tracking-wider px-3 py-1 rounded manrope">
            MEDITATION
          </div>
        </div>
        <div className="mt-6">
          <p className="text-sm text-[#666666] manrope">
            December 28, 2021 • By Admin
          </p>
          <h1 className="text-4xl font-semibold mt-4 dm-serif text-[#262626]">
            Introducing: ShelfBrackets
          </h1>
          <p className="text-[#666666] mt-6 manrope leading-relaxed">
            Kevin had a lot going on in his life and was trying to find the
            right educational environment to fit into his needs and schedule.
            There weren’t many opportunities around him outside of the local
            community college and he was stuck trying to find a way to learn.
            Dive into his...
          </p>
        </div>
        {/* Recommended Courses & Programs Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold dm-serif text-[#262626] mb-6">
            Kevin's Recommended Courses & Programs
          </h2>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1613545325278-78f5e4d6ea8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Bedroom interior"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Office interior"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
          <ul className="list-disc pl-5 mt-6 text-[#666666] manrope">
            <li>
              I knew different things about marketing and how it worked, but I
              didn’t understand
            </li>
            <li>Now I can put everything I know about</li>
            <li>Marketing together in one neat package.</li>
          </ul>
          <p className="mt-4 text-[#666666] manrope">
            Explore more: See what courses and programs other learners have
            taken to achieve their career goals
          </p>
          <p className="mt-2 text-sm text-[#666666] manrope">
            Tags: Decor Decoration Design
          </p>
        </div>
        {/* Comments Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold dm-serif text-[#262626] mb-6 flex items-center">
            Comments
            <span className="ml-2 w-6 h-6 bg-[#a27d56] text-white rounded-full flex items-center justify-center text-xs manrope">
              3
            </span>
          </h2>
          {/* <Comment
                key={index}
                name={comment.name}
                date={comment.date}
                text={comment.text}
              /> */}
        </div>
      </div>
    </div>
  );
};

export default Comments;
