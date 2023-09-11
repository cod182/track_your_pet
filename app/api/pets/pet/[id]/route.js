import Pet from '../../../../../models/pet'
import { connectToDb } from "../../../../../utils/database";

// GET for reading 1 prpetompt by it's ID

export const GET = async (request, { params }) => {
  try {
    await connectToDb();
    const pet = await Pet.findById(params.id);
    if (!pet) {
      return new Response('Pet not found', { status: 404 })
    }
    return new Response(JSON.stringify(pet), { status: 200 });

  } catch (error) {
    console.log(error)
    return new Response("Failed to fetch pet", { status: 500 });
  }
}

// DELETE a pet
export const DELETE = async (request, { params }) => {
  console.log('deleting')
  try {
    await connectToDb();
    await Pet.findByIdAndRemove(params.id);
    return new Response('Pet deleted', { status: 200 });
  } catch (error) {
    console.log(error)
    return new Response("Failed to delete pet", { status: 500 });
  }
}

// PATCH (Updating a pet)

// export const PATCH = async (request, { params }) => {
//   const { name, confidence } = await request.json();
//   try {
//     await connectToDb();
//     const existingSkill = await Skill.findById(params.id);

//     if (!existingSkill) {
//       return new Response('Skill not found', { status: 404 })
//     }
//     existingSkill.name = name;
//     existingSkill.confidence = confidence;
//     await existingSkill.save()
//     return new Response(JSON.stringify(existingSkill), { status: 200 });
//   } catch (error) {
//     console.log(error)
//     return new Response("Failed to update skill", { status: 500 });
//   }
// }