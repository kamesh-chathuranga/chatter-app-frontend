import React from "react";

const ChatContainer = () => {
  return (
    <div className="flex-grow overflow-auto h-[80vh]">
      <div className="flex w-full">
        <div className="flex flex-col justify-end w-full overflow-auto gap-1"></div>
      </div>
    </div>
  );
};

export default ChatContainer;
