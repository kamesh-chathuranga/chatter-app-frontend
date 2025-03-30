export interface User {
  id: string;
  name: string;
  email: string;
  password?: string;
  emailVerified?: Date;
  image?: string;
  about?: string;
  phone?: string;
  lastSeen?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface Message {
  id: string;
  author: User;
  authorId: string;
  receiver: User;
  receiverId: string;
  type: string;
  message: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ServerActionResponse {
  status: number;
  success: boolean;
  message: string;
}
