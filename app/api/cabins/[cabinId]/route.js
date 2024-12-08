import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";

//In the following i have created API Endpoint with Route Handlers

export async function GET(request, { params }) {
  try {
    const [cabin, bookedDates] = await Promise.all([
      getCabin(params.cabinId),
      getBookedDatesByCabinId(params.cabinId),
    ]);

    return Response.json({
      cabin,
      bookedDates,
    });
  } catch {
    return Response.json({ message: "Cabin Not found" });
  }
}
