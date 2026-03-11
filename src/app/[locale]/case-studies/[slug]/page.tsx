import { notFound } from "next/navigation";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { getAllCaseStudies, getCaseStudy } from "@/lib/content";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { ArrowLeft, TrendingUp } from "lucide-react";
import { MDXContent } from "@/components/content/MDXContent";

export function generateStaticParams() {
  return getAllCaseStudies().map((cs) => ({ slug: cs.slug }));
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);

  if (!caseStudy) {
    notFound();
  }

  return <CaseStudyDetail caseStudy={caseStudy} />;
}

function CaseStudyDetail({
  caseStudy,
}: {
  caseStudy: NonNullable<ReturnType<typeof getCaseStudy>>;
}) {
  const t = useTranslations("caseStudies");

  return (
    <>
      <SectionWrapper variant="teal">
        <div>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-1.5 text-sm text-brand-300 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft size={14} />
            {t("backToCaseStudies")}
          </Link>
          <h1 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4 max-w-3xl">
            {caseStudy.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-brand-300">
            <span className="bg-brand-800 px-3 py-1 rounded-sm text-xs font-semibold uppercase tracking-wider text-brand-200">
              {caseStudy.sector}
            </span>
            <span>{caseStudy.client}</span>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="light">
        <div className="max-w-3xl">
          {/* Impact highlight */}
          <div className="bg-brand-50 rounded-sm p-6 border border-brand-100 mb-10 flex items-center gap-6">
            <div className="w-12 h-12 rounded-sm bg-gold-500 flex items-center justify-center shrink-0">
              <TrendingUp size={20} className="text-brand-950" />
            </div>
            <div>
              <div className="text-xs text-slate-400 uppercase tracking-wider mb-0.5">
                {caseStudy.impactMetric}
              </div>
              <div className="font-display text-3xl font-bold text-brand-700">
                {caseStudy.impactValue}
              </div>
            </div>
          </div>

          {/* Challenge */}
          <p className="text-base text-slate-600 leading-relaxed mb-10 italic border-l-2 border-gold-500 pl-4">
            {caseStudy.challenge}
          </p>

          {/* Article content */}
          <article className="prose prose-lg prose-slate prose-headings:font-display prose-headings:text-brand-900 prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:leading-relaxed prose-p:mb-6 prose-li:mb-2 prose-strong:text-brand-800 prose-a:text-brand-600 prose-a:no-underline hover:prose-a:text-gold-600 prose-blockquote:border-gold-500 prose-blockquote:text-slate-600 prose-hr:border-slate-200">
            <MDXContent content={caseStudy.content} />
          </article>

          {/* Testimonial if present */}
          {caseStudy.testimonial && (
            <blockquote className="mt-12 bg-brand-50 rounded-sm p-8 border border-brand-100">
              <p className="text-base text-slate-700 leading-relaxed italic mb-4">
                &ldquo;{caseStudy.testimonial.quote}&rdquo;
              </p>
              <footer className="text-sm text-slate-500">
                <span className="font-semibold text-brand-900">
                  {caseStudy.testimonial.author}
                </span>
                {caseStudy.testimonial.title && (
                  <span>, {caseStudy.testimonial.title}</span>
                )}
              </footer>
            </blockquote>
          )}
        </div>
      </SectionWrapper>
    </>
  );
}
