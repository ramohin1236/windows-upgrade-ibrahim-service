"use client";
import React, { useState } from "react";

const Location = () => {
      const [selected, setSelected] = useState("");
  return (
    <div className="w-full max-w-sm">
      

      <select
        id="location"
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        className="w-full px-4 py-2 pr-10 border border-[#6B7280] rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-[#6B7280] focus:border-[#6B7280] text-[#6B7280]
        "
      >
        <option  value="">Location</option>
        <option value="design">USA</option>
        <option value="development">Canada</option>
        <option value="marketing">Engladn</option>
        <option value="writing">Mosco</option>
      </select>
    </div>
  )
}

export default Location