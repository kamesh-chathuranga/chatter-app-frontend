import React from "react";

import { Message, User } from "@/types/types";
import { Socket } from "socket.io-client";
import { create } from "zustand";

interface Store {
  currentUser: User | null;
  contactList: User[];
  currentChat: User | null;
  messages: Message[];
  socket: React.RefObject<Socket | null>;
  setCurrentUser: (user: User | null) => void;
  setContactList: (contactList: User[]) => void;
  setCurrentChat: (user: User) => void;
  setMessages: (messages: Message[]) => void;
  setSocket: (socket: React.RefObject<Socket | null>) => void;
  setMessage: (message: Message) => void;
}

export const useStore = create<Store>()((set) => ({
  currentUser: null,
  contactList: [],
  currentChat: null,
  messages: [],
  socket: React.createRef<Socket | null>(),
  setCurrentUser: (user) => set({ currentUser: user }),
  setContactList: (contactList) => set({ contactList }),
  setCurrentChat: (user) => set({ currentChat: user }),
  setMessages: (messages) => set({ messages }),
  setSocket: (socket) => set({ socket }),
  setMessage: (message) =>
    set((state) => ({ messages: [...state.messages, message] })),
}));
