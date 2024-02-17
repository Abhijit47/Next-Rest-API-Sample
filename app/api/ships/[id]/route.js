import { connectDB } from "@/lib/connectDB";
import { sendResponse } from "@/lib/helpers";
import Ship from "@/models/Ship";

export async function GET(req, res) {
  try {
    connectDB();
    const { id } = res.params;

    if (id.length < 24) {
      return sendResponse("fail", "400", `Mismatch information ${id}`);
    }

    const ship = await Ship.findById({ _id: id }).lean();

    if (!ship) {
      return sendResponse("fail", "400", `No ship found on this ${id}`);
    }

    return sendResponse("success", 200, "Get ship data", ship);
  } catch (err) {
    console.log(err.message);
    return sendResponse("fail", 500, "Internal server error");
  }
}
