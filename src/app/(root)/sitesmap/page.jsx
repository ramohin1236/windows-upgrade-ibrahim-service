"use client";

import React from "react";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import contact_man from "../../../../public/contact_man.svg";
import Image from "next/image";

const SitesMap = () => {
  const navigationItems = {
    all_users: [
      { name: "Home", path: "/" },
      { name: "Categories", path: "/categories" },
      { name: "Browse Tasks", path: "/browseservice" },
      { name: "Browse Service", path: "/service-listing" },
      { name: "Contact / Help", path: "/contact" },
      { name: "About Us", path: "/about" },
      { name: "Privacy Policy", path: "/privacy" },
      { name: "Terms of conditions", path: "/terms" },
    ],
    auth: [
      { name: "Login", path: "/login" },
      { name: "Sign Up", path: "/register" },
    ],
    service_provider: [
      { name: "Browse Tasks", path: "/service_tast_status" },
      { name: "My Service", path: "/list_my_service" },
      { name: "Post A Task", path: "/login" },
    ],
    task_provider: [
      { name: "Browse Tasks", path: "/service_tast_status" },
      { name: "My Service", path: "/list_my_service" },
      { name: "Post A Task", path: "/login" },
      { name: "My Tasks", path: "/my_task" },
      { name: "Messages", path: "/chat" },
      { name: "My Profile", path: "/profile_info" },
      { name: "Logout", path: "/logout" },
    ],
  };

  const Section = ({ title, items }) => (
    <div className="mb-8">
      <h4 className="text-lg font-semibold mb-3 text-gray-800">{title}</h4>
      <ul className="list-disc pl-6 space-y-2">
        {items.map((item, index) => (
          <li key={index} className="leading-relaxed">
            <Link
              href={item.path}
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section className="flex flex-col min-h-screen mb-20">
      {/* Hero Section */}
      <div className="bg-[#e6f4f1] mb-8 lg:mb-20">
        <div>
          <div className="project_container flex flex-col gap-8 lg:flex-row justify-between items-center">
            {/* left side */}
            <div className="flex flex-col pt-10 lg:pt-0">
              <h3 className="text-2xl lg:text-4xl font-semibold mb-5">
                Sitemap
              </h3>
              <div>
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink
                        href="/"
                        className="font-semibold lg:text-base"
                      >
                        Home
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator className="text-base" />
                    <BreadcrumbItem>
                      <BreadcrumbPage className="text-[#0EA5E9] font-semibold lg:text-base">
                        Sitemap
                      </BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
            </div>
            {/* right side */}
            <div>
              <Image
                src={contact_man}
                alt="hero contact image"
                className="lg:h-96 pr-24 lg:pr-0"
              />
            </div>
          </div>
        </div>
      </div>

      {/* List Sections */}
      <section className="project_container mx-auto px-6 lg:px-20 py-6 bg-white shadow-sm rounded-lg w-full max-w-3xl">
        <Section title="All Users" items={navigationItems.all_users} />
        <Section title="Register / Auth" items={navigationItems.auth} />
        <Section title="Service Provider" items={navigationItems.service_provider} />
        <Section title="Task Provider" items={navigationItems.task_provider} />
      </section>
    </section>
  );
};

export default SitesMap;
