"use client";

"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(1),
  message: z.string().min(10),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const { register, handleSubmit, formState, reset } =
    useForm<ContactFormValues>({
      resolver: zodResolver(contactSchema),
    });

  const onSubmit = () => {
    reset();
    window.alert("Message sent. Our studio team will be in touch shortly.");
  };

  return (
    <div className="mx-auto max-w-[1440px] px-4 py-28 md:px-8">
      <SectionHeading title="Contact" subtitle="Luxury connections, direct." />
      <div className="mt-12 grid gap-10 lg:grid-cols-[0.95fr_0.85fr]">
        <div className="rounded-[36px] border border-white/10 bg-white/5 p-10 shadow-premium">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="space-y-2 text-sm text-white/70">
                <span>Name</span>
                <input
                  type="text"
                  {...register("name")}
                  className="w-full rounded-3xl border border-white/10 bg-black/50 px-4 py-4 text-white outline-none focus:border-accent"
                />
                {formState.errors.name && (
                  <span className="text-xs text-redAccent">
                    {formState.errors.name.message}
                  </span>
                )}
              </label>
              <label className="space-y-2 text-sm text-white/70">
                <span>Email</span>
                <input
                  type="email"
                  {...register("email")}
                  className="w-full rounded-3xl border border-white/10 bg-black/50 px-4 py-4 text-white outline-none focus:border-accent"
                />
                {formState.errors.email && (
                  <span className="text-xs text-redAccent">
                    {formState.errors.email.message}
                  </span>
                )}
              </label>
            </div>
            <label className="space-y-2 text-sm text-white/70">
              <span>Subject</span>
              <select
                {...register("subject")}
                className="w-full rounded-3xl border border-white/10 bg-black/50 px-4 py-4 text-white outline-none focus:border-accent"
              >
                <option value="General Inquiry">General Inquiry</option>
                <option value="Partnership">Partnership</option>
                <option value="Booking">Booking</option>
                <option value="Other">Other</option>
              </select>
              {formState.errors.subject && (
                <span className="text-xs text-redAccent">
                  {formState.errors.subject.message}
                </span>
              )}
            </label>
            <label className="space-y-2 text-sm text-white/70">
              <span>Message</span>
              <textarea
                rows={6}
                {...register("message")}
                className="w-full rounded-3xl border border-white/10 bg-black/50 px-4 py-4 text-white outline-none focus:border-accent"
              />
              {formState.errors.message && (
                <span className="text-xs text-redAccent">
                  {formState.errors.message.message}
                </span>
              )}
            </label>
            <Button type="submit">Send Message</Button>
          </form>
        </div>
        <div className="space-y-6 rounded-[36px] border border-white/10 bg-white/5 p-10 shadow-premium">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-accent">
              Contact Info
            </p>
            <p className="mt-4 text-sm leading-7 text-white/70">
              Velocity Studio, Mumbai, India
            </p>
          </div>
          <div className="space-y-4 text-sm text-white/70">
            <p>
              <span className="font-semibold text-white">Phone:</span> +91 12345
              67890
            </p>
            <p>
              <span className="font-semibold text-white">Email:</span>{" "}
              info@velocitystudio.com
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-black/50 p-4 text-sm text-white/70">
            <p className="font-semibold text-white">Follow us</p>
            <p className="mt-3">Instagram / YouTube / Twitter / LinkedIn</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-black/50 p-4 text-sm text-white/70">
            <p className="font-semibold text-white">Map</p>
            <p className="mt-3">
              An immersive studio location in the heart of Mumbai. (Map preview
              available in production.)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
