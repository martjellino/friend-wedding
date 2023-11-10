import { prisma } from "@/utils/prisma";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { id } = params;
  try {
    const visitor = await prisma.visitors.findFirst({
      where: {
        id,
      },
    });
    if (!visitor) {
      return NextResponse.json(
        {
          message: "The visitor is not found!",
        },
        {
          status: 404,
        }
      );
    }
    return NextResponse.json(
      {
        data: visitor,
        message: "Successfully Get The Visitor",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: error.status }
    );
  }
}
