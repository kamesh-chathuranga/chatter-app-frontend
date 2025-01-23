"use client";

import React, { Fragment } from "react";

import { useStore } from "@/store/store";
import Chat from "./chat";
import EmptyChat from "./empty-chat";

const RightSidePanel = () => {
  const { currentChat } = useStore();

  return <Fragment>{currentChat ? <Chat /> : <EmptyChat />}</Fragment>;
};

export default RightSidePanel;
