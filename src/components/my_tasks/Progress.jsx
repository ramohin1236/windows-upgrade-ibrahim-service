import React from "react";
import TaskInfoSection from "./TaskInfoSection";
import TaskDetailsSection from "./TaskDetailsSection";
import PricingSection from "./PricingSection";
import ProgressBarComponent from "./ProgressBarComponent";
import CancellationStatusComponent from "./CancellationStatusComponent";
import DateExtensionRequestSection from "./DateExtensionRequestSection";


// cancellationStatus should be

// cancellationStatus = "in-progress"
// cancellationStatus = "accepted"
// cancellationStatus = "rejected"
// cancellationStatus = null




const Progress = ({ cancellationStatus = null, extensionStatus= null }) => {
  const steps = [
    { id: 1, label: "Offered", date: "Feb 21, 2023", completed: true },
    { id: 2, label: "In Progress", date: "Feb 21, 2023", completed: true },
    { id: 3, label: "Completed on", date: "", completed: false },
  ];

  return (
    <div className="flex flex-col gap-12 pb-20">
      {/* Task Info Section */}
      <TaskInfoSection />

      {/* Task Details Section */}
      <TaskDetailsSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* Progress Bar */}
      <ProgressBarComponent steps={steps} progressWidth="66.67%" />

      {/* Cancellation Status Section (conditional) */}
      <CancellationStatusComponent cancellationStatus={cancellationStatus} />
      <DateExtensionRequestSection  extensionStatus={extensionStatus}/>
    </div>
  );
};

export default Progress;