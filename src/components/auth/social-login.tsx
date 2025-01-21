import React from "react";

import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div className="flex items-center w-full">
      <Button
        size="lg"
        className="w-full items-center justify-center flex"
        variant="outline"
        onClick={() => console.log("Google")}
      >
        <FcGoogle size={50} className="size-20" />
        <span>Continue with Google</span>
      </Button>
    </div>
  );
};

export default SocialLogin;
