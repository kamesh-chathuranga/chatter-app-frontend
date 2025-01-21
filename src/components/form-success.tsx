import React from "react";

import { VscVerified } from "react-icons/vsc";

interface FormSuccessProps {
  message?: string;
}

const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) return null;

  return (
    <div className="flex items-center  p-3 bg-emerald-600/15 text-sm rounded-md text-emerald-600 gap-x-2">
      <VscVerified className="size-4" />
      <p>{message}</p>
    </div>
  );
};

export default FormSuccess;
