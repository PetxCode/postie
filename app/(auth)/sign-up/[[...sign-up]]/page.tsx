import { SignUp } from "@clerk/nextjs";
import React from "react";

const page = () => {
  return (
    <div className="flex w-full items-center justify-center flex-col">
      <div className="my-5 font-bold text-[12px] uppercase">
        This is to Sign Up Page
      </div>

      <SignUp />
    </div>
  );
};

export default page;
