"use client";
import { useOptimistic } from "react";
import ReservationCard from "./ReservationCard";
import { deleteReservation } from "../_lib/actions";

function ReservationList({ bookings }) {
  // showing artificail deletion before delete Api call initiated and fulfilled/succeeded
  const [optimisticBookings, optimisticDelete] = useOptimistic(
    bookings, //holds current state values or collection data
    (curBookings, bookingId) => {
      return curBookings.filter((booking) => booking.id !== bookingId);
    } //Update function
  );

  // async operation triggered through prop drilling of deletion
  async function handleDelete(bookingId) {
    optimisticDelete(bookingId);
    await deleteReservation(bookingId);
  }

  return (
    <ul className="space-y-6">
      {optimisticBookings.map((booking) => (
        <ReservationCard
          booking={booking}
          onDelete={handleDelete}
          key={booking.id}
        />
      ))}
    </ul>
  );
}

export default ReservationList;
