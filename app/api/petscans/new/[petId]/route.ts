import { NextRequest, NextResponse } from 'next/server';

import PetScan from '../../../../../models/petScan'
import { connectToDb } from "../../../../../utils/database";
import { getPetOwnerId } from '@/utils/functions';
import { getServerSession } from 'next-auth';

export const POST = async (request: NextRequest) => {

  const { petId: petId, scannerName, message, coordinates, dateTime, typeOfScan } = await request.json();

  // const ownerId = getPetOwnerId(petId)

  try {
    await connectToDb();
    const newScan = new PetScan({
      petId: petId,
      scannerName: scannerName,
      message: message,
      coordinates: coordinates,
      dateTime: dateTime,
      typeOfScan: typeOfScan,
      read: false
    });

    await newScan.save();
    return new Response(JSON.stringify(newScan), { status: 201 })
  } catch (error) {
    console.log(error)
    return new Response("Failed to create a new scan", { status: 500 });
  }
}