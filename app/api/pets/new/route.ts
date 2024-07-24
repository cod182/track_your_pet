import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';

import Pet from '../../../../models/pet'
import { connectToDb } from "../../../../utils/database";
import { getServerSession } from 'next-auth';

export const POST = async (request: NextRequest, response: NextApiResponse) => {
  // API Protection
  const session = await getServerSession();
  if (!session) {
    // Not Signed in
    return NextResponse.json({ error: "You must be logged in': ", status: 401 })
  }

  const { ownerId, ownerName, petImage, petName, dob, breed, color, homeAddress, what3words, message, petType, contactNumber, contactEmail } = await request.json();

  try {
    await connectToDb();
    const newPet = new Pet({ ownerId: ownerId, ownerName: ownerName, petImage: petImage, petName: petName, dob: dob, breed: breed, color: color, homeAddress: homeAddress, what3words: what3words, message: message, petType: petType, contactNumber: contactNumber, contactEmail: contactEmail });

    await newPet.save();
    return new Response(JSON.stringify(newPet), { status: 201 })
  } catch (error) {
    console.log(error)
    return new Response("Failed to create a new pet", { status: 500 });
  }
}