import Pet from '../../../../../models/pet'
import { connectToDb } from "../../../../../utils/database";

// GET for reading 1 pet by it's ID

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

export const PATCH = async (request, { params }) => {
  const { petImage, petName, dob, breed, color, homeAddress, what3words, message, petType, contactNumber, contactEmail } = await request.json();
  try {
    await connectToDb();
    const petToUpdate = await Pet.findById(params.id);

    if (!petToUpdate) {
      return new Response('Pet not found', { status: 404 })
    }
    petToUpdate.petImage = petImage;
    petToUpdate.petName = petName;
    petToUpdate.dob = dob;
    petToUpdate.breed = breed;
    petToUpdate.color = color;
    petToUpdate.homeAddress = homeAddress;
    petToUpdate.what3words = what3words;
    petToUpdate.message = message;
    petToUpdate.petType = petType;
    petToUpdate.contactNumber = contactNumber;
    petToUpdate.contactEmail = contactEmail;

    await petToUpdate.save()
    return new Response(JSON.stringify(petToUpdate), { status: 200 });
  } catch (error) {
    console.log(error)
    return new Response("Failed to update pet", { status: 500 });
  }
}



