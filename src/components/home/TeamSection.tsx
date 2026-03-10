import Image from "next/image";
import { useTranslations } from "next-intl";
import { Linkedin } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionLabel from "@/components/ui/SectionLabel";
import { team } from "@/data/team";

export default function TeamSection() {
  const t = useTranslations("team");

  return (
    <SectionWrapper variant="dark" id="team">
      <div className="text-center mb-14">
        <SectionLabel light>{t("sectionLabel")}</SectionLabel>
        <h2 className="font-display text-4xl lg:text-5xl font-bold text-white max-w-2xl mx-auto leading-tight">
          {t("headline")}
        </h2>
        <p className="mt-4 text-brand-300 max-w-xl mx-auto text-base leading-relaxed">
          {t("subheadline")}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {team.map((member) => (
          <div
            key={member.name}
            className="group relative bg-brand-900 rounded-sm overflow-hidden border border-brand-800 hover:border-brand-600 transition-colors"
          >
            {/* Photo */}
            <div className="relative h-64 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
              <Image
                src={member.photo}
                alt={member.name}
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/80 via-transparent to-transparent" />
            </div>

            {/* Info */}
            <div className="p-5">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-display font-bold text-white text-base leading-tight">
                    {member.name}
                    {member.credentials && (
                      <span className="text-gold-400 text-sm ml-1">
                        {member.credentials}
                      </span>
                    )}
                  </h3>
                  <p className="text-xs text-brand-400 mt-1 leading-snug">
                    {member.title}
                  </p>
                </div>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-brand-500 hover:text-gold-400 transition-colors mt-0.5"
                    aria-label={`${member.name} on LinkedIn`}
                  >
                    <Linkedin size={15} />
                  </a>
                )}
              </div>
              <p className="text-xs text-brand-400 leading-relaxed mt-3 line-clamp-3">
                {member.bio}
              </p>
            </div>

            {/* Gold bottom accent on hover */}
            <div className="h-0.5 bg-gold-gradient scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
