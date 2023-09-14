import PetScan from '../../../../models/petscan'
import { connectToDb } from "../../../../utils/database";

export const POST = async (request) => {
  const { petId: PetId, scannerName, message, coords, dateTime, ip } = await request.json();

  try {
    await connectToDb();
    const newScan = new PetScan({ petId: petId, scannerName: scannerName, message: message, coords: coords, dateTime: dateTime, ip: ip });

    await newScan.save();
    return new Response(JSON.stringify(newScan), { status: 201 })
  } catch (error) {
    console.log(error)
    return new Response("Failed to create a new scan", { status: 500 });
  }
}
