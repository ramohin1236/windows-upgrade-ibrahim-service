"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import image1 from "../../../../public/img1.png";
import image2 from "../../../../public/img2.png";
import image3 from "../../../../public/img3.png";
import image4 from "../../../../public/img4.png";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import roketAnimation from "@/../public/rocket launch.json";
import main_logo from "../../../../public/main_logo.svg";
import HowWorks from "@/components/home/HowWorks";
import Lottie from "lottie-react";
import PopularService from "@/sharred/popularService";
import cta_image from "../../../../public/cta.png";
import Hero from "../../../../public/Hero.svg";

import all_icon from "../../../../public/all_icon.png";
import Link from "next/link";

const faqs = [
  {
    question: "Can I contact business owners directly ?",
    answer:
      "Yes, once you’re signed in, you can message sellers directly through their listing page.",
  },
  {
    question: "Can I contact business owners directly ?",
    answer:
      "Yes, we ship worldwide. Shipping costs vary depending on your location.",
  },
  {
    question: "What filters can I use to search for businesses ?",
    answer:
      "Once your order is shipped, you will receive an email with the tracking details.",
  },
  {
    question: "How do I save or bookmark listings I'm interested in ??",
    answer:
      "Once your order is shipped, you will receive an email with the tracking details.",
  },
  {
    question: "Can I compare multiple businesses at once ?",
    answer:
      "Once your order is shipped, you will receive an email with the tracking details.",
  },
  {
    question: "How do I request more information from a seller ?",
    answer:
      "Once your order is shipped, you will receive an email with the tracking details.",
  },
  {
    question: "Are there fees for buyers?",
    answer:
      "Once your order is shipped, you will receive an email with the tracking details.",
  },
  {
    question: "What filters can I use to search for businesses ?",
    answer:
      "Once your order is shipped, you will receive an email with the tracking details.",
  },
  {
    question: "What filters can I use to search for businesses ?",
    answer:
      "Once your order is shipped, you will receive an email with the tracking details.",
  },
];

