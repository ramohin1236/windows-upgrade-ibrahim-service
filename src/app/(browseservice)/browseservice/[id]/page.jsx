"use client";
import React, { useState } from "react";
import {
  ChevronLeft,
  MapPin,
  Calendar,
  Star,
  Send,
  RotateCcw,
} from "lucide-react";
import client from "../../../../../public/client.png";
import Image from "next/image";

const ServiceDetails = ({ params }) => {
  const [statusTab, setStatusTab] = useState("open");
  const [contentTab, setContentTab] = useState("Bids");
  const [newQuestion, setNewQuestion] = useState("");

  const taskData = {
    title: "Help move a couch",
    poster: { name: "Marvin Foy" },
    location: "New York, USA",
    dueDate: "15 May 2020 8:00 am",
    budget: "24.00",
    description:
      "I have some furniture that was sold on online but maybe help from 2 specific shows. They need to be sent out to you in the US and then forwarded to me in sydney it l package for convenience, for more information please direct message me! thx!! Paid",
  };

  const reviews = [
    {
      user: "Grace Carey",
      rating: "4.5",
      reviewCount: "148",
      review:
        "I was a bit nervous to be buying a secondhand phone from Amazon, but I couldn't be happier with my purchase!! I have a pre-paid data plan so I was worried that this phone wouldn't connect with my data plan, since the new phone would have the physical sim tray anymore.",
      timeAgo: "2 hours ago",
    },
    {
      user: "Ronald Richards",
      rating: "4.5",
      reviewCount: "148",
      review:
        "This phone has 1T storage and is durable. Plus all the new iPhones have a C port! Apple is phasing out the current ones! (All about the benjamins!) So if you want a phone that's going to last grab an iPhone 14 pro max and get several cords and a plug.",
      timeAgo: "3 hours ago",
    },
    {
      user: "Darcy King",
      rating: "4.5",
      reviewCount: "148",
      review:
        "I might be the only one to say this but the camera is a little funky. Hoping it will change with a software update, otherwise, love this phone! Come in great condition",
      timeAgo: "5 hours ago",
    },
  ];

  const statusTabs = [
    {
      id: "open",
      label: "Open for bids",
      color: "bg-orange-100 text-orange-600",
    },
    {
      id: "progress",
      label: "In Progress",
      color: "bg-blue-100 text-blue-600",
    },
    {
      id: "completed",
      label: "Completed",
      color: "bg-green-100 text-green-600",
    },
  ];

  const contentTabs = ["Bids", "Questions"];

  const handleQuestionSubmit = () => {
    if (newQuestion.trim()) {
      console.log("New question:", newQuestion);
      setNewQuestion("");
    }
  };
  return (
    <div className=" bg-gray-50">
      {/* Header */}
      <div className="flex items-center gap-3 p-4 bg-white border-b border-gray-200">
        <button className="p-1 hover:bg-gray-100 rounded-lg transition-colors">
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>
        <span className="text-sm text-teal-600 font-medium">Back To Map</span>
      </div>

      {/* Status Tabs */}
      <div className="flex gap-2 p-4 bg-white">
        {statusTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setStatusTab(tab.id)}
            className={`px-3 py-2 rounded-full text-xs font-medium transition-colors ${
              statusTab === tab.id
                ? tab.color
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Task Header */}
      <div className="p-4 bg-white">
        <h1 className="text-xl font-semibold text-gray-900 mb-4">
          {taskData.title}
        </h1>

        <div className="flex items-center gap-3 mb-3">
          <Image
            src={client}
            alt={taskData.poster.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="text-xs text-gray-500">Posted by</p>
            <p className="text-sm font-medium text-gray-900">
              {taskData.poster.name}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 flex items-center justify-center bg-[#E6F4F1] rounded-full">
            <MapPin className="w-4 h-4 text-[#115E59]" />
          </div>
          <div>
            <p className="text-xs text-gray-500">Location</p>
            <p className="text-sm text-gray-900">{taskData.location}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 flex items-center justify-center bg-[#E6F4F1] rounded-full">
            <Calendar className="w-4 h-4 text-[#115E59]" />
          </div>
          <div>
            <p className="text-xs text-gray-500">To Be Done On</p>
            <p className="text-sm text-gray-900">{taskData.dueDate}</p>
          </div>
        </div>

        {/* Task Description */}
        <div className="p-4 bg-white border-b pb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Details</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            {taskData.description}
          </p>
        </div>

        <div className="flex justify-between items-center border-b pb-8">
          <div className="mb-4 pt-8">
            <p className="text-sm font-medium text-gray-900 mb-1">
              Task budget
            </p>
            <p className="text-2xl font-bold text-gray-900">
              ₦{taskData.budget}
            </p>
          </div>

          <div>
            <button className="w-full bg-[#115E59] cursor-pointer text-white py-3 px-8 rounded-sm font-medium transition-colors">
              Submit A Bid
            </button>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex bg-white border-b border-gray-200">
        {contentTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setContentTab(tab)}
            className={`flex-1 py-3 px-4 text-sm font-medium transition-colors ${
              contentTab === tab
                ? "text-white bg-[#115E59] cursor-pointer"
                : "text-gray-600 hover:text-gray-900 cursor-pointer"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content Area */}
      {contentTab === "Bids" ? (
        <div>
          {/* Bids List */}
          {reviews.map((review, index) => (
            <div
              key={index}
              className="flex gap-3 p-4 bg-white border-b border-gray-100"
            >
              <Image
                src={client}
                alt={review.user}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-gray-900">{review.user}</h3>
                  <span className="text-xs text-gray-400">
                    {review.timeAgo}
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium text-gray-900">
                      {review.rating}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500">
                    ({review.reviewCount} Reviews)
                  </span>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {review.review}
                </p>
              </div>
            </div>
          ))}

          {/* View More Button */}
          <div className="p-4 bg-white">
            <button className="w-full bg-[#115E59] cursor-pointer text-white py-3 px-4 rounded-lg font-medium transition-colors">
              View More
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white">
          {/* Ask Question Form */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex gap-3">
               <Image
                src={client}
                alt="client"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="flex-1">
                <textarea
                  value={newQuestion}
                  onChange={(e) => setNewQuestion(e.target.value)}
                  placeholder="Ask a question"
                  className="w-full p-3 border border-gray-200 rounded-lg resize-none focus:ring-2 focus:ring-[#115E59] focus:border-transparent"
                  rows="3"
                />
                <div className="flex justify-end items-center mt-3">
             
                  <button
                    onClick={handleQuestionSubmit}
                    className="bg-[#115E59] text-white px-4 py-2 rounded-sm font-medium cursor-pointer transition-colors"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Questions List */}
          <div>
            {reviews.map((question, index) => (
              <div
                key={index}
                className="flex gap-3 p-4 bg-white border-b border-gray-100"
              >
                <Image
                src={client}
                alt={question.user}
                className="w-16 h-16 rounded-full object-cover"
              />
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-gray-900">
                      {question.user}
                    </h3>
                    <span className="text-xs text-gray-400">
                      {question.timeAgo}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium text-gray-900">
                        {question.rating}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500">
                      ({question.reviewCount} Reviews)
                    </span>
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {question.review}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button for Questions */}
          <div className="p-4 bg-white">
            <button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 px-4 rounded-lg font-medium transition-colors">
              View More
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceDetails;
