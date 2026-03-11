export interface TeamMember {
  key: string;
  name: string;
  credentials: string;
  photo: string;
  linkedin?: string;
}

export const team: TeamMember[] = [
  {
    key: "jesse",
    name: "Jesse Burcsik",
    credentials: "",
    photo: "https://upload.wikimedia.org/wikipedia/en/6/62/Elmo_%28Sesame_Street%29.jpeg",
    linkedin: "https://linkedin.com",
  },
  {
    key: "margaret",
    name: "Dr. Margaret Chen",
    credentials: "PhD, MPA",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    linkedin: "https://linkedin.com",
  },
  {
    key: "robert",
    name: "Robert Thibodeau",
    credentials: "PMP, ICD.D",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
    linkedin: "https://linkedin.com",
  },
  {
    key: "priya",
    name: "Priya Sharma",
    credentials: "MBA, PMP",
    photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&crop=face",
    linkedin: "https://linkedin.com",
  },
];
