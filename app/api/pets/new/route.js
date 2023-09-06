import Pet from '../../../../models/pet'
import { connectToDb } from "../../../../utils/database";

export const POST = async (request) => {
  const { ownerId, ownerName, petImage, petName, dob, breed, color, homeAddress, what3words, message, scanHistory } = await request.json();

  try {
    await connectToDb();
    const newPet = new Pet({ ownerId: ownerId, ownerName: ownerName, petImage: petImage, petName: petName, dob: dob, breed: breed, color: color, homeAddress: homeAddress, what3words: what3words, message: message, scanHistory: scanHistory });

    await newPet.save();
    return new Response(JSON.stringify(newPet), { status: 201 })
  } catch (error) {
    console.log(error)
    return new Response("Failed to create a new pet", { status: 500 });
  }
}
