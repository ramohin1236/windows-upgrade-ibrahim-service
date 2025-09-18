"use client";

import React, { useState } from "react";
import {
  Home,
  Search,
  User,
  Settings,
  MapPin,
  MessageSquare,
  Bell,
  CreditCard,
  Star,
  Calendar,
  Briefcase,
  Users,
  FileText,
  Shield,
  HelpCircle,
  LogOut,
  ChevronRight,
} from "lucide-react";
import contact_man from "../../../../public/contact_man.svg";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";
import Link from "next/link";

const SitesMap = () => {
  const currentRole = "task_provider"; // Change to: 'guest', 'service_provider', 'task_provider'

  const [expandedSections, setExpandedSections] = useState({});

  const navigationItems = {
    // Common items (visible to all roles)
    common: [
      { name: "Home", icon: Home, path: "/" },
      { name: "Categories", icon: Search, path: "/categories" },
      { name: "Browse Tasks", icon: MapPin, path: "/browseservice" },
      { name: "Browse Service", icon: HelpCircle, path: "/service-listing" },
      { name: "Contact / Help", icon: HelpCircle, path: "/contact" },
      { name: "About Us", icon: HelpCircle, path: "/about" },
      { name: "Privacy Policy", icon: HelpCircle, path: "/privacy" },
      { name: "Terms of conditions", icon: HelpCircle, path: "/terms" },
    ],

    // Guest specific items
    guest: [
      { name: "Login", icon: User, path: "/login" },
      { name: "Sign Up", icon: Users, path: "/register" },
    ],

    // Service Provider specific items
    service_provider: [
      { name: "Browse Tasks", icon: User, path: "/service_tast_status" },
      { name: "My Service", icon: Briefcase, path: "/list_my_service" },
      { name: "Post A Task", icon: Calendar, path: "/login" },
    ],

    // Task Provider specific items
    task_provider: [
      { name: "Browse Tasks", icon: Bell, path: "/service_tast_status" },
      { name: "My Service", icon: Settings, path: "/list_my_service" },
      { name: "Post A Task", icon: Shield, path: "/login" },

      { name: "My Tasks", icon: FileText, path: "/my_task" },
      { name: "Messages", icon: MessageSquare, path: "/chat" },
      { name: "My Profile", icon: User, path: "/profile_info" },
      { name: "Logout", icon: LogOut, path: "/logout" },
    ],
  };

  const getRoleName = () => {
    const roleNames = {
      guest: "Guest User",
      service_provider: "Service Provider",
      task_provider: "Task Provider",
    };
    return roleNames[currentRole] || "Unknown Role";
  };

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const MenuItem = ({ item, isLast = false }) => {
    console.log("item", item);
    const IconComponent = item.icon;
    return (
      <Link
        href={item.path}
        className={`flex items-center justify-between p-4 hover:bg-gray-50 cursor-pointer transition-colors ${
          !isLast ? "border-b border-gray-100" : ""
        }`}
      >
        <div className="flex items-center gap-3">
          <div
            className="p-2 rounded-lg"
            style={{ backgroundColor: "rgba(17, 94, 89, 0.1)" }}
          >
            <IconComponent className="w-5 h-5" style={{ color: "#115E59" }} />
          </div>
          <div>
            <h4 className="font-medium text-gray-900">{item.name}</h4>
            <p className="text-sm text-gray-500">{item.path}</p>
          </div>
        </div>
        <ChevronRight className="w-4 h-4 text-gray-400" />
      </Link>
    );
  };

  const Section = ({ title, items, sectionKey, isExpanded = true }) => {
    const isExpandedState =
      expandedSections[sectionKey] !== undefined
        ? expandedSections[sectionKey]
        : isExpanded;

    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6">
        {isExpandedState && (
          <div className="divide-y divide-gray-100">
            {items.map((item, index) => (
              <MenuItem
                key={`${sectionKey}-${index}`}
                item={item}
                isLast={index === items.length - 1}
              />
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="mb-16">
      {/* Hero Section */}
      <div className="bg-[#e6f4f1] mb-8 lg:mb-20">
        <div>
          <div className=" project_container flex flex-col gap-8 lg:flex-row justify-between items-center ">
            {/* left side */}
            <div className="flex flex-col pt-10 lg:pt-0">
              <h3 className="text-2xl lg:text-4xl font-semibold mb-5">
                Sitemap
              </h3>
              <div>
                <Breadcrumb>
                  <BreadcrumbList>
                    {/* Home link */}
                    <BreadcrumbItem>
                      <BreadcrumbLink
                        href="/"
                        className="
                    font-semibold lg:text-base"
                      >
                        Home
                      </BreadcrumbLink>
                    </BreadcrumbItem>

                    {/* Separator */}
                    <BreadcrumbSeparator className="text-base" />

                    {/* Current page */}
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
                className="lg:h-96 
              pr-24 lg:pr-0 "
              />
            </div>
          </div>
        </div>
      </div>

      <section className="project_container ">
        {/* Content */}
        <div className="flex flex-col px-4 lg:px-2 lg:flex-row gap-20">
          <div className="flex-1">
            {/* Common Items */}
            <Section
              title="Common Navigation"
              items={navigationItems.common}
              sectionKey="common"
              isExpanded={true}
            />
          </div>

          <div className="flex-1">
            {/* Role Specific Items */}
            {currentRole === "guest" && (
              <Section
                title="Authentication"
                items={navigationItems.guest}
                sectionKey="guest"
                isExpanded={true}
              />
            )}

            {currentRole === "service_provider" && (
              <Section
                title="Service Provider Dashboard"
                items={navigationItems.service_provider}
                sectionKey="service_provider"
                isExpanded={true}
              />
            )}

            {currentRole === "task_provider" && (
              <Section
                title="Task Provider Dashboard"
                items={navigationItems.task_provider}
                sectionKey="task_provider"
                isExpanded={true}
              />
            )}
          </div>
        </div>
      </section>
    </section>
  );
};

export default SitesMap;
