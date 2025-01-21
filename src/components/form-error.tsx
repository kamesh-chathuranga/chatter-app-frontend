import React from "react";

import { BiError } from "react-icons/bi";

interface FormErrorProps {
  message?: string;
}

const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;

  return (
    <div className="flex items-center  p-3 bg-destructive/15 text-sm rounded-md text-destructive gap-x-2">
      <BiError className="size-4" />
      <p>{message}</p>
    </div>
  );
};

export default FormError;
