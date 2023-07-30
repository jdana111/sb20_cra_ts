import React from "react";

const Message: React.FC<{ message: string }> = ({ message }) => {
  return <p>{message}</p>;
};

export default Message;
