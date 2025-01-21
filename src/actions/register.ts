"use server";

import * as z from "zod";
import { RegisterSchema } from "@/schema";

export const register = async (formdata: z.infer<typeof RegisterSchema>) => {
  const validateFormdata = RegisterSchema.safeParse(formdata);

  if (!validateFormdata.success) {
    return { error: "Invalid form data" };
  }

  return { success: "Register" };
};
