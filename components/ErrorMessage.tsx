import React from "react";

const ErrorMessage = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="rounded-md shadow-2xl  p-4 mx-auto w-full lg:w-1/4 text-red-500 ">{children}</p>
  );
};

export default ErrorMessage;
