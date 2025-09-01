import React from "react";

const Heading = ({
  heading,
  text,
  headingStyle,
  textStyle,
  containerStyle,
}) => {
  return (
    <div >
      {/* Heading */}
      <h2 className={`text-4xl font-semibold mb-5 ${headingStyle}`}>{heading}</h2>

      {/* Text */}
      <p className={`text-xl text-[#6B7280] ${textStyle}`}>{text}</p>
    </div>
  );
};

export default Heading;
