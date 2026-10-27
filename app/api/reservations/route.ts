import { NextResponse } from "next/server";
import { reservationSchema } from "@/lib/schema";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Honeypot spam trap
    if (body.trap && body.trap.length > 0) {
      return NextResponse.json(
        { success: false, message: "Spam detected." },
        { status: 400 }
      );
    }

    const result = reservationSchema.safeParse(body);
    if (!result.success) {
      const flattened = result.error.flatten().fieldErrors;
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed. Please verify your reservation details.",
          errors: flattened,
        },
        { status: 422 }
      );
    }

    const bookingCode = `ANNAM-${Math.floor(100000 + Math.random() * 900000)}`;

    return NextResponse.json({
      success: true,
      message: "Vanakkam! Table reservation successfully confirmed.",
      reservationId: bookingCode,
      details: {
        name: result.data.fullName,
        date: result.data.date,
        time: result.data.time,
        guests: result.data.guests,
        area: result.data.seatingArea || "Traditional Banana Leaf Dining Hall",
      },
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "An internal server error occurred while booking your table.",
      },
      { status: 500 }
    );
  }
}
