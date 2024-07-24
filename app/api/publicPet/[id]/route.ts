import { NextRequest, NextResponse } from 'next/server';

import Pet from '@/models/pet';
import { connectToDb } from '@/utils/database';
import { getPublicPetData } from '@/utils/functions';

// GET for reading 1 pet by its ID (Only return public accessible details)
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    await connectToDb();
    const pet = await Pet.findById(params.id);
    if (!pet) {
      return NextResponse.json({ message: 'Pet not found' }, { status: 404 });
    }

    const publicData = getPublicPetData(pet);
    return NextResponse.json(publicData, { status: 200 });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Failed to fetch pet' }, { status: 500 });
  }
}
