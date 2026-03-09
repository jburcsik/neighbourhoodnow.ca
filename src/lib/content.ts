import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const CONTENT_DIR = path.join(process.cwd(), "content");

export interface CaseStudyFrontmatter {
  title: string;
  client: string;
  sector: string;
  services: string[];
  challenge: string;
  impactMetric: string;
  impactValue: string;
  published: string; // ISO date string
  featured: boolean;
  coverImage?: string;
  testimonial?: { quote: string; author: string; title: string };
}

export interface CaseStudy extends CaseStudyFrontmatter {
  slug: string;
  content: string;
  readingTime: string;
}

export interface InsightFrontmatter {
  title: string;
  excerpt: string;
  author: string;
  published: string;
  tags: string[];
  coverImage?: string;
}

export interface Insight extends InsightFrontmatter {
  slug: string;
  content: string;
  readingTime: string;
}

function readMdxDir<T>(subdir: string): Array<T & { slug: string; content: string; readingTime: string }> {
  const dir = path.join(CONTENT_DIR, subdir);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((filename) => {
      const slug = filename.replace(/\.(mdx|md)$/, "");
      const raw = fs.readFileSync(path.join(dir, filename), "utf-8");
      const { data, content } = matter(raw);
      const rt = readingTime(content);
      return {
        ...(data as T),
        slug,
        content,
        readingTime: rt.text,
      };
    })
    .sort((a, b) => {
      const ad = (a as unknown as { published: string }).published;
      const bd = (b as unknown as { published: string }).published;
      return new Date(bd).getTime() - new Date(ad).getTime();
    });
}

export function getAllCaseStudies(): CaseStudy[] {
  return readMdxDir<CaseStudyFrontmatter>("case-studies") as CaseStudy[];
}

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return getAllCaseStudies().find((cs) => cs.slug === slug);
}

export function getFeaturedCaseStudies(count = 3): CaseStudy[] {
  const all = getAllCaseStudies();
  const featured = all.filter((cs) => cs.featured);
  return featured.length >= count ? featured.slice(0, count) : all.slice(0, count);
}

export function getAllInsights(): Insight[] {
  return readMdxDir<InsightFrontmatter>("insights") as Insight[];
}

export function getInsight(slug: string): Insight | undefined {
  return getAllInsights().find((i) => i.slug === slug);
}
