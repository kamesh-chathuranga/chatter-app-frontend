"use client";

import React from "react";
import { ScrollArea } from "../ui/scroll-area";
import UserCard from "./user-card";
import { UserRoundX } from "lucide-react";

const SentRequestCardContainer = () => {
  return (
    <ScrollArea className="h-full pb-14 pt-4">
      <div className="flex flex-wrap gap-4 h-full ">
        {Array.from({ length: 15 }, (_, index) => (
          <UserCard
            key={index}
            name="Kamesh Chathuranga"
            imageUrl="/sample.jpg"
            text="Cancel Request"
            icon={<UserRoundX />}
            onClick={() => console.log("Cancel Request clicked")}
          />
        ))}
      </div>
    </ScrollArea>
  );
};

export default SentRequestCardContainer;
