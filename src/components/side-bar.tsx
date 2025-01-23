"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useStore } from "@/store/store";

const SideBar = () => {
  const { currentUser } = useStore();

  return (
    <div className="flex flex-col h-full items-center justify-between w-16 bg-slate-400">
      <div className="flex flex-col">
        <span className="font-semibold">1</span>
      </div>
      <div className="flex flex-col gap-y-3">
        <Avatar>
          <AvatarImage
            src={currentUser?.image || "images/default-avatar.png"}
          />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default SideBar;
