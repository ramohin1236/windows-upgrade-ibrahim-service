import React from "react";
import Image from "next/image";
import image1 from "../../../../public/first.svg";
import image2 from "../../../../public/second.svg";
import image3 from "../../../../public/third.svg";
import Dotted from "../../../../public/Dotted Shape.svg";
import contact_man from "../../../../public/contact_man.svg";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../../../src/components/ui/breadcrumb";


const About = () => {
  return (
    <section className="pb-16 ">
      {/* Hero Section */}
      <div className="bg-[#e6f4f1] mb-8 lg:mb-20">
        <div>
          <div className=" project_container flex flex-col gap-8 lg:flex-row justify-between items-center ">
            {/* left side */}
            <div className="flex flex-col pt-10 lg:pt-0">
              <h3 className="text-2xl lg:text-4xl font-semibold mb-5">
                About Taskalley{" "}
              </h3>
              <div>
                <Breadcrumb>
                  <BreadcrumbList>
                    {/* Home link */}
                    <BreadcrumbItem>
                      <BreadcrumbLink
                        href="/"
                        className="
                            font-semibold lg:text-base"
                      >
                        Home
                      </BreadcrumbLink>
                    </BreadcrumbItem>

                    {/* Separator */}
                    <BreadcrumbSeparator className="text-base" />

                    {/* Current page */}
                    <BreadcrumbItem>
                      <BreadcrumbPage className="text-[#0EA5E9] font-semibold lg:text-base">
                        About US
                      </BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
            </div>
            {/* right side */}
            <div>
              <Image
                src={contact_man}
                alt="hero contact image"
                className="lg:h-96 
                      pr-24 lg:pr-0 "
              />
            </div>
          </div>
        </div>
      </div>
      {/* privacy policys */}
      <div className="project_container flex flex-col lg:flex-row gap-16 px-4">
          {/* Right Side */}
                <div className="relative w-full lg:w-1/2 flex items-center justify-center flex-1">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 flex items-center justify-center -left-6 md:-left-10 lg:left-[360px] -bottom-[260px]">
                    <Image
                      src={Dotted}
                     
                      alt="Pattern"
                      className="opacity-50 max-w-full h-auto"
                    />
                  </div>
        
                  {/* Images container */}
                  <div className="relative flex items-center gap-3 sm:gap-4 lg:gap-6">
                    {/* Left column images */}
                    <div className="flex flex-col gap-3 sm:gap-4 lg:gap-6">
                      <Image
                        src={image3}
                        alt="Service 1"
                        className="rounded-2xl object-cover w-28 sm:w-36 md:w-48 lg:w-52"
                      />
                      <Image
                        src={image2}
                        alt="Service 2"
                        className="rounded-2xl object-cover w-28 sm:w-36 md:w-48 lg:w-52"
                      />
                    </div>
        
                    {/* Right single image */}
                    <Image
                      src={image1}
                      alt="Service 3"
                      className="rounded-2xl object-cover w-28 sm:w-36 md:w-48 lg:w-52"
                    />
                  </div>
                </div>

        {/* Appointments and Cancellations */}
        <div className="flex flex-col gap-2 flex-1">
          <p className="text-[#115E59] text-base font-semibold"> Why Choose Taskalley?</p>
          <h5 className="text-4xl font-semibold">Simplifying Services, Empowering People</h5>

          <p className="text-base text-[#6B7280]">
            At Taskalley, we’re on a mission to make finding and offering everyday services easy, reliable, and secure. Whether you're looking for help with cleaning, plumbing, repairs, or skilled handyman work — Taskalley connects you with trusted professionals in just a few clicks.
          </p>
          <p className="text-base text-[#6B7280]">
          We believe that access to quality service should be simple. That’s why we’ve built a platform that removes the hassle from booking and delivering essential services — putting control and convenience in the hands of both customers and service providers.
          </p>

          <p className="text-base font-semibold">Our Mission:</p>
          <p className="text-base text-[#6B7280]">
            To simplify the way people access and deliver everyday services by providing a secure, efficient, and user-friendly platform that connects customers with trusted service professionals.
          </p>
          <p className="text-base font-semibold">Our Vision :</p>
          <p className="text-base text-[#6B7280]">
          To become the leading service marketplace that empowers individuals and businesses to thrive through seamless, transparent, and technology-driven service experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
