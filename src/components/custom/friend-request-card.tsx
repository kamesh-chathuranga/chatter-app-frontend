"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface FriendRequestCardProps {
  name: string;
  imageUrl: string;
}

const FriendRequestCard: React.FC<FriendRequestCardProps> = ({
  name,
  imageUrl,
}) => {
  return (
    <Card className="w-80 shadow-md rounded-lg h-fit">
      <CardHeader className="flex flex-row gap-4 items-center">
        <Avatar className="w-12 h-12">
          <AvatarImage src={imageUrl} alt={name} className="object-cover" />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="text-sm font-semibold">{name}</h3>
          {/* <p className="text-xs text-gray-500">{mutualFriends} mutual friends</p> */}
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2">
          <Button
            className="flex-1 bg-blue-600 hover:bg-blue-700"
            onClick={() => {}}
          >
            Confirm
          </Button>
          <Button
            className="flex-1 bg-gray-200 text-gray-700 hover:bg-gray-300"
            onClick={() => {}}
          >
            Delete
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default FriendRequestCard;
