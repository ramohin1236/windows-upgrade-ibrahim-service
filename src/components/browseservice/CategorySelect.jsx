"use client";
import React, { useState } from "react";

const CategorySelect = () => {
  const [selected, setSelected] = useState("");
  return (
    <div className="w-full max-w-sm">
      

      <select
        id="category"
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        className="w-full px-4 py-2 pr-10 border border-[#6B7280] rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-[#6B7280] focus:border-[#6B7280] text-[#6B7280]
        "
      >
        <option  value="">Category</option>
        <option value="design">Furniture</option>
        <option value="development">Cleaning</option>
        <option value="marketing">Wash</option>
        <option value="writing">Gardening</option>
      </select>
    </div>
  );
};

export default CategorySelect;
