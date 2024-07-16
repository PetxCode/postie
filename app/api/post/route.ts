import { dbConfig } from "@/utils/dbConfig";
import postModel from "@/utils/model/postModel";
import userModel from "@/utils/model/userModel";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  try {
    await dbConfig();
    const posts = await postModel.find();

    return NextResponse.json({
      message: "Success reading Post",
      status: 200,
      data: posts,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Error from GET",
      status: 404,
      data: error,
    });
  }
};
