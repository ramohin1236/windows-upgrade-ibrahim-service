"use client";

import { Calendar, Ban } from "lucide-react";
import Link from "next/link";
import popularcateIcon from "../../../../public/popularcate.svg";
import Image from "next/image";

const Resolution = () => {
  const options = [
    {
      title: "Ask Service Provider to Change Completion Date",
      icon: <Calendar className="w-6 h-6 text-color" />,
      href: "/change-completion-date",
    },
    {
      title: "Request Cancellation",
      icon: <Ban className="w-6 h-6 text-color" />,
      href: "/request-cancellation",
    },
  ];
  return (
    <div className="project_container py-72 p-6">
      <div className="mb-6">
        <div className="flex items-center gap-4 ">
          <Image
            src={popularcateIcon}
            alt="Popular Category "
            height={24}
            width={24}
          />
          <p className="font-semibold text-md md:text-xl text-color pb-3">
            My Tasks
          </p>
        </div>
      </div>

      <div className="space-y-12">
        {options.map((option, idx) => (
          <Link
            key={idx}
            href={option.href}
            className="flex items-center justify-between bg-[#E6F4F1] p-4 rounded-lg shadow-sm"
          >
            <div className="flex items-center gap-3">
              {option.icon}
              <span className="text-[#6B7280] text-md font-medium">{option.title}</span>
            </div>
            <span className="text-color text-2xl">{">"}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Resolution;
