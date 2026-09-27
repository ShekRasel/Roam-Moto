"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  Info,
  Printer,
} from "lucide-react";
import {
  motorcycles,
  locations,
  ridePackages,
  legacySlugs,
} from "@/lib/motorcycles-data";
import { formatCurrency } from "@/lib/utils";
import { displayDate, localDate, returnDate } from "@/lib/booking";

export function BookingForm({ initialBike }: { initialBike?: string }) {
  const selected =
    motorcycles.find(
      (m) => m.slug === (legacySlugs[initialBike ?? ""] ?? initialBike),
    ) ?? motorcycles[0];
  const [bikeId, setBikeId] = useState<string>(selected.slug);
  const [packageId, setPackageId] = useState<string>("weekend");
  const [date, setDate] = useState("");
  const [city, setCity] = useState<string>(locations[0]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [step, setStep] = useState(0);
  const [error, setError] = useState("");
  const [reference, setReference] = useState("");
  const [today, setToday] = useState("");
  const headingRef = useRef<HTMLHeadingElement>(null);
  const mounted = useRef(false);
  const bike = motorcycles.find((m) => m.slug === bikeId) ?? motorcycles[0];
  const ridePackage =
    ridePackages.find((p) => p.id === packageId) ?? ridePackages[1];
  const total = bike.price * ridePackage.days;
  const end = returnDate(date, ridePackage.days);

  useEffect(() => {
    setToday(localDate());
  }, []);
  useEffect(() => {
    if (mounted.current) headingRef.current?.focus();
    mounted.current = true;
  }, [step, reference]);

  function changeStep(next: number) {
    setError("");
    setStep(next);
  }
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!date || date < localDate() || !end) {
      setError("Choose a start date of today or later.");
      setStep(0);
      return;
    }
    if (step === 0) {
      changeStep(1);
      return;
    }
    if (name.trim().length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError(
        "Enter a name of at least two characters and a valid email address.",
      );
      setStep(1);
      return;
    }
    if (step === 1) {
      changeStep(2);
      return;
    }
    if (!accepted) {
      setError("Please confirm that you understand this is a demo ride plan.");
      return;
    }
    setReference("DEMO-" + crypto.randomUUID().slice(0, 8).toUpperCase());
    setError("");
  }

  const rideDetails = [
    ["Motorcycle", bike.model],
    ["Package", ridePackage.name],
    ["Pickup city", city],
    ["Start date", displayDate(date)],
    ["Return date", displayDate(end)],
    [
      "Duration",
      ridePackage.days + (ridePackage.days === 1 ? " day" : " days"),
    ],
  ];

  if (reference)
    return (
      <div className="shell success-layout">
        <div className="success-icon">
          <CheckCircle2 size={30} />
        </div>
        <p className="eyebrow">A LITTLE CLOSER TO THE OPEN ROAD</p>
        <h1 ref={headingRef} tabIndex={-1}>
          Your demo ride plan
          <br />
          is ready.
        </h1>
        <p>
          This is a preview, not a confirmed reservation. No motorcycle has been
          booked, no payment has been taken, and your details have not been sent
          or saved.
        </p>
        <div className="review-block">
          <h3>Ride plan · {reference}</h3>
          <dl className="summary-rows">
            {rideDetails.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
          <div className="summary-total">
            <span>Estimated rental</span>
            <strong>{formatCurrency(total)}</strong>
          </div>
          <p className="summary-footnote">
            Sample rental only. Fuel, deposits, insurance, and other charges are
            not included. Print this page to keep a copy; the plan resets when
            you leave or refresh.
          </p>
        </div>
        <div className="button-row">
          <button className="button button-dark" onClick={() => window.print()}>
            <Printer size={16} /> Print ride plan
          </button>
          <button
            className="button button-outline"
            onClick={() => {
              setReference("");
              setAccepted(false);
              changeStep(0);
            }}
          >
            Edit this plan
          </button>
          <Link href="/motorcycles" className="text-link">
            Explore more bikes <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    );

  return (
    <div className="shell">
      <div className="page-heading booking-heading">
        <div>
          <p className="eyebrow">YOUR NEXT ESCAPE STARTS HERE</p>
          <h1>
            Let’s plan <em>your ride.</em>
          </h1>
          <p>
            Choose a motorcycle, pick your dates, and review your estimated
            rental. A few simple steps to a better weekend.
          </p>
        </div>
        <span className="demo-badge">
          <Info size={14} /> Demo ride planner · No payment
        </span>
      </div>
      <div className="booking-layout">
        <div className="booking-form">
          <ol className="booking-steps" aria-label="Booking progress">
            {["Your ride", "Your details", "Review plan"].map((label, i) => (
              <li key={label} aria-current={step === i ? "step" : undefined}>
                <span className="step-circle">
                  {step > i ? <Check size={12} /> : i + 1}
                </span>
                {label}
              </li>
            ))}
          </ol>
          <form onSubmit={submit} className="form-panel">
            <h2 ref={headingRef} tabIndex={-1}>
              {
                [
                  "Make the ride your own.",
                  "Who’s taking the ride?",
                  "One last look.",
                ][step]
              }
            </h2>
            <p className="panel-intro">
              {
                [
                  "Choose a bike and how long you’d like to get away.",
                  "Use sample details. Nothing entered here is sent or stored.",
                  "Check the details below before creating your demo plan.",
                ][step]
              }
            </p>
            {step === 0 && (
              <>
                <fieldset>
                  <legend className="field-label">
                    Choose your motorcycle
                  </legend>
                  <div className="choice-list">
                    {motorcycles.map((m) => (
                      <label key={m.id} className="bike-choice">
                        <span className="bike-choice-image">
                          <Image
                            src={m.image}
                            alt=""
                            fill
                            sizes="94px"
                            style={{ objectPosition: m.imagePosition }}
                          />
                        </span>
                        <span>
                          <strong>{m.model}</strong>
                          <small>
                            {m.type} · {formatCurrency(m.price)} / day
                          </small>
                        </span>
                        <input
                          type="radio"
                          name="motorcycle"
                          value={m.slug}
                          checked={bikeId === m.slug}
                          onChange={() => setBikeId(m.slug)}
                        />
                      </label>
                    ))}
                  </div>
                </fieldset>
                <fieldset className="field-group">
                  <legend className="field-label">
                    How long is your escape?
                  </legend>
                  <div className="package-grid">
                    {ridePackages.map((p) => (
                      <label key={p.id} className="package-choice">
                        <input
                          type="radio"
                          name="package"
                          value={p.id}
                          checked={packageId === p.id}
                          onChange={() => setPackageId(p.id)}
                        />
                        <strong>{p.name}</strong>
                        <small>{p.description}</small>
                        <span className="package-days">
                          {p.days} {p.days === 1 ? "day" : "days"}
                        </span>
                      </label>
                    ))}
                  </div>
                </fieldset>
                <div className="form-grid field-group">
                  <label className="field">
                    Start date
                    <input
                      type="date"
                      name="date"
                      required
                      min={today}
                      value={date}
                      onChange={(e) => {
                        setDate(e.target.value);
                        setError("");
                      }}
                    />
                    <small>
                      Your rental ends{" "}
                      {end
                        ? displayDate(end)
                        : "after your selected number of days"}
                      .
                    </small>
                  </label>
                  <label className="field">
                    Pickup city
                    <select
                      name="city"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    >
                      {locations.map((l) => (
                        <option key={l}>{l}</option>
                      ))}
                    </select>
                    <small>Sample pickup cities for this demo.</small>
                  </label>
                </div>
              </>
            )}
            {step === 1 && (
              <div className="form-grid">
                <label className="field field-full">
                  Your name
                  <input
                    name="name"
                    autoComplete="name"
                    required
                    minLength={2}
                    maxLength={80}
                    placeholder="Alex Morgan"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>
                <label className="field field-full">
                  Email address
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    maxLength={120}
                    placeholder="alex@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <small>No confirmation email is sent in this demo.</small>
                </label>
                <label className="field field-full">
                  Anything you’d like us to know? <small>Optional</small>
                  <textarea
                    name="notes"
                    rows={4}
                    maxLength={1000}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Tell us about the ride you have in mind…"
                  />
                </label>
                <div className="info-banner field-full">
                  <Info size={17} />
                  <span>
                    A real rental would require a valid motorcycle licence and
                    eligibility checks. Please do not enter licence or payment
                    details here.
                  </span>
                </div>
              </div>
            )}
            {step === 2 && (
              <>
                <div className="review-block">
                  <h3>Your ride</h3>
                  <dl className="summary-rows">
                    {rideDetails.map(([label, value]) => (
                      <div key={label}>
                        <dt>{label}</dt>
                        <dd>{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <div className="review-block">
                  <h3>Your details</h3>
                  <dl className="summary-rows">
                    <div>
                      <dt>Name</dt>
                      <dd>{name.trim()}</dd>
                    </div>
                    <div>
                      <dt>Email</dt>
                      <dd className="break-all">{email}</dd>
                    </div>
                    {notes.trim() && (
                      <div>
                        <dt>Notes</dt>
                        <dd className="break-words max-w-[70%]">{notes}</dd>
                      </div>
                    )}
                  </dl>
                </div>
                <label className="checkbox-field">
                  <input
                    type="checkbox"
                    name="acknowledgement"
                    checked={accepted}
                    onChange={(e) => setAccepted(e.target.checked)}
                    required
                  />
                  <span>
                    I understand this creates a demo plan only. It does not
                    reserve a motorcycle or take payment.
                  </span>
                </label>
              </>
            )}
            {error && (
              <p className="field-error" role="alert">
                {error}
              </p>
            )}
            <div className="form-actions">
              {step > 0 ? (
                <button
                  type="button"
                  className="button button-outline"
                  onClick={() => changeStep(step - 1)}
                >
                  <ArrowLeft size={15} /> Back
                </button>
              ) : (
                <p>Step 1 of 3</p>
              )}
              <button type="submit" className="button button-orange">
                {step === 0
                  ? "Continue to details"
                  : step === 1
                    ? "Review ride plan"
                    : "Create demo plan"}
                <ArrowRight size={16} />
              </button>
            </div>
          </form>
        </div>
        <aside className="booking-summary" aria-label="Your ride estimate">
          <div className="summary-image">
            <Image
              src={bike.image}
              alt={bike.model}
              fill
              sizes="(max-width: 850px) 100vw, 350px"
              style={{ objectPosition: bike.imagePosition }}
            />
          </div>
          <div className="summary-body">
            <p className="eyebrow">YOUR RIDE, AT A GLANCE</p>
            <h3>{bike.model}</h3>
            <p>
              {bike.color} · {bike.type}
            </p>
            <dl className="summary-rows">
              <div>
                <dt>Package</dt>
                <dd>{ridePackage.name}</dd>
              </div>
              <div>
                <dt>Pickup city</dt>
                <dd>{city}</dd>
              </div>
              <div>
                <dt>Start</dt>
                <dd>{displayDate(date)}</dd>
              </div>
              <div>
                <dt>Return</dt>
                <dd>{displayDate(end)}</dd>
              </div>
              <div>
                <dt>
                  {formatCurrency(bike.price)} × {ridePackage.days}{" "}
                  {ridePackage.days === 1 ? "day" : "days"}
                </dt>
                <dd>{formatCurrency(total)}</dd>
              </div>
            </dl>
            <div
              className="summary-total"
              aria-live="polite"
              aria-atomic="true"
            >
              <span>Estimated rental</span>
              <strong>{formatCurrency(total)}</strong>
            </div>
            <p className="summary-footnote">
              Illustrative rental rate. Fuel, deposits, insurance, and other
              charges are not included. Availability is not checked.
            </p>
          </div>
          <div className="summary-secure">
            <Info size={14} /> Demo only. No reservation or payment.
          </div>
        </aside>
      </div>
    </div>
  );
}
