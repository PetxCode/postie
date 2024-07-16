import React from "react";
import { MdPhotoCamera } from "react-icons/md";

const page = async () => {
  const url = process.env.HOST_URL as string;
  const res = await fetch(`${url}/api/post`, {
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
        <form className="w-[300px]">
          <div className="flex flex-col mb-3">
            <label className="font-bold uppercase text-[12px] mb-2">
              title
            </label>
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="pl-2 border rounded-md h-[45px]"
            />
          </div>
          <div className="flex flex-col mb-3">
            <label className="font-bold uppercase text-[12px] mb-2">
              content
            </label>
            <input
              type="text"
              name="content"
              placeholder="content"
              className="pl-2 border rounded-md h-[45px]"
            />
          </div>
          <div className="flex flex-col mb-3">
            <label
              className="font-bold uppercase text-[12px] mb-2 cursor-pointer"
              htmlFor="image"
            >
              <MdPhotoCamera size={35} />
            </label>
            <input
              id="image"
              type="file"
              accept="image/jpg, image/png, image/gif image/jpeg"
              name="image"
              placeholder="Title"
              className=" hidden pl-2 border rounded-md h-[45px]"
            />
          </div>

          <button className="w-full h-[55px] bg-black text-white flex items-center justify-center mt-4 rounded-md">
            Make Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
