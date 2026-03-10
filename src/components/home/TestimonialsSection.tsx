import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "CivSafe brought a level of strategic clarity and implementation rigour we hadn't experienced before. They didn't just hand us a report — they built the capability within our teams to sustain the transformation.",
    author: "Director of Digital Strategy",
    org: "City of Calgary",
    sector: "Municipal Government",
  },
  {
    quote:
      "The framework they developed gave us the language, the evidence, and the governance structure to take AI investment proposals through Treasury Board with confidence. That's not a small thing.",
    author: "Assistant Deputy Minister",
    org: "Province of Ontario",
    sector: "Provincial Government",
  },
  {
    quote:
      "Jesse and his team understood something most agile consultants miss: you can't impose methodology on a culture. They built trust first, then built capability. The results speak for themselves.",
    author: "Vice President, Technology & Innovation",
    org: "BC Housing",
    sector: "Crown Corporation",
  },
];

export default function TestimonialsSection() {
  return (
    <SectionWrapper variant="light">
      <div className="text-center mb-14">
        <SectionLabel>What Clients Say</SectionLabel>
        <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-900 max-w-2xl mx-auto leading-tight">
          Results Speak Louder
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map(({ quote, author, org, sector }) => (
          <div
            key={author}
            className="relative bg-slate-50 border border-slate-100 rounded-sm p-8"
          >
            <Quote
              size={32}
              className="text-brand-100 mb-4"
              fill="currentColor"
              strokeWidth={0}
            />
            <p className="text-slate-700 text-sm leading-relaxed mb-6 italic">
              &ldquo;{quote}&rdquo;
            </p>
            <div className="border-t border-slate-200 pt-4">
              <div className="font-semibold text-brand-800 text-sm">{author}</div>
              <div className="text-xs text-brand-600 mt-0.5">{org}</div>
              <div className="text-[11px] text-slate-400 uppercase tracking-wider mt-1">
                {sector}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
