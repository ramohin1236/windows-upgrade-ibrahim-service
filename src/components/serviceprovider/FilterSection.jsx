
import {  ChevronDown, ChevronUp } from "lucide-react";

const FilterSection = ({ title, children, isOpen, onToggle }) => {
  return (
    <div className="mb-6">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full text-left font-medium text-gray-900 mb-3"
      >
        {title}
        {isOpen ? (
          <ChevronUp className="w-4 h-4" />
        ) : (
          <ChevronDown className="w-4 h-4" />
        )}
      </button>
      {isOpen && children}
    </div>
  );
};

export default FilterSection;
