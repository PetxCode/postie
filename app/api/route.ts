import { dbConfig } from "@/utils/dbConfig";
import userModel from "@/utils/model/userModel";
import { NextRequest, NextResponse } from "next/server";

export const GET = async () => {
  try {
    await dbConfig();
    const user = await userModel.find();

    return NextResponse.json({
      message: "Success from GET",
      status: 200,
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

export const POST = async (req: NextRequest) => {
  try {
    await dbConfig();
    const { name, email, avatar, clerkID } = await req.json();
    const user = await userModel.create({ name, email, avatar, clerkID });

    return NextResponse.json({
      message: "Success from POST",
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
