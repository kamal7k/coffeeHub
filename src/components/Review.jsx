import React from 'react';
import Reviewer from "../assets/Reviewer.png"; // Ensure correct path to the image

const Review = () => {
  return (
    <div className="mx-4 mt-4 relative">
      {/* Banner Image */}
      <img
        className="max-h-[500px] w-full object-cover rounded-lg"
        src="https://png.pngtree.com/background/20230518/original/pngtree-pair-of-people-sitting-at-a-table-in-a-restaurant-picture-image_2646657.jpg"
        alt="restaurant img"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 rounded-lg" />

      {/* Overlay Content */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center gap-16 sm:gap-4 p-8">
        {/* Left Section: Reviewer Image */}
        <div className="relative z-10 flex flex-col items-center ">
          <img
            className=" sm:h-1 sm:w-1 md:h-32 md:w-32 h-60 w-60 rounded-md object-cover border-4 border-white shadow-lg"
            src={Reviewer}
            alt="Reviewer"
          />
          {/* Reviewer Name and Rating */}
          <p className="text-white font-bold sm:text-[6px] sm:mt-1 md:mt-3 mt-4">John Doe, Student</p>
          <div className="flex items-center mt-1 sm:mt-2">
            <span className="text-yellow-400 text-xl sm:font-thin ">★★★★★</span>
          </div>
        </div>

        {/* Right Section: Review Text */}
        <div className="relative z-10 p-4 md:p-6 sm:p-2 rounded-md">
          {/* Quotation Marks */}
          <div className="absolute top-0 left-0 sm:text-xl text-6xl text-gray-300 -ml-4 -mt-4 md:ml-6 md:mt-2">“</div>
          <div className="absolute bottom-0 right-0 sm:text-xl text-6xl text-gray-300 -mr-4 -mb-4 md:mr-1 md:-mb-1">”</div>

          <div className="text-white">
            {/* Large screens with line breaks */}
            <p className="sm:hidden block text-[20px]">
              The CoffeeHub had the <br />
              best coffee around Pokhara. The shop is <br />
              quiet, clean and has an outdoor sitting area <br />
              to enjoy your coffee and people watch. The <br />
              staff are very friendly and very helpful. The <br />
              muffins here are also very good.
            </p>

            {/* Small screens without line breaks */}
            <p className="md:block hidden sm:text-[6px] ">
              The CoffeeHub had the best coffee around Pokhara. The shop is quiet, clean and has an outdoor...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
