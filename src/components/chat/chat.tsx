"use client";

import React, { useEffect, useRef } from "react";

import ChatHeader from "./chat-header";
import MessageBar from "./message-bar";
import ChatContainer from "./chat-container";
import { useStore } from "@/store/store";
import { io, Socket } from "socket.io-client";

const Chat = () => {
  const { currentUser, currentChat, setSocket, setMessage } = useStore();
  const socketRef = useRef<Socket>(null);
  const [isSocketEvent, setIsSocketEvent] = React.useState(false);

  useEffect(() => {
    if (currentUser) {
      socketRef.current = io("http://localhost:7000");
      socketRef.current.emit("addUser", currentUser.id);
      setSocket(socketRef);
    }
  }, [currentUser, setSocket]);

  useEffect(() => {
    if (socketRef.current && !isSocketEvent) {
      socketRef.current.on("received-message", (message) => {
        console.log(message);
        setMessage(message);
      });
      setIsSocketEvent(true);
    }
  }, [isSocketEvent, setMessage]);

  return (
    <div className="flex flex-col h-screen w-full">
      <ChatHeader currentChat={currentChat} />
      <ChatContainer />
      <MessageBar
        curentChat={currentChat}
        currentUser={currentUser}
        socket={socketRef}
        setMessage={setMessage}
      />
    </div>
  );
};

export default Chat;
