"use client";
import Home from "@/app/page";
import { FileClock, HomeIcon, Settings, WalletCards } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import UsageTrack from "./UsageTrack";
import Link from "next/link";

function SideNav() {
  const MenuList = [
    {
      name: "Home",
      icon: HomeIcon,
      path: "/dashboard",
    },
    {
      name: "History",
      icon: FileClock,
      path: "/dashboard/history",
    },
    {
      name: "Billing",
      icon: WalletCards,
      path: "/dashboard/billing",
    },
    {
      name: "Settings",
      icon: Settings,
      path: "/dashboard/setting",
    },
  ];

  const path = usePathname();

  return (
    <div className="h-screen relative p-5 shadow-sm border bg-white">
      <Link href={"/"}>
        <div className="flex justify-center items-center">
          <Image src={"/logo.svg"} width={60} height={60} alt="logo" />
          <h1 className="font-bold text-lg">Code Craft AI</h1>
        </div>
      </Link>

      <hr className="my-6 border" />

      <div className="mt-10">
        {MenuList.map((menu, index) => (
          <Link key={index} href={menu.path}>
            <div
              key={index}
              className={`flex gap-2 mb-2 cursor-pointer p-3 hover:bg-primary hover:text-white rounded-lg ${
                path == menu.path && "bg-primary text-white"
              }`}
            >
              <menu.icon className="h-6 w-6" />
              <h2 className="text-lg">{menu.name}</h2>
            </div>
          </Link>
        ))}
      </div>

      <div className="absolute bottom-10 left-0 w-full">
        <UsageTrack />
      </div>
    </div>
  );
}

export default SideNav;
