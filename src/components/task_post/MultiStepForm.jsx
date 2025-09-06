import React from "react";
import StepTimeline from "./StepTimeline";
import MobileProgressHeader from "./MobileProgressHeader";

const MultiStepForm = ({ 
  children, 
  steps, 
  currentStep,
  showTimelineBorder = false,
  timelineBorderColor = "border-red-500",
  className = ""
}) => (
  <div className={`min-h-screen bg-gray-50 py-4 sm:py-8 ${className}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <MobileProgressHeader steps={steps} currentStep={currentStep} />
      
      <div className="flex gap-8">
        <StepTimeline 
          steps={steps} 
          currentStep={currentStep} 
          showBorder={showTimelineBorder}
          borderColor={timelineBorderColor}
        />
        
        <div className="flex-1 bg-white rounded-lg p-6 sm:p-8">
          {children}
        </div>
      </div>
    </div>
  </div>
);

export default MultiStepForm;
