import React from "react";
import FriendRequestCard from "./friend-request-card";
import { ScrollArea } from "../ui/scroll-area";

const FriendRequestCardContainer = () => {
  return (
    <ScrollArea className="h-full pb-14 pt-4">
      <div className="flex flex-wrap gap-4 h-full ">
        {Array.from({ length: 15 }, (_, index) => (
          <FriendRequestCard
            key={index}
            name="Kamesh Chathuranga"
            imageUrl="/sample.jpg"
          />
        ))}
      </div>
    </ScrollArea>
  );
};

export default FriendRequestCardContainer;
