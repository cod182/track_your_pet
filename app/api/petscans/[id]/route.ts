import { NextRequest, NextResponse } from 'next/server';

import PetScan from '../../../../models/petScan'
import { connectToDb } from "../../../../utils/database";
import { getServerSession } from 'next-auth';

export const GET = async (request: NextRequest, { params }: any) => {
  // API Protection
  const session = await getServerSession();
  if (!session) {
    // Not Signed in
    return NextResponse.json({ error: "You must be logged in': ", status: 401 })
  }
  try {
    await connectToDb()
    const scans = await PetScan.find({ petId: params.id });
    return new Response(JSON.stringify(scans), { status: 200 })
  } catch (error) {
    return new Response("Failed to pet scans", { status: 500 })
  }
}

export const DELETE = async (request: NextRequest, { params }: any) => {
  // API Protection
  const session = await getServerSession();
  if (!session) {
    // Not Signed in
    return NextResponse.json({ error: "You must be logged in': ", status: 401 })
  }
  try {
    await connectToDb();
    await PetScan.findByIdAndRemove(params.id);
    return new Response('Pet scan deleted', { status: 200 });
  } catch (error) {
    console.log(error)
    return new Response("Failed to delete scan", { status: 500 });
  }
}


export const PATCH = async (req: NextRequest, res: NextResponse, { params }: any) => {
  // API Protection
  const session = await getServerSession();
  if (!session) {
    // Not Signed in
    return NextResponse.json({ error: "You must be logged in': ", status: 401 })
  }

  try {
    await connectToDb()

    const scanToUpdate = await PetScan.findById(params.id);
    if (!scanToUpdate) {
      return new Response('Scan not found', { status: 404 })
    }

    scanToUpdate.read = true;
    await scanToUpdate.save()


    return new Response(JSON.stringify(scanToUpdate), { status: 200 })
  } catch (error) {
    return new Response("Failed to update scan", { status: 500 })
  }
}