import { NextResponse } from 'next/server';
import Pet from '@models/pet';
import { connectToDb } from '@utils/database';
import { getServerSession } from 'next-auth';

export const GET = async (request: Request, { params }: { params: { ownerId: string } }) => {
  // API Protection
  const session = await getServerSession();
  if (!session) {
    // Not Signed in
    return NextResponse.json({ error: "You must be logged in", status: 401 });
  }

  try {
    await connectToDb();

    // Ensure params.ownerId is properly typed and validated
    const pets = await Pet.find({ ownerId: params.ownerId });

    return NextResponse.json(pets, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch all pets" }, { status: 500 });
  }
};

// DELETE a pet
export const DELETE = async (request: NextResponse, { params }: any) => {
  // API Protection
  const session = await getServerSession();
  if (!session) {
    // Not Signed in
    return NextResponse.json({ error: "You must be logged in': ", status: 401 })
  }

  try {
    await connectToDb();

    await Pet.deleteMany({ ownerId: params.ownerId })
    return new Response('Pets deleted', { status: 200 });
  } catch (error) {
    console.log(error)
    return new Response("Failed to delete pets", { status: 500 });
  }
}