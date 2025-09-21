import Link from "next/link";
import React from "react";

const TaskAlleyOrganization = () => {
  return (
    <div className="bg-blue-300 min-h-screen flex gap-16 pt-8">
        <p className="text-4xl font-semibold text-white py-12 px-12">Login</p>
        <Link className="border-2 h-12 flex items-center px-3" href='/'>Login</Link>
        <Link className="border-2 h-12 flex items-center px-3" href='/categories'>Register</Link>
        <Link className="border-2 h-12 flex items-center px-3" href='/categories'>Catertgories</Link>
        <Link className="border-2 h-12 flex items-center px-3" href='/categories'>Browser</Link>
    </div>

  );
};

export default TaskAlleyOrganization;
