import { Message, User } from "@prisma/client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  currentUser: User | null;
  contactList: User[];
  currentChat: User | null;
  messages: Message[];
}

const initialState: UserState = {
  currentUser: null,
  contactList: [],
  currentChat: null,
  messages: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<User | null>) => {
      if (action.payload) {
        state.currentUser = {
          ...action.payload,
          createdAt: action.payload.createdAt instanceof Date
            ? action.payload.createdAt.toISOString() // Convert to string
            : action.payload.createdAt, // Keep as it is if already a string
        };
      } else {
        state.currentUser = null;
      }
    },
    setContactList: (state, action: PayloadAction<User[]>) => {
      state.contactList = action.payload;
    },
    setCurrentChat: (state, action: PayloadAction<User>) => {
      state.currentChat = action.payload;
    },
    setMessages: (state, action: PayloadAction<Message[]>) => {
      state.messages = action.payload;
    },
    addMessage: (state, action: PayloadAction<Message>) => {
      state.messages.push(action.payload);
    },
  },
});

export const {
  setCurrentUser,
  setContactList,
  setCurrentChat,
  setMessages,
  addMessage,
} = userSlice.actions;

export default userSlice.reducer;
