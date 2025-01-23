import React, { Fragment } from "react";

import { BsCheck, BsCheckAll } from "react-icons/bs";

interface MessageStatusProps {
  status: string;
}

const MessageStatus = ({ status }: MessageStatusProps) => {
  return <Fragment>
    {status === "sent" && <BsCheck className="text-lg" />}
    {status === "delivered" && <BsCheck className="text-lg"/>}
    {status === "read" && <BsCheckAll className="text-lg text-white" />}
  </Fragment>;
};

export default MessageStatus;
