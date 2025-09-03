"use client";
import React, { useState } from "react";

const PriceRange = () => {
    const [selected, setSelected] = useState("");
  return (
   <div className="w-full max-w-sm">
      

      <select
        id="price_range"
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        className="w-full px-4 py-2 pr-10 border border-[#6B7280] rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-[#6B7280] focus:border-[#6B7280] text-[#6B7280]
        "
      >
        <option  value="">Price Range</option>
        <option value="design">Low to High</option>
        <option value="development">Hight To Low</option>
      </select>
    </div>
  )
}

export default PriceRange