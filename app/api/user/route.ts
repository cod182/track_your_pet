import { NextRequest, NextResponse } from "next/server";

import User from "@models/user";
import { connectToDb } from "@utils/database";
import { getServerSession } from 'next-auth';

export const GET = async (request: NextRequest, { params }: any) => {
  // API Protection
  const session = await getServerSession();
  if (!session) {
    // Not Signed in
    return NextResponse.json({ error: "You must be logged in': ", status: 401 })
  }
  try {
    await connectToDb();

    const user = await User.findOne({ username: params.id });
    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    console.log(error)
    return new Response("Failed to fetch user", { status: 500 });
  }
}