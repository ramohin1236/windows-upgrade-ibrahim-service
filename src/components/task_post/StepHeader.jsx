import React from "react";

const StepHeader = ({ icon: Icon, title, className = "" }) => (
  <div className={`flex items-center gap-3 mb-6 ${className}`}>
    <Icon className="w-6 h-6 text-teal-600" />
    <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">{title}</h1>
  </div>
);

export default StepHeader;
