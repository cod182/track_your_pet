import { NextApiRequest } from "next";
import PetScan from '@/models/petScan'
import { connectToDb } from '@/utils/database';

export const GET = async (req: NextApiRequest, params: any, res: any) => {
  try {
    await connectToDb()

    const pets = await PetScan.find();

    return new Response(JSON.stringify(pets), { status: 200 })
  } catch (error) {
    return new Response("Failed to fetch pet scans", { status: 500 })
  }
}