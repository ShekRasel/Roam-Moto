"use client";

import { teamMembers } from "@/lib/team-data";
import { Instagram, Linkedin, Twitter } from "lucide-react";

export function TeamSection() {
  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.4em] text-accent">
          The Studio
        </p>
        <h2 className="font-accent text-4xl font-bold uppercase tracking-[0.12em] text-white">
          Crafted by experts
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="glass-panel rounded-[32px] border border-white/10 p-6 shadow-premium"
          >
            <div className="overflow-hidden rounded-[28px] border border-white/10 bg-black/40">
              <img
                src={member.image}
                alt={member.name}
                className="h-56 w-full object-cover"
              />
            </div>
            <div className="mt-5 space-y-3">
              <p className="text-xl font-semibold text-white">{member.name}</p>
              <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                {member.role}
              </p>
              <p className="text-sm leading-7 text-white/70">{member.bio}</p>
            </div>
            <div className="mt-5 flex items-center gap-3 text-white/70">
              {member.social?.instagram && (
                <a
                  href={`https://instagram.com/${member.social.instagram}`}
                  className="transition hover:text-accent"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Instagram size={18} />
                </a>
              )}
              {member.social?.linkedin && (
                <a
                  href={`https://linkedin.com/in/${member.social.linkedin}`}
                  className="transition hover:text-accent"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin size={18} />
                </a>
              )}
              {member.social?.twitter && (
                <a
                  href={`https://twitter.com/${member.social.twitter}`}
                  className="transition hover:text-accent"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Twitter size={18} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
