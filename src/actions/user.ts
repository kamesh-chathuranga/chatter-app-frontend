"use server";

import { prisma } from "@/lib/prismaClient";

export const getCurrentUserByEmail = async (email: string) => {
  try {
    const user = prisma.user.findUnique({
      where: { email },
    });

    return user;
  } catch (error) {
    throw error;
  }
};

export const getCurrentUserById = async (id: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });

    return user;
  } catch (error) {
    throw error;
  }
};

export const getAllUsers = async (userId: string) => {
  try {
    const users = await prisma.user.findMany({
      where: {
        id: { not: userId },
      },
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
