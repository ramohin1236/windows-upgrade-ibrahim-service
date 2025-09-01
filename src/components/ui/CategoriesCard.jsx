import Image from "next/image";
import React from "react";



const CategoriesCard = ({ 
  icon, 
  title, 
  subtitle, 
  containerStyle = "", 
  titleStyle = "", 
  subtitleStyle = "" 
}) => {
  return (
    <div
      className={`border-2 border-[#115E59] rounded-lg p-4 flex items-center hover:shadow-lg transition transform duration-300 hover:scale-105 cursor-pointer pl-8 py-8 gap-4 ${containerStyle}`}
    >
      {/* Image / Icon */}
      {icon && (
        <div>
          <Image src={icon} alt={title} height={60} width={60} />
        </div>
      )}

      {/* Text section */}
      <div className="flex flex-col gap-2 mt-3">
        <h5 className={`text-[#1F2937] text-2xl font-semibold ${titleStyle}`}>
          {title}
        </h5>
        {subtitle && (
          <p className={`text-[#6B7280] text-xl ${subtitleStyle}`}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  )
}

export default CategoriesCard