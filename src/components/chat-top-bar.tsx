import React from "react";

import { RiChatNewLine } from "react-icons/ri";
import { IoFilterSharp } from "react-icons/io5";
import { Button } from "./ui/button";

const ChatTopBar = () => {
  return (
    <div className="flex items-center justify-between w-full">
      <h1 className="text-3xl font-bold">Chatter</h1>
      <div className="flex items-center ">
        <Button variant="ghost" className="">
          <RiChatNewLine size={22} />
        </Button>
        <Button variant="ghost">
          <IoFilterSharp size={22} />
        </Button>
      </div>
    </div>
  );
};

export default ChatTopBar;
