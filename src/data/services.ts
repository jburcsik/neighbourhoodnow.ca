import {
  Brain,
  Zap,
  RefreshCw,
  Building2,
  Users,
  FileText,
} from "lucide-react";

export interface ServiceDef {
  key: string;
  slug: string;
  Icon: typeof Brain;
}

export const services: ServiceDef[] = [
  { key: "aiReadiness", slug: "ai-readiness", Icon: Brain },
  { key: "automation", slug: "automation", Icon: Zap },
  { key: "agile", slug: "agile-coaching", Icon: RefreshCw },
  { key: "civic", slug: "civic-consulting", Icon: Building2 },
  { key: "leadership", slug: "leadership-development", Icon: Users },
  { key: "grant", slug: "grant-strategy", Icon: FileText },
];

export function getServiceBySlug(slug: string): ServiceDef | undefined {
  return services.find((s) => s.slug === slug);
}
