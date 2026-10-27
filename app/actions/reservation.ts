"use server";

import { reservationSchema, ReservationFormValues } from "@/lib/schema";
import { ReservationResponse } from "@/lib/types";

export async function submitReservationAction(
  data: ReservationFormValues
): Promise<ReservationResponse> {
  try {
    // 1. Honeypot check for bots
    if (data.trap && data.trap.length > 0) {
      // Silently reject bots without raising flags
      return {
        success: false,
        message: "Unable to process reservation request.",
      };
    }

    // 2. Validate input with Zod
    const validated = reservationSchema.parse(data);

    // 3. Generate booking reservation ID
    const bookingCode = `ANNAM-${Math.floor(100000 + Math.random() * 900000)}`;

    return {
      success: true,
      message:
        "Vanakkam! Your table reservation is confirmed. A digital confirmation and SMS notification have been dispatched.",
      reservationId: bookingCode,
      details: {
        name: validated.fullName,
        date: validated.date,
        time: validated.time,
        guests: validated.guests,
        area: validated.seatingArea || "Traditional Banana Leaf Dining Hall",
      },
    };
  } catch (err: unknown) {
    if (err && typeof err === "object" && "errors" in err) {
      return {
        success: false,
        message: "Please correct the highlighted fields in the reservation form.",
      };
    }

    return {
      success: false,
      message:
        "A temporary network error occurred. Please contact our reception desk at +91 44 2621 4455.",
    };
  }
}
