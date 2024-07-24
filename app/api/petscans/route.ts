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

// import type { NextApiRequest, NextApiResponse } from 'next';

// import PetScan from '@/models/petScan';
// import { connectToDb } from '@/utils/database';
// import { getServerSession } from 'next-auth';

// // Define the API route handler
// export const GET = async (req: NextApiRequest, res: NextApiResponse) => {

//   // API Protection
//   const session = await getServerSession();
//   if (!session) {
//     // Not Signed in
//     return res.status(401).json({ error: 'You must be logged in' });
//   }

//   try {
//     // Connect to the database
//     await connectToDb();

//     // Fetch pet scans from the database
//     const scans = await PetScan.find();

//     // Return the fetched data as JSON
//     return res.status(200).json(scans);
//   } catch (error) {
//     // Handle any errors and return a 500 status with an error message
//     return res.status(500).json({ error: 'Failed to fetch pet scans' });
//   }
// }
