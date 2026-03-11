import { notFound } from "next/navigation";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { getAllInsights, getInsight } from "@/lib/content";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { ArrowLeft, Clock } from "lucide-react";
import { MDXContent } from "@/components/content/MDXContent";

export function generateStaticParams() {
  return getAllInsights().map((i) => ({ slug: i.slug }));
}

export default async function InsightDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const insight = getInsight(slug);

  if (!insight) {
    notFound();
  }

  return <InsightDetail insight={insight} />;
}

function InsightDetail({
  insight,
}: {
  insight: ReturnType<typeof getInsight> & {};
}) {
  const t = useTranslations("insightsPage");

  return (
    <>
      <SectionWrapper variant="teal">
        <div>
          <Link
            href="/insights"
            className="inline-flex items-center gap-1.5 text-sm text-brand-300 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft size={14} />
            {t("backToInsights")}
          </Link>
          <h1 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4 max-w-3xl">
            {insight.title}
          </h1>
          <div className="flex items-center gap-3 text-sm text-brand-300">
            <span>{insight.author}</span>
            <span>·</span>
            <span>
              {new Date(insight.published).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span>·</span>
            <Clock size={14} />
            <span>{insight.readingTime}</span>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="light">
        <article className="max-w-3xl prose prose-lg prose-slate prose-headings:font-display prose-headings:text-brand-900 prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:leading-relaxed prose-p:mb-6 prose-li:mb-2 prose-strong:text-brand-800 prose-a:text-brand-600 prose-a:no-underline hover:prose-a:text-gold-600 prose-blockquote:border-gold-500 prose-blockquote:text-slate-600 prose-hr:border-slate-200">
          <MDXContent content={insight.content} />
        </article>
      </SectionWrapper>
    </>
  );
}
