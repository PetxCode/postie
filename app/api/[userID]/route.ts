import { dbConfig } from "@/utils/dbConfig";
import postModel from "@/utils/model/postModel";
import userModel from "@/utils/model/userModel";
import { Types } from "mongoose";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, { params }: any) => {
  try {
    await dbConfig();
    const { userID } = params;
    const user = await userModel.findById(userID).populate({
      path: "post",
    });
    return NextResponse.json({
      message: "Success reading POST from User",
      status: 201,
      data: user,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Error from GET",
      status: 404,
      data: error,
    });
  }
};

export const POST = async (req: NextRequest, { params }: any) => {
  try {
    await dbConfig();
    const { userID } = params;
    const { title, content, postImage } = await req.json();
    const user = await userModel.findById(userID);

    if (user) {
      const post = await postModel.create({ title, content, postImage });

      user.post.push(new Types.ObjectId(post._id));
      user.save();

      return NextResponse.json({
        message: "Success creating POST",
        status: 201,
        data: post,
      });
    } else {
      return NextResponse.json({
        message: "Error from User data",
        status: 404,
      });
    }
  } catch (error) {
    return NextResponse.json({
      message: "Error from GET",
      status: 404,
      data: error,
    });
  }
};
