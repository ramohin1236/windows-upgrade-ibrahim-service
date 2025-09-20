"use client";
import React, { useState } from "react";
import { Check, GitPullRequest, X } from "lucide-react";
import client from "../../../public/client.png";
import Image from "next/image";

const CancellationStatusComponent = ({ cancellationStatus }) => {
  const [showRejectModal, setShowRejectModal] = useState(false);
  const serviceProvider = true;
    
  const getCancellationContent = () => {
    if (!cancellationStatus) return null;

    switch (cancellationStatus) {
      case "in-progress":
        return {
          statusText: "In Progress",
          statusColor: "text-blue-600",
          button: {
            text: "Cancel The Request",
            color: "bg-[#115e59] hover:bg-teal-700",
          },
          showMarkComplete: true,
        };
      case "accepted":
        return {
          statusText: "Accepted By Service Provider",
          statusColor: "text-green-600",
          button: {
            text: "Request For Refund",
            color: "bg-[#115e59] hover:bg-teal-700",
          },
          showMarkComplete: false,
        };
      case "rejected":
        return {
          statusText: "Rejected By Service Provider",
          statusColor: "text-red-600",
          button: {
            text: "Request Ruling on Dispute",
            color: "bg-[#115E59] ",
          },
          showMarkComplete: true,
          rejectionReason:
            "I request the immediate cancellation of the project due to repeated breaches: poor communication, multiple missed meetings, delays without real progress, and deliverables not meeting agreed standards.",
        };
      default:
        return null;
    }
  };

  const cancellationContent = getCancellationContent();

  if (!cancellationContent) return null;

  return (
    <>
      {/* Cancellation Status Section */}
      <div className="bg-[#E6F4F1] rounded-lg p-6 mb-6">
        <div className="flex items-start gap-3 mb-4">
          <div className="bg-white rounded-full p-2 hidden lg:block">
            <GitPullRequest className="w-5 h-5 text-[#115E59]" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              You Requested To Cancel The Task Via Resolution Center
            </h3>

            {/* Requested By Section */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 justify-between mb-6">
              <div className="flex flex-col md:flex-row md:items-center ">
                <div className="w-16 h-16">
                  <Image src={client} alt="client" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Requested By</p>
                  <p className="text-gray-600 text-sm">Me</p>
                </div>
              </div>
              <p className="text-gray-500 text-sm">15 May 2020 8:00 am</p>
            </div>

            {/* Cancellation Reason */}
            <div className="mb-6">
              <h4 className="font-medium text-gray-900 mb-2">
                Cancellation Reason
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                I request the immediate cancellation of the project due to
                repeated breaches: poor communication, multiple missed meetings,
                delays without real progress, and deliverables not meeting
                agreed standards. I request a full refund and preservation of
                all evidence in accordance with Fiverr's Terms of Service,
                Article 5.3.
              </p>
            </div>

            {/* Status Section */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 justify-between mb-6">
              <div className="flex flex-col md:flex-row md:items-center gap-2">
                <div className="w-6 h-6 bg-[#115E59] rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">
                    Cancellation Status
                  </p>
                  <p className={`text-sm ${cancellationContent.statusColor}`}>
                    {cancellationContent.statusText}
                  </p>
                </div>
              </div>
              <p className="text-gray-500 text-sm">15 May 2020 8:00 am</p>
            </div>

            {/* Rejection Reason */}
            {cancellationStatus === "rejected" &&
              cancellationContent.rejectionReason && (
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-2">
                    Reason For Rejection :
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {cancellationContent.rejectionReason}
                  </p>
                </div>
              )}

            {/* Action Button */}
            <button className="px-6 mr-4 py-2.5 bg-[#115E59] hover:bg-teal-700 text-white rounded-md transition-colors font-medium cursor-pointer">
              {cancellationContent.button.text}
            </button>

            {serviceProvider && (
              <button
                onClick={() => setShowRejectModal(true)}
                className="px-6 mt-3 md:mt-0 py-2.5 bg-[#115E59] hover:bg-teal-700 text-white rounded-md transition-colors font-medium cursor-pointer"
              >
                Reject the request
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      {showRejectModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full mx-4 p-6 relative">
            {/* Close button */}
            <button
              onClick={() => setShowRejectModal(false)}
              className="absolute top-3 right-3 text-red-500 hover:text-red-700 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Reject Cancellation Request
            </h3>

            {/* Textarea */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Reason for Rejection
              </label>
              <textarea
                className="w-full border rounded-md p-2 text-sm focus:ring-2 focus:ring-[#115e59] focus:outline-none"
                rows="4"
                placeholder="Please explain why you are rejecting this cancellation request."
              />
            </div>
            {/* File Upload */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Evidence (Optional)
              </label>
              <label
                htmlFor="evidence"
                className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-gray-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-gray-400 mb-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 010 10h-1m-4-4v6m0 0l-2-2m2 2l2-2"
                  />
                </svg>
                <p className="text-sm text-gray-500">
                  Click to upload document
                </p>
                <input
                  id="evidence"
                  type="file"
                  className="hidden"
                  onChange={(e) => {
                    if (e.target.files.length > 0) {
                      alert(`File selected: ${e.target.files[0].name}`);
                    }
                  }}
                />
              </label>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowRejectModal(false)}
                className="px-6 py-2.5 border border-gray-300
                cursor-pointer text-gray-700 rounded-md hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                className="px-6 py-2.5 bg-[#115E59] text-white rounded-md
              cursor-pointer hover:bg-teal-700"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CancellationStatusComponent;
