import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { FaSearch } from "react-icons/fa";
import { LuVideo } from "react-icons/lu";
import { IoCallOutline } from "react-icons/io5";
import { User } from "@/types/types";
import { UserIcon } from "lucide-react";

interface ChatHeaderProps {
  currentChat: User | null;
}

const ChatHeader = ({ currentChat }: ChatHeaderProps) => {
  return (
    <div className="flex items-center justify-between p-3 h-[10%]">
      <div className="flex items-center gap-x-4">
        <Avatar>
          <AvatarImage src={currentChat?.image ?? undefined} />
          <AvatarFallback>
            <UserIcon />
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <span className="font-semibold ">{currentChat?.name}</span>
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
