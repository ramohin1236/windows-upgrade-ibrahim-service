import Link from "next/link";
import React from "react";

const Cta = () => {
  return (
    <section className="pt-24 pb-24 gradiant-bg">
      <div className="max-w-[1240px] mx-auto px-4">
     <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-6 lg:gap-12 ">
  {/* Text Section */}
  <div className="flex flex-col gap-4 text-center lg:text-left max-w-2xl">
    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-snug">
      Ready to Grow Your Service Business?
    </h3>
    <p className="text-gray-700 text-base sm:text-lg md:text-xl">
      <span className="font-bold text-black">
        Join as a Service Provider on Servify —
      </span>{" "}
      showcase your skills, reach more clients, and manage bookings with ease —
      all in one platform designed to help your business thrive.
    </p>
  </div>

  {/* Button */}
  <div className="flex justify-center lg:justify-end w-full lg:w-auto">
    <Link
      href=""
      className="px-6 py-3 bg-[#115e59] text-white rounded-md hover:bg-teal-800 transition transform duration-300 hover:scale-105 text-lg font-medium"
    >
      Join as a Provider
    </Link>
  </div>
</div>

      </div>
    </section>
  );
};

export default Cta;