const TaskAlleyLaunch = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCounter((prev) => (prev > 0 ? prev - 1 : 0));
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Run only in browser
    if (typeof window === "undefined") return;

    // Load or create target date (90 days from first visit)
    let savedTarget = localStorage.getItem("targetDate");
    let targetDate;

    if (savedTarget) {
      targetDate = new Date(savedTarget);
    } else {
      targetDate = new Date();
      targetDate.setDate(targetDate.getDate() + 90);
      localStorage.setItem("targetDate", targetDate.toISOString());
    }

    const updateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    };

    // Initial call + interval
    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#F9FAFB]">

          
          {/* navbar */}
             <nav className="shadow-2xl py-3 px-3">
                 <div className="project_container py-2 ">
                     <Image src={main_logo}/>
                 </div>
             </nav>
          {/* navbar */}




      <div className="max-w-7xl mx-auto min-h-screen">
        <div
          className="min-h-screen w-full bg-cover bg-no-repeat bg-center flex items-center px-4 sm:px-8 md:px-12 lg:px-20"
          style={{ backgroundImage: "url('/Hero.svg')" }}
        >
          <div className="flex flex-col items-center  md:items-start gap-4 md:text-left max-w-2xl">
            <h6 className="text-lg sm:text-xl md:text-2xl text-[#115E59] font-semibold">
              Welcome to TaskAlley
            </h6>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug text-center md:text-start lg:text-start">
              Your trusted ally <br className="hidden md:block" /> for smarter
              tasking in Nigeria
            </h1>

            <p className="text-sm sm:text-base text-gray-500 leading-relaxed text-center md:text-start lg:text-start">
              TaskAlley is more than a marketplace — it’s your one-stop hub to
              post, find, and manage tasks with verified providers.
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose TaskAlleey Section */}
      <div className="project_container  py-12">
        <div className=" text-center flex flex-col gap-3 pb-4 md:pb-20">
          <h4 className="font-bold text-4xl">Why Choose TaskAlley?</h4>
          <p className="text-[#6B7280]">
            Experience excellence in digital craftsmanship with our team of
            skilled professionals dedicated to delivering excaptional results.
          </p>
        </div>
        {/* first */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-10">
          <div className="flex flex-col gap-3 p-6 md:p-8">
            <div className="flex items-center gap-3">
              <Image src={image1} alt="imagae1" className="w-16 " />
              <p className="text-xl font-medium">Save Time</p>
            </div>
            <div>
              <p className="text-[#6B7280]">
                No more endless searching or waiting. Task Alley connects you
                with skilled service providers instantly. Post a task in
                minutes, get quick responses, and hire the right person without
                delays. From home repairs to business support, save valuable
                time by letting the right people come to you.
              </p>
            </div>
          </div>
          {/* first */}
          <div className="flex flex-col gap-3 p-6 md:p-8">
            <div className="flex items-center gap-3">
              <Image src={image2} className="w-16 " alt="image2" />
              <p className="text-xl font-medium">Smarter Collaboration</p>
            </div>
            <div>
              <p className="text-[#6B7280]">
                Stay on the same page with real-time updates and built-in
                messaging. Task Alley ensures transparency from start to finish
                — discuss details, track progress, and manage tasks all in one
                place. Collaboration becomes effortless, even across different
                locations or busy schedules.
              </p>
            </div>
          </div>
          {/* first */}
          <div className="flex flex-col gap-3 p-6 md:p-8">
            <div className="flex items-center gap-3">
              <Image src={image3} className="w-16 " alt="image3" />
              <p className="text-xl font-medium">Secure & Reliable</p>
            </div>
            <div>
              <p className="text-[#6B7280]">
                Your safety and trust are our top priorities. Every task
                provider goes through verification checks, and all payments are
                held securely until the job is completed to your satisfaction.
                With Task Alley’s fraud detection signals and dispute resolution
                center, you’re always protected.
              </p>
            </div>
          </div>
          {/* first */}
          <div className="flex flex-col gap-3 p-6 md:p-8">
            <div className="flex items-center gap-3">
              <Image src={image4} className="w-16 " />
              <p className="text-xl font-medium">Insightful Tracking</p>
            </div>
            <div>
              <p className="text-[#6B7280]">
                Track the status of your tasks from start to finish with ease.
                Task Alley gives you clear visibility — from bids and approvals
                to completion and payments. With smart notifications and a
                transparent process, you always know where your project stands.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* lottie section */}
      <section className="pt-20 pb-20">
        <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center gap-10 flex-col md:flex-row">
          {/* left side */}
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-medium md:leading-normal text-[#6B7280]">
              We’re Almost There!
            </h3>
            <p className="text-3xl font-bold leading-relaxed">
              TaskAlley is launching soon. Be the first to experience the future
              of smarter workflows.
            </p>
            <p className="md:leading-normal text-[#6B7280]">
              Join thousands of innovators already on the waitlist. Early
              signups get exclusive access + 20% off.
            </p>
            <div className="flex gap-5 text-center">
              {/* Days */}
              <div className="flex flex-col items-center p-4 rounded-lg bg-[#E6F4F1] w-20">
                <span className="text-4xl font-bold text-[#115E59]">
                  {timeLeft.days}
                </span>
                <span className="text-base text-[#115E59] font-medium">
                  days
                </span>
              </div>

              {/* Hours */}
              <div className="flex flex-col items-center p-4 rounded-lg bg-[#E6F4F1] w-20">
                <span className="text-4xl font-bold text-[#115E59]">
                  {timeLeft.hours}
                </span>
                <span className="text-base text-[#115E59] font-medium">
                  hours
                </span>
              </div>

              {/* Minutes */}
              <div className="flex flex-col items-center p-4 rounded-lg bg-[#E6F4F1] w-20">
                <span className="text-4xl font-bold text-[#115E59]">
                  {timeLeft.minutes}
                </span>
                <span className="text-base text-[#115E59] font-medium">
                  min
                </span>
              </div>

              {/* Seconds */}
              <div className="flex flex-col items-center p-4 rounded-lg bg-[#E6F4F1] w-20">
                <span className="text-4xl font-bold text-[#115E59]">
                  {timeLeft.seconds}
                </span>
                <span className="text-base text-[#115E59] font-medium">
                  sec
                </span>
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="relative">
            {/* <Image
              src={bgimg}
              alt="Hand holding mobile phone"
              height={1200}
              className="object-cover"
            /> */}
            <Lottie animationData={roketAnimation} />
          </div>
        </div>
      </section>
      {/* lottie section */}

      {/* popular Category */}
      <PopularService />

      <HowWorks />

      <section className="project_container p-6">
        <h2 className="text-3xl font-bold mb-14">Frequently Asked Questions</h2>
        <div className="space-y-10 ">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b-1  border-black ">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-4 py-3 text-left text-lg font-medium cursor-pointer"
              >
                {faq.question}
                {openIndex === index ? (
                  <FaChevronUp className="text-teal-600 transition-transform duration-300" />
                ) : (
                  <FaChevronDown className="text-teal-600 transition-transform duration-300" />
                )}
              </button>
              <div
                className={`px-4 overflow-hidden transition-all duration-500 ${
                  openIndex === index ? "max-h-40 py-2" : "max-h-0"
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="project_container px-6 py-20 lg:py-28">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left Side */}
          <div className="relative flex-1 flex justify-center">
            <Image
              src={cta_image}
              alt="Call to action"
              className="w-full max-w-lg object-contain"
              priority
            />
            {/* Overlay Text */}
            <div className="absolute inset-0 flex flex-col justify-center lg:items-start items-center px-6 lg:px-12 text-left">
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-snug">
                Start Posting Tasks for <br /> Free
              </p>
              <p className="mt-4 text-sm md:text-base text-gray-100 max-w-md">
                Subscribe today and unlock smarter ways to get work done.
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex-1 flex justify-center w-full">
            <form className="w-full max-w-md">
              <p className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 text-center lg:text-left">
                Subscribe Now
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-100 text-gray-800 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600 transition-all"
                />
                <button
                  type="submit"
                  className="px-6 py-3 text-sm md:text-base font-medium bg-teal-700 hover:bg-teal-800 text-white rounded-md transition-all"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* navbarrrrrrrrrr */}

      <section className="bg-black py-4 mt-20">
        <div className="project_container px-6 flex justify-between">
          <div>
            <Image src={main_logo} alt="main logg" />
          </div>
          <div className="text-white">Copyright 2025 TaskAlley.com</div>
          <div className="flex gap-2">
            <Link href="www.facebook.com">
              <Image src={all_icon} className="w-28" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TaskAlleyLaunch;
