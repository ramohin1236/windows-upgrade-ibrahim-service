import React from "react";

const MobileProgressHeader = ({ steps, currentStep, className = "" }) => (
  <div className={`lg:hidden bg-white rounded-lg p-4 mb-4 ${className}`}>
    <div className="flex items-center justify-between mb-3">
      <span className="text-sm text-gray-600">Step {currentStep + 1} of {steps.length}</span>
      <span className="text-sm text-gray-500">{Math.round(((currentStep + 1) / steps.length) * 100)}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
      <div 
        className="bg-teal-600 h-2 rounded-full transition-all duration-300"
        style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
      ></div>
    </div>
    <h2 className="text-lg font-semibold text-gray-900">{steps[currentStep].title}</h2>
  </div>
);

export default MobileProgressHeader;
