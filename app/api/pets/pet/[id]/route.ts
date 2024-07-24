import { NextRequest, NextResponse } from 'next/server';

import Pet from '../../../../../models/pet'
import { connectToDb } from "../../../../../utils/database";
import { getServerSession } from 'next-auth';

// GET for reading 1 pet by it's ID

export const GET = async (request: NextRequest, { params }: any) => {
  // API Protection
  const session = await getServerSession();
  if (!session) {
    // Not Signed in
    return NextResponse.json({ error: "You must be logged in': ", status: 401 })
  }


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
export const DELETE = async (request: NextRequest, { params }: any) => {
  // API Protection
  const session = await getServerSession();
  if (!session) {
    // Not Signed in
    return NextResponse.json({ error: "You must be logged in': ", status: 401 })
  }

  //  NEED TO CHECK PET OWNER IS THE SAME AS THE LOGGED IN USER 


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

export const PATCH = async (request: NextRequest, { params }: any) => {
  // API Protection
  const session = await getServerSession();
  if (!session) {
    // Not Signed in
    return NextResponse.json({ error: "You must be logged in': ", status: 401 })
  }

  const { petImage, petName, dob, breed, color, homeAddress, what3words, message, petType, contactNumber, contactEmail, ownerName } = await request.json();
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
    petToUpdate.ownerName = ownerName;

    await petToUpdate.save()
    return new Response(JSON.stringify(petToUpdate), { status: 200 });
  } catch (error) {
    console.log(error)
    return new Response("Failed to update pet", { status: 500 });
  }
}