"use server";

import * as z from "zod";
import { AuthError } from "next-auth";
import { signIn } from "@/auth";
import { LoginSchema } from "@/schema";
import { RegisterSchema } from "@/schema";
import bcriptjs from "bcryptjs";
import { prisma } from "@/lib/prismaClient";
import { getCurrentUserByEmail } from "./user";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const loginCurrentUser = async (
  formdata: z.infer<typeof LoginSchema>
) => {
  try {
    const validateFormdata = LoginSchema.safeParse(formdata);

    if (!validateFormdata.success) {
      return { status: 400, success: false, message: "Invalid form data" };
    }

    const { email, password } = validateFormdata.data;
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return {
            status: 401,
            success: false,
            message: "Invalid credentials",
          };
        default:
          return {
            status: 500,
            success: false,
            message: "Failed to login user",
          };
      }
    }

    throw error;
  }
};

export const registerUser = async (
  formdata: z.infer<typeof RegisterSchema>
) => {
  try {
    const validateFormField = RegisterSchema.safeParse(formdata);

    if (!validateFormField.success) {
      return { status: 400, success: false, message: "Invalid form data" };
    }

    const { name, email, password } = validateFormField.data;
    const hashedPassword = await bcriptjs.hash(password, 10);

    const existingUser = await getCurrentUserByEmail(email);

    if (existingUser) {
      return { status: 409, success: false, message: "Email already in use" };
    }

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    if (!user) {
      return {
        status: 500,
        success: false,
        message: "Failed to create user",
      };
    }

    return {
      status: 200,
      success: true,
      message: "User created successfully",
    };
  } catch (error) {
    if (error instanceof AuthError) {
      return {
        status: 500,
        success: false,
        message: "An error occurred while creating the user",
      };
    }
    throw error;
  }
};
