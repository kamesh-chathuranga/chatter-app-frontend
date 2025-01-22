import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { auth } from "@/auth";

const SideBar = async () => {
  const session = await auth();
    console.log(session);
    
  return (
    <div className="flex flex-col h-full items-center justify-between w-16 bg-slate-400">
      <div className="flex flex-col">
        <span className="font-semibold">1</span>
      </div>
      <div className="flex flex-col gap-y-3">
        <Avatar>
          <AvatarImage src={session?.user?.image as string} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default SideBar;
