import { z } from "zod";

export const reservationSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, "Please enter your full name (at least 2 characters)")
    .max(80, "Name must be under 80 characters"),
  phone: z
    .string()
    .trim()
    .min(10, "Please enter a valid telephone / mobile number")
    .regex(
      /^(\+91[\-\s]?)?[6789]\d{9}$|^[+0-9\s\-()]{7,25}$/,
      "Please enter a valid phone number (e.g. +91 98400 12345 or 10-digit mobile)"
    ),
  email: z
    .string()
    .trim()
    .email("Please provide a valid email address for confirmation"),
  date: z
    .string()
    .min(1, "Please choose your dining date"),
  time: z
    .string()
    .min(1, "Please select an available dining slot"),
  guests: z
    .string()
    .min(1, "Please select the number of guests"),
  seatingArea: z
    .string()
    .optional(),
  dietaryPreference: z
    .string()
    .optional()
    .default("all"),
  dietaryNotes: z
    .string()
    .max(500, "Notes cannot exceed 500 characters")
    .optional()
    .default(""),
  termsAccepted: z
    .boolean()
    .refine((val) => val === true, {
      message: "Please accept the dining reservation policy to proceed",
    }),
  trap: z
    .string()
    .max(0, "Bot detected")
    .optional()
    .default(""),
});

export type ReservationFormValues = z.infer<typeof reservationSchema>;
export type ReservationFormInput = z.input<typeof reservationSchema>;
