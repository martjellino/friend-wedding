import { NextResponse } from "next/server";
import { prisma } from "@/utils/prisma";

export async function POST(req) {
  try {
    const { name, wish } = await req.json();
    const createWish = await prisma.wishes({
      data: {
        name,
        wish,
      },
    });
    return NextResponse.json(
      {
        message: "Successfully created a wish!",
        createWish,
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const res = await prisma.wishes.findMany();
    return NextResponse.json(
      {
        data: res,
        message: "Successfully got all wishes!",
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
