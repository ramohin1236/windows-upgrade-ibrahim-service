import registration_img from "../../../../public/login.svg";
import React from "react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa6";
import Link from "next/link";

const VerifyReg = () => {
  return (
    <section className="">
      <div className="max-w-[1100px] mx-auto h-[1200px] flex items-center justify-center max-h-screen  ">
        <div className="flex items-center justify-center gap-8 bg-[#F8FAFC] rounded-sm overflow-clip shadow-2xl">
          {/* Left Side - Images */}
          <div className="hidden md:block overflow-hidden w-full h-full">
            <div className="w-auto ">
              <Image
                src={registration_img}
                alt="Worker"
                className="w-full object-cover"
              />
            </div>
          </div>

          {/* Right Side - Role Selection */}
          <div className="flex w-full items-center ">
            <div>
              <div className=" flex flex-col items-center justify-center py-6 ">
                <div className="w-full">
                  <div className="p-6 sm:p-8 ">
                    <h1 className="text-[#394352] text-3xl font-semibold my-4">
                      Provide Your Address
                    </h1>
                    <p className="text-[#1F2937]">
                      Please provide your valid address, and verify it to
                      confirm your identity.
                    </p>
                    {/* -------------------form------------------------------ */}
                    <form className="mt-12 space-y-6">
                      <div>
                        <label className="text-[#1F2937] text-sm font-medium mb-2 block">
                          City / LGA
                        </label>
                        <div className="relative flex items-center">
                          <input
                            name="city"
                            type="text"
                            required
                            className="w-full text-[#6B7280] text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600"
                            placeholder="Ikeja, Surulere"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="text-[#1F2937] text-sm font-medium mb-2 block">
                          Street Address
                        </label>
                        <div className="relative flex items-center">
                          <input
                            name="address"
                            type="address"
                            required
                            className="w-full text-slate-900 text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600"
                            placeholder="Enter password"
                          />
                        </div>
                      </div>

                      <label
                       
                        className="bg-white text-slate-500 font-semibold text-base rounded max-w-md h-52 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 border-dashed mx-auto"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-11 mb-3 fill-gray-500"
                          viewBox="0 0 32 32"
                        >
                          <path
                            d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
                            data-original="#000000"
                          />
                          <path
                            d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
                            data-original="#000000"
                          />
                        </svg>
                        Upload file
                        <input type="file" id="uploadFile1" className="hidden" />
                        <p className="text-xs font-medium text-slate-400 mt-2">
                          PNG, JPG SVG, WEBP, and GIF are Allowed.
                        </p>
                      </label>

                      <div className="mt-4 rounded-sm overflow-clip transition transform duration-300 hover:scale-101">
                        <button className="bg-[#115E59] w-full py-2 text-white cursor-pointer ">
                          Verify
                        </button>
                      </div>
                    </form>
                   
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerifyReg;
