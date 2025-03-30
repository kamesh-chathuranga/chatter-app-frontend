"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useStore } from "@/store/store";
import { signOut } from "next-auth/react";
import { Button } from "./ui/button";
import { DEFAULT_SIGNOUT_REDIRECT } from "@/routes";
import { revalidatePath } from "next/cache";

const SideBar = () => {
  const { currentUser } = useStore();

  const handleLogout = async () => {
    try {
      await signOut();
      revalidatePath(DEFAULT_SIGNOUT_REDIRECT);
    } catch (e) {
      console.log("Error signing out", e);
    }
  };

  return (
    <div className="flex flex-col h-full items-center justify-between w-16 bg-slate-400">
      <div className="flex flex-col">
        <span className="font-semibold">1</span>
      </div>
      <div className="flex flex-col gap-y-3">
        <Button onClick={handleLogout}>Logout</Button>
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
