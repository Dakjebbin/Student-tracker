import { connectToDatabase } from "@/lib/mongoose";
import Health from "@/models/Health";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    await connectToDatabase();

    const body = await request.json();
    const { age, bloodType, weight, height, sleepHours, waterLitres } = body;

    if (!age || !bloodType || !weight || !height || !sleepHours || !waterLitres) {
      return NextResponse.json(
        { success: false, message: "All fields Required" },
        { status: 404 }
      );
    }

    const updateUser = await Health.findOneAndUpdate(
      { userId },
      { userId, age, bloodType, weight, height, sleepHours, waterLitres },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    ).exec();

    return NextResponse.json(
      {
        success: true,
        message: "Successfully Updated",
        data: updateUser,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error(`Error creating user: ${error.message}`);
    return NextResponse.json(
      { success: false, message: `Internal Server Error: ${error.message}` },
      { status: 500 }
    );
  }
};
