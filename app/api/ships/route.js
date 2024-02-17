import { connectDB } from "@/lib/connectDB";
import { sendResponse } from "@/lib/helpers";
import Ship from "@/models/Ship";

// export const maxDuration = 300; // This function can run for a maximum of 300 seconds
// export const dynamic = "force-dynamic";
// export const revalidate = 0;

export async function GET(request) {
  try {
    await connectDB();

    const ships = await Ship.find({}).lean().limit(10);

    return new Response(
      JSON.stringify(
        {
          status: "success",
          message: "Shipwrecks retrieved successfully",
          data: ships,
        },
        null,
        2,
      ),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  } catch (error) {
    return sendResponse(500, "Something went wrong");
  }
}
