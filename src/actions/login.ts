"use server";

import * as z from "zod";
import { LoginSchema } from "@/schema";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";

export const login = async (formdata: z.infer<typeof LoginSchema>) => {
  const validateFormdata = LoginSchema.safeParse(formdata);

  if (!validateFormdata.success) {
    return { error: "Invalid form data" };
  }

  const { email, password } = validateFormdata.data;

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials" };
        default:
          return { error: "An error occurred" };
      }
    }

    throw error;
  }
};
