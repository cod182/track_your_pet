import User from "@models/user";
import { connectToDb } from "@utils/database";

export const GET = async (request, { params }) => {
  try {
    await connectToDb();

    const user = await User.findOne({ username: params.id });
    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    console.log(error)
    return new Response("Failed to fetch user", { status: 500 });
  }
}