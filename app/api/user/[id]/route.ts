import { NextRequest, NextResponse } from 'next/server';

import User from '@/models/user';
import { connectToDb } from "@utils/database";
import { getServerSession } from 'next-auth';

// DELETE a user
export const DELETE = async (request: NextRequest, { params }: any) => {
  // API Protection
  const session = await getServerSession();
  if (!session) {
    // Not Signed in
    return NextResponse.json({ error: "You must be logged in': ", status: 401 })
  }
  try {
    await connectToDb();
    await User.findByIdAndDelete(params.id);
    return new Response('User deleted', { status: 200 });
  } catch (error) {
    console.log(error)
    return new Response("Failed to delete user", { status: 500 });
  }
}