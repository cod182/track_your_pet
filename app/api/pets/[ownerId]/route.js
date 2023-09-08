import Pet from '../../../../models/pet'
import { connectToDb } from "../../../../utils/database";

export const GET = async (request, { params }) => {

  try {
    await connectToDb()

    const pets = await Pet.find({ ownerId: params.ownerId });

    return new Response(JSON.stringify(pets), { status: 200 })
  } catch (error) {
    return new Response("Failed to fetch all pets", { status: 500 })
  }
} 