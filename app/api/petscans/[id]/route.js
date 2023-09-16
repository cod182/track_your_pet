import PetScan from '../../../../models/petScan'
import { connectToDb } from "../../../../utils/database";

export const GET = async (request, { params }) => {
  try {
    await connectToDb()
    const scans = await PetScan.find({ petId: params.id });
    return new Response(JSON.stringify(scans), { status: 200 })
  } catch (error) {
    return new Response("Failed to pet scans", { status: 500 })
  }
}

export const DELETE = async (request, { params }) => {
  try {
    await connectToDb();
    await PetScan.findByIdAndRemove(params.id);
    return new Response('Pet scan deleted', { status: 200 });
  } catch (error) {
    console.log(error)
    return new Response("Failed to delete scan", { status: 500 });
  }
}