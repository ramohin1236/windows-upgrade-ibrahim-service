import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";

const DateNavigation = ({ currentPeriod, onPrevious, onNext, activeTab }) => {

  const formatPeriod = () => {
    switch (activeTab) {
      case "daily":
        return currentPeriod;
      case "weekly":
        return `Week ${currentPeriod}`;
      case "monthly":
        return currentPeriod;
      case "yearly":
        return currentPeriod;
      case "lifetime":
        return "Lifetime";
      default:
        return currentPeriod;
    }
  };
  

  return (
    <div className="flex items-center justify-center mb-6">
      <button
        onClick={onPrevious}
        disabled={activeTab === "lifetime"}
        className="p-2 bg-teal-600 hover:bg-teal-700 disabled:bg-gray-300 text-white rounded-l-md transition-colors"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      <div className="px-4 sm:px-6 py-2 bg-teal-600 text-white font-medium text-center min-w-[120px] sm:min-w-[150px]">
        <span className="text-sm sm:text-base">{formatPeriod()}</span>
      </div>

      <button
        onClick={onNext}
        disabled={activeTab === "lifetime"}
        className="p-2 bg-[#115e59] hover:bg-teal-700 disabled:bg-gray-300 text-white rounded-r-md transition-colors"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export default DateNavigation;
