import User from '@/models/user';
import { connectToDb } from "@utils/database";

// DELETE a user
export const DELETE = async (request, { params }) => {
  try {
    await connectToDb();
    await User.findByIdAndDelete(params.id);
    return new Response('User deleted', { status: 200 });
  } catch (error) {
    console.log(error)
    return new Response("Failed to delete user", { status: 500 });
  }
}