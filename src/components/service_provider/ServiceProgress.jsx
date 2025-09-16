import React from "react";
import TaskInfoSection from "../my_tasks/TaskInfoSection";
import TaskDetailsSection from "../my_tasks/TaskDetailsSection";
import PricingSection from "../my_tasks/PricingSection";
import ProgressBarComponent from "../my_tasks/ProgressBarComponent";
import CancellationStatusComponent from "../my_tasks/CancellationStatusComponent";
import DateExtensionRequestSection from "../my_tasks/DateExtensionRequestSection";


// cancellationStatus should be

// cancellationStatus = "in-progress"
// cancellationStatus = "accepted"
// cancellationStatus = "rejected"
// cancellationStatus = null

const ServiceProgress = ({
  cancellationStatus = null,
  extensionStatus = null
}) => {
  const steps = [
    { id: 1, label: "Offered", date: "Feb 21, 2023", completed: true },
    { id: 2, label: "In Progress", date: "Feb 21, 2023", completed: true },
    { id: 3, label: "Completed on", date: "", completed: false },
  ];

  return (
    <div className="flex flex-col gap-12 ">
      {/* Task Info Section */}
      <TaskInfoSection />

      {/* Task Details Section */}
      <TaskDetailsSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* Progress Bar */}
      <ProgressBarComponent steps={steps} progressWidth="50%" />

      {/* Cancellation Status Section (conditional) */}
      <div>
        <CancellationStatusComponent cancellationStatus={cancellationStatus} />
        <DateExtensionRequestSection extensionStatus={extensionStatus} />
      </div>
      
    </div>
  );
};

export default ServiceProgress;
