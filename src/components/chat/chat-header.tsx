import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { FaSearch } from "react-icons/fa";
import { LuVideo } from "react-icons/lu";
import { IoCallOutline } from "react-icons/io5";

const ChatHeader = () => {
  return (
    <div className="flex items-center justify-between p-3 h-[10%]">
      <div className="flex items-center gap-x-4">
        <Avatar>
          <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi7HpQ-_PMSMOFrj1hwjp6LDcI-jm3Ro0Xw&s" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="font-semibold ">Kamesh</span>
          <span className="text-sm text-emerald-500">online</span>
        </div>
      </div>

      <div className="flex items-center gap-x-1">
        <div className="bg-muted/30">
          <Button variant="ghost">
            <LuVideo />
          </Button>
          <Button variant="ghost">
            <IoCallOutline />
          </Button>
        </div>
        <Button variant="ghost">
          <FaSearch />
        </Button>
      </div>
    </div>
  );
};

export default ChatHeader;
