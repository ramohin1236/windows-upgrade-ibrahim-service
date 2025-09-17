import registration_img from "../../../../public/login_page_image.png";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const BankVerification = () => {
  return (
    <section className="">
      <div className="max-w-[1100px] mx-auto h-[1200px] flex items-center justify-center max-h-screen  ">
        <div className="flex items-center justify-center gap-8 bg-[#F8FAFC] rounded-sm overflow-clip md:shadow-2xl">
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
                     Verify Your BVN
                    </h1>
                    <p className="text-[#1F2937]">
                      Enter your 11-digit Bank Verification Number (BVN) for identity confirmation.
                    </p>
                    {/* -------------------form------------------------------ */}
                    <form className="mt-12 space-y-6">
                      <div>
                        <label className="text-[#1F2937] text-sm font-medium mb-2 block">
                          Bank Verification Number (BVN)
                        </label>
                        <div className="relative flex items-center">
                          <input
                            name="referal_code"
                            type="text"
                            className="w-full text-[#6B7280] text-sm border border-slate-300 px-4 py-3 pr-8 rounded-md outline-blue-600"
                            placeholder="Enter your 11-digit BVN"
                          />
                        </div>
                      </div>

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

export default BankVerification;
