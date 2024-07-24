import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import PetScan from '@/models/petScan'
import { connectToDb } from '@/utils/database';
import { getServerSession } from "next-auth";

export const GET = async (req: NextApiRequest, params: any, res: NextResponse) => {
  // API Protection
  const session = await getServerSession();
  if (!session) {
    // Not Signed in
    return NextResponse.json({ error: "You must be logged in': ", status: 401 })
  }

  try {
    await connectToDb()

    const scans = await PetScan.find();

    return new Response(JSON.stringify(scans), { status: 200 })
  } catch (error) {
    return new Response("Failed to fetch pet scans", { status: 500 })
  }
}
