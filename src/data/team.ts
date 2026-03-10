export interface TeamMember {
  name: string;
  title: string;
  credentials: string;
  bio: string;
  photo: string;
  linkedin?: string;
}

export const team: TeamMember[] = [
  {
    name: "Jesse Burcsik",
    title: "Founder & Principal Strategist",
    credentials: "",
    bio: "With two decades at the intersection of technology, organizational design, and community development, Jesse has led transformations for municipal governments, crown corporations, and Fortune 500 enterprises. His practitioner-first philosophy has made CivSafe a trusted partner for leaders navigating complex change.",
    photo: "https://upload.wikimedia.org/wikipedia/en/6/62/Elmo_%28Sesame_Street%29.jpeg",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Dr. Margaret Chen",
    title: "Director, Public Sector Innovation",
    credentials: "PhD, MPA",
    bio: "Dr. Chen brings 18 years of senior advisory experience within federal and provincial government, including stints at the Privy Council Office and the BC Ministry of Citizens' Services. Her expertise in evidence-based policy design and public sector digital transformation underpins CivSafe's government practice.",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Robert Thibodeau",
    title: "Senior Advisor, Government Relations",
    credentials: "PMP, ICD.D",
    bio: "Robert's 25-year career spans deputy minister-level advisory roles, board directorships, and senior consulting engagements with national and international clients. He specializes in stakeholder alignment, grant strategy, and navigating the political economy of large-scale public investment programs.",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Priya Sharma",
    title: "Lead, Digital Transformation",
    credentials: "MBA, PMP",
    bio: "Priya leads CivSafe's enterprise automation and AI readiness practice. Prior to joining the firm, she held senior product and transformation roles at two of Canada's Big Five banks and a national logistics company, delivering complex technology portfolios in regulated environments.",
    photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&crop=face",
    linkedin: "https://linkedin.com",
  },
];
