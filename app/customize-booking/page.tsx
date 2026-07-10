"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { z } from "zod";
import { BookingStepper } from "@/components/ui/BookingStepper";
import { Button } from "@/components/ui/Button";
import { motorcycles } from "@/lib/motorcycles-data";
import { SectionHeading } from "@/components/ui/SectionHeading";

const locations = [
  "Mumbai, India",
  "Goa, India",
  "Dubai, UAE",
  "Bali, Indonesia",
];

const bookingSchema = z.object({
  model: z.string().min(1),
  color: z.string().min(1),
  package: z.string().min(1),
  date: z.date(),
  location: z.string().min(1),
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  licenseNumber: z.string().min(4),
  specialRequests: z.string().optional(),
  termsAccepted: z.literal(true),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

export default function CustomizeBookingPage() {
  const [step, setStep] = useState(0);
  const [success, setSuccess] = useState(false);
  const [reference, setReference] = useState("");

  const modelOptions = motorcycles.slice(0, 4);

  const { register, handleSubmit, watch, setValue, formState } =
    useForm<BookingFormValues>({
      resolver: zodResolver(bookingSchema),
      defaultValues: {
        model: modelOptions[0].model,
        color: modelOptions[0].colors[0],
        package: "Premium",
        date: new Date(),
        location: locations[0],
        name: "",
        email: "",
        phone: "",
        licenseNumber: "",
        specialRequests: "",
        termsAccepted: false,
      },
    });

  const selectedModel = watch("model");
  const selectedColor = watch("color");
  const selectedPackage = watch("package");
  const selectedDate = watch("date");
  const selectedLocation = watch("location");

  const model = useMemo(
    () =>
      motorcycles.find((item) => item.model === selectedModel) ??
      modelOptions[0],
    [selectedModel, modelOptions],
  );

  const onSubmit = (values: BookingFormValues) => {
    setReference(`VS-2026-${Math.floor(1000 + Math.random() * 9000)}`);
    setSuccess(true);
  };

  if (success) {
    return (
      <div className="mx-auto max-w-[900px] px-4 py-28 text-center md:px-8">
        <div className="rounded-[36px] border border-white/10 bg-white/5 p-16 shadow-premium">
          <p className="text-sm uppercase tracking-[0.35em] text-accent">
            Booked
          </p>
          <h1 className="mt-6 text-4xl font-accent font-bold uppercase tracking-[0.12em] text-white">
            Your journey begins here
          </h1>
          <p className="mt-4 text-sm leading-7 text-white/70">
            Your experience has been reserved with a premium reference. Our
            studio concierge will reach out to confirm every detail.
          </p>
          <p className="mt-8 rounded-3xl border border-white/10 bg-black/60 px-6 py-4 text-left text-sm text-white/70">
            <span className="block font-semibold text-white">
              Booking reference
            </span>
            <span className="mt-2 text-xl text-accent">{reference}</span>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[1440px] px-4 py-28 md:px-8">
      <SectionHeading
        title="Design Your Experience"
        subtitle="Create your perfect ride package"
      >
        Build a bespoke booking journey with attention to detail and premium
        options throughout.
      </SectionHeading>
      <BookingStepper step={step} setStep={setStep} />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.9fr]"
      >
        <input type="hidden" {...register("model")} />
        <input type="hidden" {...register("color")} />
        <input type="hidden" {...register("package")} />
        <div className="space-y-10">
          {step === 0 && (
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-premium">
              <h2 className="text-xl font-semibold text-white">
                Choose Your Model
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {modelOptions.map((item) => (
                  <button
                    key={item.slug}
                    type="button"
                    onClick={() => {
                      setStep(0);
                      setValue("model", item.model);
                    }}
                    className={`rounded-3xl border p-5 text-left transition ${
                      selectedModel === item.model
                        ? "border-accent bg-accent/10"
                        : "border-white/10 bg-black/40 hover:border-accent/50"
                    }`}
                  >
                    <p className="font-semibold text-white">{item.model}</p>
                    <p className="mt-2 text-sm text-white/65">
                      {item.type} • {item.horsepower} HP
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}
          {step === 1 && (
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-premium">
              <h2 className="text-xl font-semibold text-white">
                Select Your Color
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {model.colors.map((colorOption) => (
                  <button
                    key={colorOption}
                    type="button"
                    onClick={() => {
                      setStep(1);
                      setValue("color", colorOption);
                    }}
                    className={`rounded-3xl border p-5 text-left transition ${
                      selectedColor === colorOption
                        ? "border-accent bg-accent/10"
                        : "border-white/10 bg-black/40 hover:border-accent/50"
                    }`}
                  >
                    <p className="font-semibold text-white">{colorOption}</p>
                    <p className="mt-2 text-sm text-white/60">
                      {colorOption === selectedColor
                        ? "Selected"
                        : "Tap to preview"}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}
          {step === 2 && (
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-premium">
              <h2 className="text-xl font-semibold text-white">
                Choose Your Ride Package
              </h2>
              <div className="mt-6 grid gap-4">
                {["Standard", "Premium", "Elite"].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => {
                      setStep(2);
                      // eslint-disable-next-line @typescript-eslint/no-floating-promises
                      (
                        document.getElementById("package") as HTMLInputElement
                      ).value = option;
                    }}
                    className={`rounded-3xl border p-6 text-left transition ${
                      selectedPackage === option
                        ? "border-accent bg-accent/10"
                        : "border-white/10 bg-black/40 hover:border-accent/50"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-white">{option}</p>
                      {option === "Premium" && (
                        <span className="rounded-full bg-accent px-2 py-1 text-[10px] uppercase tracking-[0.28em] text-black">
                          Best Value
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-sm text-white/70">
                      {option === "Standard" && "1 day, base price."}
                      {option === "Premium" && "2 days with insurance."}
                      {option === "Elite" && "3 days VIP experience."}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}
          {step === 3 && (
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-premium">
              <h2 className="text-xl font-semibold text-white">
                Select Date & Location
              </h2>
              <div className="mt-6 grid gap-4">
                <div className="rounded-3xl border border-white/10 bg-black/40 p-4">
                  <label className="text-sm uppercase tracking-[0.28em] text-white/60">
                    Date
                  </label>
                  <input
                    id="date"
                    type="date"
                    {...register("date", { valueAsDate: true })}
                    className="mt-3 w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-accent"
                  />
                </div>
                <div className="rounded-3xl border border-white/10 bg-black/40 p-4">
                  <label className="text-sm uppercase tracking-[0.28em] text-white/60">
                    Location
                  </label>
                  <select
                    {...register("location")}
                    className="mt-3 w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-accent"
                  >
                    {locations.map((city) => (
                      <option
                        key={city}
                        value={city}
                        className="bg-[#0A0A0A] text-white"
                      >
                        {city}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}
          {step === 4 && (
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-premium">
              <h2 className="text-xl font-semibold text-white">
                Personal Details
              </h2>
              <div className="mt-6 grid gap-4">
                {[
                  { label: "Name", id: "name", type: "text" },
                  { label: "Email", id: "email", type: "email" },
                  { label: "Phone", id: "phone", type: "tel" },
                  {
                    label: "License Number",
                    id: "licenseNumber",
                    type: "text",
                  },
                ].map((field) => (
                  <div
                    key={field.id}
                    className="rounded-3xl border border-white/10 bg-black/40 p-4"
                  >
                    <label className="text-sm uppercase tracking-[0.28em] text-white/60">
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      type={field.type}
                      {...register(field.id as keyof BookingFormValues)}
                      className="mt-3 w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-accent"
                    />
                    {formState.errors[field.id as keyof BookingFormValues] && (
                      <p className="mt-2 text-xs text-redAccent">
                        {
                          formState.errors[field.id as keyof BookingFormValues]
                            ?.message as string
                        }
                      </p>
                    )}
                  </div>
                ))}
                <div className="rounded-3xl border border-white/10 bg-black/40 p-4">
                  <label className="text-sm uppercase tracking-[0.28em] text-white/60">
                    Special requests
                  </label>
                  <textarea
                    rows={4}
                    {...register("specialRequests")}
                    className="mt-3 w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-accent"
                    placeholder="Any preferences for your experience"
                  />
                </div>
                <label className="inline-flex items-center gap-3 rounded-3xl border border-white/10 bg-black/40 px-4 py-4 text-sm text-white/70">
                  <input
                    type="checkbox"
                    {...register("termsAccepted")}
                    className="h-5 w-5 rounded border-white/20 bg-white/5 text-accent focus:ring-accent"
                  />
                  I agree to the terms and conditions.
                </label>
                {formState.errors.termsAccepted && (
                  <p className="text-xs text-redAccent">
                    You must accept the terms to continue.
                  </p>
                )}
              </div>
            </div>
          )}
          <div className="flex flex-wrap items-center gap-4">
            <Button
              type="button"
              variant="outline"
              className="px-8"
              onClick={() => setStep(Math.max(0, step - 1))}
            >
              Back
            </Button>
            <Button
              type="button"
              className="px-8"
              onClick={() => setStep(Math.min(4, step + 1))}
            >
              Continue
            </Button>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-[36px] border border-white/10 bg-white/5 p-8 shadow-premium">
            <p className="text-xs uppercase tracking-[0.35em] text-accent">
              Summary
            </p>
            <div className="mt-6 space-y-4">
              <div className="rounded-3xl border border-white/10 bg-black/50 p-4">
                <p className="text-sm uppercase tracking-[0.28em] text-white/60">
                  Model
                </p>
                <p className="mt-2 text-lg text-white">{selectedModel}</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-black/50 p-4">
                <p className="text-sm uppercase tracking-[0.28em] text-white/60">
                  Color
                </p>
                <p className="mt-2 text-lg text-white">{selectedColor}</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-black/50 p-4">
                <p className="text-sm uppercase tracking-[0.28em] text-white/60">
                  Package
                </p>
                <p className="mt-2 text-lg text-white">{selectedPackage}</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-black/50 p-4">
                <p className="text-sm uppercase tracking-[0.28em] text-white/60">
                  Date
                </p>
                <p className="mt-2 text-lg text-white">
                  {format(selectedDate, "do MMM yyyy")}
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-black/50 p-4">
                <p className="text-sm uppercase tracking-[0.28em] text-white/60">
                  Location
                </p>
                <p className="mt-2 text-lg text-white">{selectedLocation}</p>
              </div>
            </div>
            <button
              type="submit"
              className="mt-8 w-full rounded-2xl bg-gradient-to-r from-accent to-highlight px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:brightness-110"
            >
              Book Experience
            </button>
          </div>
        </aside>
      </form>
    </div>
  );
}
