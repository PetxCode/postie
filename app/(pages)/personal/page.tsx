import { currentUser } from "@clerk/nextjs/server";
import React from "react";

const page = async () => {
  const url = process.env.HOST_URL as string;
  const user = await currentUser();
  const userID = user?.publicMetadata?.userId;
  const res = await fetch(`${url}/api/${userID}`, {
    method: "GET",
    cache: "no-cache",
    next: {
      tags: ["post"],
    },
  });

  const data = await res.json();
  return (
    <div>
      <div className="my-10 font-semibold text-[12px] text-center">
        Viewing all Posts
      </div>

      <div>
        {data?.data?.map((el: any) => (
          <div
            key={el._id}
            className="border rounded-md overflow-hidden w-[300px] h-[400px]"
          >
            <img className="w-full h-[300px] border" />
            <div className="p-2">
              <p className="font-bold uppercase">{el.title}</p>
              <p className="text-[12px] mt-1">{el.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
