"use server";

import * as z from "zod";
import { LoginSchema } from "@/schema";

export const login = async (formdata: z.infer<typeof LoginSchema>) => {
  const validateFormdata = LoginSchema.safeParse(formdata);

  if (!validateFormdata.success) {
    return { error: "Invalid form data" };
  }

  return { success: "Logged in" };
};
