"use server";

import * as z from "zod";
import { RegisterSchema } from "@/schema";
import bcriptjs from "bcryptjs";
import { prisma } from "@/lib/prismaClient";
import { getUserByEmail } from "@/data/user";

export const register = async (formdata: z.infer<typeof RegisterSchema>) => {
  const validateFormField = RegisterSchema.safeParse(formdata);

  if (!validateFormField.success) {
    return { error: "Invalid form data" };
  }

  const { name, email, password } = validateFormField.data;
  const hashedPassword = await bcriptjs.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "Email already in use" };
  }

  await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  return { success: "Register Successfully" };
};
