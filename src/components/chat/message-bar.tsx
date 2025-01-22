import React from "react";

import { FaRegSmile } from "react-icons/fa";
import { Button } from "../ui/button";
import { GrAttachment } from "react-icons/gr";
import { LuSend } from "react-icons/lu";
import { Input } from "../ui/input";

const MessageBar = () => {
  return (
    <div className="flex items-center p-3 h-[10%] ">
      <Button variant="ghost">
        <FaRegSmile />
      </Button>
      <Button variant="ghost">
        <GrAttachment />
      </Button>
      <Input placeholder="Type a message" />
      <Button variant="ghost">
        <LuSend />
      </Button>
    </div>
  );
};

export default MessageBar;
