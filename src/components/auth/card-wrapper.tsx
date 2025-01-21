import React from "react";

import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Header from "./header";
import SocialLogin from "./social-login";
import BackButton from "./back-button";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonText: string;
  backButtonHref: string;
  showSocialLogin?: boolean;
}

const CardWrapper = ({
  children,
  headerLabel,
  backButtonText,
  backButtonHref,
  showSocialLogin,
}: CardWrapperProps) => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocialLogin && (
        <CardFooter>
          <SocialLogin />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton href={backButtonHref} label={backButtonText} />
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;
