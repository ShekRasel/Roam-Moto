"use client";
import { FormEvent, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Info } from "lucide-react";
export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const resultRef = useRef<HTMLDivElement>(null);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (
      String(data.get("name")).trim().length < 2 ||
      String(data.get("message")).trim().length < 10
    ) {
      setError(
        "Please enter your name and a message of at least 10 characters.",
      );
      return;
    }
    setError("");
    setSubmitted(true);
    requestAnimationFrame(() => resultRef.current?.focus());
  }
  return (
    <div className="shell">
      <div className="page-heading">
        <p className="eyebrow">LET’S TALK RIDES</p>
        <h1>
          Good questions.
          <br />
          <em>Great conversations.</em>
        </h1>
        <p>
          Curious about the bikes, the experience, or the idea behind it? You’re
          in the right place.
        </p>
      </div>
      <div className="contact-layout">
        <div className="contact-copy">
          <h2>
            A little help
            <br />
            for the road ahead.
          </h2>
          <p>
            Start with the collection to find your riding style, or explore the
            ride planner to see how the packages work.
          </p>
          <div className="contact-topics">
            <div>
              <h3>Choosing a motorcycle</h3>
              <p>Compare sport bikes and roadsters to find the right fit.</p>
            </div>
            <div>
              <h3>Planning your time</h3>
              <p>Try a day escape, a weekend away, or a longer break.</p>
            </div>
          </div>
          <Link href="/#how-it-works" className="text-link">
            See how it works <ArrowUpRight size={17} />
          </Link>
          <div className="info-banner mt-6">
            <Info size={18} />
            <span>
              This is a demo contact form. Your message is not sent or stored.
              Please use sample details.
            </span>
          </div>
        </div>
        <form
          className="form-panel"
          onSubmit={submit}
          onChange={() => {
            setSubmitted(false);
            setError("");
          }}
        >
          <h2>Try an enquiry</h2>
          <p className="panel-intro">
            Preview the experience with a sample message.
          </p>
          <div className="form-grid">
            <label className="field">
              Your name
              <input
                name="name"
                autoComplete="name"
                placeholder="Alex Morgan"
                required
                minLength={2}
                maxLength={80}
              />
            </label>
            <label className="field">
              Email address
              <input
                name="email"
                type="email"
                autoComplete="email"
                placeholder="alex@example.com"
                required
                maxLength={120}
              />
            </label>
            <label className="field field-full">
              What’s on your mind?
              <select name="subject" defaultValue="" required>
                <option value="" disabled>
                  Choose a topic
                </option>
                <option>Choosing a motorcycle</option>
                <option>Planning a ride</option>
                <option>About Velocity Studio</option>
                <option>Something else</option>
              </select>
            </label>
            <label className="field field-full">
              Your message
              <textarea
                name="message"
                rows={5}
                required
                minLength={10}
                maxLength={2000}
                placeholder="Tell us what you have in mind…"
              />
            </label>
          </div>
          {error && (
            <p className="field-error" role="alert">
              {error}
            </p>
          )}
          <div className="form-actions">
            <p>No message will be sent.</p>
            <button className="button button-orange" type="submit">
              Preview enquiry <ArrowUpRight size={17} />
            </button>
          </div>
          {submitted && (
            <div
              className="contact-success"
              role="status"
              tabIndex={-1}
              ref={resultRef}
            >
              <strong>Your sample enquiry is ready.</strong>
              <br />
              In a live service, this would go to the team. This demo has not
              sent or saved your details.
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
