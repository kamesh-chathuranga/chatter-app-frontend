"use server";

import { prisma } from "@/lib/prismaClient";
import { User } from "@/types/types";

export const getAllUsers = async () => {
  try {
    const users: User[] = await prisma.user.findMany({
      orderBy: { name: "asc" },
      select: {
        id: true,
        name: true,
        email: true,
        image: true,
      },
    });

    return users;
  } catch (error) {
    throw error;
  }
};

export const getCurrentUser = async (id: string) => {
  try {
    const user: User | null = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        image: true,
      },
    });

    return user;
  } catch (error) {
    throw error;
  }
};
