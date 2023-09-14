import PetScan from '../../../../models/petScan'
import { connectToDb } from "../../../../utils/database";

export const GET = async (request, { params }) => {
  console.log(params.petId)
  try {
    await connectToDb()

    const scans = await PetScan.find({ petId: params.petId });
    console.log(scans)
    return new Response(JSON.stringify(scans), { status: 200 })
  } catch (error) {
    return new Response("Failed to pet scans", { status: 500 })
  }
} 