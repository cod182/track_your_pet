import Pet from '../../../../models/pet'
import { connectToDb } from "../../../../database";

export const POST = async (request) => {
  const { ownerId, ownerName, petImage, petName, dob, bred, color, homeAddress, what3words, message, scanHistory } = await request.json();

  try {
    await connectToDb();
    const newPet = new Pet({ ownerId, ownerName, petImage, petName, dob, bred, color, homeAddress, what3words, message, scanHistory });

    await newPet.save();
    return new Response(JSON.stringify(newPet), { status: 201 })
  } catch (error) {
    console.log(error)
    return new Response("Failed to create a new pet", { status: 500 });
  }
}
