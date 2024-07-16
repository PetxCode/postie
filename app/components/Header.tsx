import Link from "next/link";
import React from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Header = () => {
  const navPath = [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "personal Post",
      url: "/personal",
    },
    {
      label: "Create Post",
      url: "/create",
    },
  ];
  return (
    <div className="w-full h-[60px] border-b flex justify-center items-center">
      <div className="flex h-full w-[90%] items-center justify-between">
        <div className="flex gap-16 items-center">
          <Link href="/">Logo</Link>
          <div className="flex gap-2">
            {navPath.map((el, i) => {
              return (
                <Link
                  key={i}
                  href={`${el.url}`}
                  className="font-semibold text-[12px] uppercase border py-2 px-6 rounded-md hover:bg-blue-950 hover:text-white duration-300 transition-all"
                >
                  {el.label}
                </Link>
              );
            })}
          </div>
        </div>

        <div>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </div>
  );
};

export default Header;
