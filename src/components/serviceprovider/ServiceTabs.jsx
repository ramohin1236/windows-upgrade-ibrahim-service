"use client";
import React, { useState } from "react";
import { Star } from "lucide-react";

const ServiceTabs = () => {
  const [activeTab, setActiveTab] = useState("Description");
  return (
    <div>
      {/* Tabs */}
      <div className="flex gap-4 border-b border-gray-200 mb-6">
        {["Description", "Reviews"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 font-medium border-b-2 transition-colors ${
              activeTab === tab
                ? "border-green-600 text-green-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === "Description" && (
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Description :-
          </h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            —Delivering professional, reliable, and efficient service in your
            area, this provider brings a strong reputation and years of
            experience. Whether it's home maintenance, repairs, or skilled
            labor, you'll benefit from clean execution, attention to detail, and
            a commitment to customer satisfaction.
          </p>

          {/* Service Details */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
              📋 Service Details
            </h4>
            <div className="space-y-2 text-sm text-gray-600">
              <div>
                <span className="font-medium">Category:</span> Home Cleaning &
                Maintenance
              </div>
              <div>
                <span className="font-medium">Experience:</span> 5+ Years
              </div>
              <div>
                <span className="font-medium">Location:</span> Manhattan, New
                York
              </div>
              <div>
                <span className="font-medium">Availability:</span> 7 Days a Week
              </div>
              <div>
                <span className="font-medium">On-Site Support:</span> Yes
              </div>
              <div>
                <span className="font-medium">Tools Provided:</span> Yes
              </div>
              <div>
                <span className="font-medium">Certified & Verified:</span> ✅
              </div>
              <div>
                <span className="font-medium">Customer Rating:</span> ⭐ 4.8
                (350+ Reviews)
              </div>
              <div>
                <span className="font-medium">Languages Spoken:</span> English,
                Spanish
              </div>
              <div>
                <span className="font-medium">Price Range:</span> Starting from
                ₦50
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "Reviews" && (
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Customer Reviews
          </h3>
          <div className="space-y-4">
            {[1, 2, 3].map((review) => (
              <div key={review} className="border-b border-gray-200 pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">2 days ago</span>
                </div>
                <p className="text-gray-700 text-sm">
                  Excellent service! Very professional and thorough cleaning.
                  Highly recommended.
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceTabs;
