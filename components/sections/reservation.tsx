"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Calendar, Clock, Users, CheckCircle2, AlertCircle, Sparkles, Shield, ArrowRight } from "lucide-react";
import { reservationSchema, ReservationFormValues, ReservationFormInput } from "@/lib/schema";
import { submitReservationAction } from "@/app/actions/reservation";
import { PillLabel } from "@/components/ui/badge";
import { ReservationResponse } from "@/lib/types";
import { siteConfig } from "@/lib/site";

export function ReservationSection() {
  const [submissionResult, setSubmissionResult] = useState<ReservationResponse | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ReservationFormInput, unknown, ReservationFormValues>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      date: "",
      time: "12:30",
      guests: "4",
      seatingArea: "Traditional Banana Leaf Dining Hall",
      dietaryPreference: "all",
      dietaryNotes: "",
      termsAccepted: false,
      trap: "",
    },
  });

  const onSubmit = async (data: ReservationFormValues) => {
    setIsSubmitting(true);
    setSubmissionResult(null);

    try {
      const response = await submitReservationAction(data);
      setSubmissionResult(response);
      if (response.success) {
        reset();
      }
    } catch {
      setSubmissionResult({
        success: false,
        message: "An unexpected network error occurred. Please call our reservation desk at +91 44 2621 4455.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="reservations" className="relative py-24 sm:py-36 bg-[#122B1E] text-cream overflow-hidden">
      {/* Ambient background glow */}
      <div
        className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Floating food image bleeding off the left edge */}
      <div
        className="hidden md:block absolute -left-24 lg:-left-32 top-1/2 -translate-y-1/2 w-72 lg:w-96 aspect-square pointer-events-none z-10 opacity-75 lg:opacity-90 drop-shadow-[0_25px_35px_rgba(0,0,0,0.8)]"
        aria-hidden="true"
      >
        <Image
          src="/images/reservation-dish.svg"
          alt="Chettinad Special Clay Pot Roast"
          fill
          sizes="384px"
          className="object-contain"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading, Subtext, Hospitality Guarantees */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <div className="self-start">
              <PillLabel variant="light">Table Reservations · முன் பதிவு</PillLabel>
            </div>

            <h2 className="headline-section font-serif font-normal text-cream">
              Reserve Your Place <br />
              <span className="italic text-[#C5A059]">at Annam&apos;s Table</span>
            </h2>

            <p className="text-base sm:text-lg text-cream/75 leading-relaxed">
              Whether joining us for an unhurried Sunday banana leaf sappadu with family or an
              evening of crisp kari dosas, flaky parottas, and piping hot filter kaapi.
            </p>

            <div className="pt-4 space-y-4 text-sm text-cream/85">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0 mt-0.5">
                  <Sparkles className="w-3 h-3" />
                </div>
                <span>
                  <strong className="text-cream">Banana Leaf Sappadu:</strong> Served daily for lunch from 12:00 PM to 4:00 PM with unlimited hospitality.
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0 mt-0.5">
                  <Shield className="w-3 h-3" />
                </div>
                <span>
                  <strong className="text-cream">Pure Veg &amp; Jain Friendly:</strong> Dedicated vegetarian kitchen line. Jain options (no onion/garlic) readily prepared.
                </span>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 text-xs text-cream/60 space-y-1">
              <p>For family celebrations exceeding 20 guests or private hall bookings, please call our reception desk directly at <a href={`tel:${siteConfig.contact.telephone}`} className="text-accent underline underline-offset-2">{siteConfig.contact.telephone}</a>.</p>
            </div>
          </div>

          {/* Right Column: Form Card */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl bg-[#183626]/95 border border-white/10 p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
              {/* Form Success State */}
              {submissionResult?.success ? (
                <div className="py-8 text-center space-y-6 animate-in fade-in zoom-in-95 duration-400">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div>
                    <h3 className="font-serif text-3xl text-cream">Vanakkam! Reservation Confirmed</h3>
                    <p className="mt-2 text-sm text-cream/75 max-w-md mx-auto">
                      {submissionResult.message}
                    </p>
                  </div>

                  {submissionResult.details && (
                    <div className="max-w-md mx-auto p-4 rounded-2xl bg-black/40 border border-white/10 text-left text-xs space-y-2 text-cream/80">
                      <div className="flex justify-between border-b border-white/5 pb-2">
                        <span className="text-cream/50">Reservation Code:</span>
                        <span className="font-mono font-semibold text-accent">{submissionResult.reservationId}</span>
                      </div>
                      <div className="flex justify-between border-b border-white/5 pb-2">
                        <span className="text-cream/50">Primary Guest:</span>
                        <span className="font-semibold text-cream">{submissionResult.details.name}</span>
                      </div>
                      <div className="flex justify-between border-b border-white/5 pb-2">
                        <span className="text-cream/50">Date &amp; Time:</span>
                        <span className="text-cream">{submissionResult.details.date} at {submissionResult.details.time}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-cream/50">Guests &amp; Hall:</span>
                        <span className="text-cream">{submissionResult.details.guests} Guests · {submissionResult.details.area}</span>
                      </div>
                    </div>
                  )}

                  <button
                    onClick={() => setSubmissionResult(null)}
                    type="button"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-xs font-semibold uppercase tracking-wider text-cream transition-colors cursor-pointer"
                  >
                    <span>Reserve Another Table</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                /* Reservation Form */
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                  {/* Honeypot Field (Spam Protection) */}
                  <div className="sr-only" aria-hidden="true">
                    <label htmlFor="trap">Leave this field blank</label>
                    <input
                      id="trap"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      {...register("trap")}
                    />
                  </div>

                  {/* Submission Error Alert */}
                  {submissionResult && !submissionResult.success && (
                    <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-200 text-xs flex items-start gap-3">
                      <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <span>{submissionResult.message}</span>
                    </div>
                  )}

                  {/* Row 1: Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fullName" className="block text-xs uppercase tracking-wider font-semibold text-cream/80 mb-2">
                        Your Full Name *
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        placeholder="e.g. Karthik Sundaram"
                        className={`w-full px-4 py-3 rounded-xl bg-black/40 border text-cream placeholder-cream/30 text-sm focus:outline-none transition-colors ${
                          errors.fullName
                            ? "border-rose-500/80 focus:border-rose-500"
                            : "border-white/15 focus:border-accent"
                        }`}
                        {...register("fullName")}
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-xs text-rose-400 font-medium">
                          {errors.fullName.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs uppercase tracking-wider font-semibold text-cream/80 mb-2">
                        Mobile Number (+91) *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="+91 98400 12345"
                        className={`w-full px-4 py-3 rounded-xl bg-black/40 border text-cream placeholder-cream/30 text-sm focus:outline-none transition-colors ${
                          errors.phone
                            ? "border-rose-500/80 focus:border-rose-500"
                            : "border-white/15 focus:border-accent"
                        }`}
                        {...register("phone")}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-rose-400 font-medium">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Email & Guests (up to 20) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-xs uppercase tracking-wider font-semibold text-cream/80 mb-2">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="karthik@example.com"
                        className={`w-full px-4 py-3 rounded-xl bg-black/40 border text-cream placeholder-cream/30 text-sm focus:outline-none transition-colors ${
                          errors.email
                            ? "border-rose-500/80 focus:border-rose-500"
                            : "border-white/15 focus:border-accent"
                        }`}
                        {...register("email")}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-rose-400 font-medium">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="guests" className="block text-xs uppercase tracking-wider font-semibold text-cream/80 mb-2 flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-accent" />
                        <span>Number of Guests (Up to 20) *</span>
                      </label>
                      <select
                        id="guests"
                        className="w-full px-4 py-3 rounded-xl bg-[#0F2218] border border-white/15 text-cream text-sm focus:outline-none focus:border-accent transition-colors"
                        {...register("guests")}
                      >
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests (Couples Dining)</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests (Family Table)</option>
                        <option value="5">5 Guests</option>
                        <option value="6">6 Guests (Heritage Table)</option>
                        <option value="8">8 Guests (Large Family Table)</option>
                        <option value="10">10 Guests (Banana Leaf Hall)</option>
                        <option value="12">12 Guests</option>
                        <option value="15">15 Guests (Family Gathering)</option>
                        <option value="20">20 Guests (Celebration Hall)</option>
                      </select>
                      {errors.guests && (
                        <p className="mt-1 text-xs text-rose-400 font-medium">
                          {errors.guests.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 3: Date & Meal Time Slot */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="date" className="block text-xs uppercase tracking-wider font-semibold text-cream/80 mb-2 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-accent" />
                        <span>Date *</span>
                      </label>
                      <input
                        id="date"
                        type="date"
                        className={`w-full px-4 py-3 rounded-xl bg-black/40 border text-cream placeholder-cream/30 text-sm focus:outline-none transition-colors ${
                          errors.date
                            ? "border-rose-500/80 focus:border-rose-500"
                            : "border-white/15 focus:border-accent"
                        }`}
                        {...register("date")}
                      />
                      {errors.date && (
                        <p className="mt-1 text-xs text-rose-400 font-medium">
                          {errors.date.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="time" className="block text-xs uppercase tracking-wider font-semibold text-cream/80 mb-2 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-accent" />
                        <span>Meal Timing &amp; Slot *</span>
                      </label>
                      <select
                        id="time"
                        className="w-full px-4 py-3 rounded-xl bg-[#0F2218] border border-white/15 text-cream text-sm focus:outline-none focus:border-accent transition-colors"
                        {...register("time")}
                      >
                        <optgroup label="Banana Leaf Lunch (Sappadu)">
                          <option value="12:00">12:00 PM (Lunch Seating)</option>
                          <option value="12:30">12:30 PM (Prime Sappadu)</option>
                          <option value="13:15">01:15 PM (Prime Sappadu)</option>
                          <option value="14:00">02:00 PM (Afternoon Sappadu)</option>
                          <option value="15:00">03:00 PM (Late Lunch)</option>
                        </optgroup>
                        <optgroup label="Dinner (Parotta, Kari Dosai & Biryani)">
                          <option value="18:30">06:30 PM (Early Dinner)</option>
                          <option value="19:30">07:30 PM (Prime Dinner)</option>
                          <option value="20:30">08:30 PM (Prime Dinner)</option>
                          <option value="21:30">09:30 PM (Late Dinner)</option>
                        </optgroup>
                        <optgroup label="Morning Tiffin & Filter Kaapi">
                          <option value="08:00">08:00 AM (Morning Tiffin)</option>
                          <option value="09:30">09:30 AM (Morning Tiffin)</option>
                          <option value="10:30">10:30 AM (Late Tiffin)</option>
                        </optgroup>
                      </select>
                      {errors.time && (
                        <p className="mt-1 text-xs text-rose-400 font-medium">
                          {errors.time.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 4: Seating Area & Dietary Preference */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="seatingArea" className="block text-xs uppercase tracking-wider font-semibold text-cream/80 mb-2">
                        Seating Area
                      </label>
                      <select
                        id="seatingArea"
                        className="w-full px-4 py-3 rounded-xl bg-[#0F2218] border border-white/15 text-cream text-sm focus:outline-none focus:border-accent transition-colors"
                        {...register("seatingArea")}
                      >
                        <option value="Traditional Banana Leaf Dining Hall">Traditional Banana Leaf Hall</option>
                        <option value="Courtyard Brass Lamp Seating">Courtyard Brass Lamp Pavilion</option>
                        <option value="Family Heritage AC Hall">Family Heritage AC Dining</option>
                        <option value="Chettinad Verandah">Chettinad Verandah</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="dietaryPreference" className="block text-xs uppercase tracking-wider font-semibold text-cream/80 mb-2">
                        Dietary Preference
                      </label>
                      <select
                        id="dietaryPreference"
                        className="w-full px-4 py-3 rounded-xl bg-[#0F2218] border border-white/15 text-cream text-sm focus:outline-none focus:border-accent transition-colors"
                        {...register("dietaryPreference")}
                      >
                        <option value="all">Mixed (Both Veg &amp; Non-Veg)</option>
                        <option value="veg">Pure Vegetarian (Dedicated Kitchen)</option>
                        <option value="non-veg">Non-Vegetarian Special</option>
                        <option value="jain">Jain (No Onion &amp; No Garlic)</option>
                      </select>
                    </div>
                  </div>

                  {/* Notes / Requests */}
                  <div>
                    <label htmlFor="dietaryNotes" className="block text-xs uppercase tracking-wider font-semibold text-cream/80 mb-2">
                      Special Notes (High Chairs, Elders, Anniversaries, Mild Spice)
                    </label>
                    <textarea
                      id="dietaryNotes"
                      rows={2}
                      placeholder="e.g. Mild spice for children, family birthday celebration, wheelchair accessibility..."
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-cream placeholder-cream/30 text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                      {...register("dietaryNotes")}
                    />
                    {errors.dietaryNotes && (
                      <p className="mt-1 text-xs text-rose-400 font-medium">
                        {errors.dietaryNotes.message}
                      </p>
                    )}
                  </div>

                  {/* Confirmation Checkbox */}
                  <div className="pt-2">
                    <label className="flex items-start gap-3 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        className="mt-1 w-4 h-4 rounded bg-black/40 border-white/20 text-accent focus:ring-accent cursor-pointer"
                        {...register("termsAccepted")}
                      />
                      <span className="text-xs text-cream/75 leading-normal">
                        I confirm this reservation and acknowledge that Banana Leaf Sappadu is served during lunch hours (12:00 PM – 4:00 PM).
                      </span>
                    </label>
                    {errors.termsAccepted && (
                      <p className="mt-1.5 text-xs text-rose-400 font-medium">
                        {errors.termsAccepted.message}
                      </p>
                    )}
                  </div>

                  {/* Full-width Accent Submit Button */}
                  <div className="pt-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-8 rounded-full bg-accent hover:bg-accent-hover text-white font-medium text-sm sm:text-base tracking-wide shadow-xl shadow-accent/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Confirming Reservation...</span>
                        </>
                      ) : (
                        <>
                          <span>Confirm Table Reservation</span>
                          <ArrowRight className="w-4 h-4 stroke-[2]" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
