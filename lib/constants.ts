// ---------------------------------------------------------------------------
// Editable content & configuration for the Qlue marketing site.
// Swap placeholders here — every component reads its content from this file.
// ---------------------------------------------------------------------------

// TODO: point to https://github.com/<owner>/<repo>/releases/latest/download/qlue.apk
// once the release pipeline exists.
export const DOWNLOAD_URL = "#";

// TODO: set to the public GitHub repository URL.
export const GITHUB_URL = "#";

export const NAV_LINKS = [
  { label: "Modules", href: "#modules" },
  { label: "Tech", href: "#tech" },
  { label: "Download", href: "#download" },
];

export interface QlueModule {
  id: string;
  name: string;
  accent: string;
  tagline: string;
  description: string;
  // image?: string; // TODO: add a real screenshot path, then render it inside <PhoneFrame>.
}

export const MODULES: QlueModule[] = [
  {
    id: "resume",
    name: "Resume",
    accent: "#0A84FF",
    tagline: "Interviews that actually read your resume",
    description:
      "Upload your resume and Qlue extracts your projects, skills and experience, then asks the pointed follow-up questions a real interviewer would.",
  },
  {
    id: "hr",
    name: "HR",
    accent: "#FF375F",
    tagline: "Behavioral rounds, on demand",
    description:
      "Practice the classic HR questions — strengths, conflicts, “tell me about a time” — with feedback on how you framed every answer.",
  },
  {
    id: "intro",
    name: "Intro",
    accent: "#30D158",
    tagline: "Nail the first sixty seconds",
    description:
      "Rehearse your self-introduction and elevator pitch until it lands clean, confident and right on time.",
  },
  {
    id: "website",
    name: "Website",
    accent: "#5E5CE6",
    tagline: "Interview for a specific company",
    description:
      "Paste a company or role URL and Qlue reads it, then runs a mock interview tailored to what that team is actually hiring for.",
  },
  {
    id: "jobmatch",
    name: "Job Match",
    accent: "#FF9F0A",
    tagline: "Match yourself to the job description",
    description:
      "Drop in a job description and Qlue interviews you against its requirements, surfacing the gaps to close before the real thing.",
  },
];

export const PROBLEMS = [
  { title: "No structured practice", body: "Students rehearse alone with no format, no pacing, and no sense of what a real round feels like." },
  { title: "No real feedback", body: "Reading answers off a screen tells you nothing about how you actually sound under pressure." },
  { title: "Unrealistic interviewers", body: "Static question lists can't follow up, probe, or react the way a human interviewer does." },
  { title: "Expensive or generic", body: "The alternatives are pricey coaching or one-size-fits-all apps that ignore your resume." },
];

export const SOLUTIONS = [
  { title: "Voice-first", body: "Speak your answers out loud and hear the interviewer respond — the way the real thing works." },
  { title: "Resume-aware", body: "Qlue reads your resume and asks about your actual projects, skills, and experience." },
  { title: "Adaptive follow-ups", body: "Real-time AI listens and digs deeper, just like a human interviewer chasing a thread." },
  { title: "Free for students", body: "No paywall between you and the practice you need to land the offer." },
];

export interface TechItem {
  name: string;
  role: string;
  color: string;
}

export const TECH_STACK: TechItem[] = [
  { name: "Flutter", role: "Cross-platform app", color: "#0A84FF" },
  { name: "AWS Bedrock", role: "Nemotron + Claude 3 Haiku", color: "#FF9F0A" },
  { name: "Amazon Polly", role: "Neural text-to-speech", color: "#5E5CE6" },
  { name: "Amazon Textract", role: "Resume parsing", color: "#34D399" },
  { name: "DynamoDB", role: "Session & user data", color: "#0A84FF" },
  { name: "Firebase Auth", role: "Sign-in", color: "#FF375F" },
  { name: "WebSocket", role: "Real-time voice sessions", color: "#30D158" },
];
