export interface User {
  id: string;
  name: string | null;
  email: string | null;
  image: string | null;
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
