type Now = { url: string; line: string; role: string; status: string; hidden?: boolean };
type Job = {
  company: string;
  role: string;
  start: string;
  end: string;
  href?: string;
  line: string; // one or two sentences: what it was → what I did → one fact
};
type SkillGroup = { dir: string; items: string[] };

export const site = {
  name: "Prince Ali Khan",
  handle: "PrinceAliKhan_",
  url: "https://princealikhan.com",
  bio: "co-founder at deepsmith.ai. 12+ years of building and shipping products.",
  location: "bengaluru",
  links: {
    x: "https://x.com/PrinceAliKhan_",
    linkedin: "https://www.linkedin.com/in/princealikhan",
    github: "https://github.com/princealikhan",
  },
  proof: ["500k users", "52 enterprise clients", "1 exit (zoojoo.BE → RoundGlass, 2018)"],

  now: [
    {
      url: "deepsmith.ai",
      line: "see where your brand shows up in AI search, then ship content that closes the gaps.",
      role: "co-founder, product",
      status: "shipping",
    },
    // TODO(aeonut): write `line`, set hidden: false when it launches (~Nov 2026)
    { url: "aeonut.com", line: "", role: "co-founder", status: "soon", hidden: true },
  ] satisfies Now[],

  work: [
    {
      company: "deepsmith.ai",
      role: "co-founder, product",
      start: "2025",
      end: "now",
      href: "https://deepsmith.ai",
      line: "AI search visibility and content production for marketing teams. Started as WarpAI, a sales-automation agent (Mar 2025); pivoted to AI search in Jan 2026.",
    },
    {
      company: "OneJam",
      role: "co-founder",
      start: "2023",
      end: "now",
      href: "https://onejam.io",
      line: "Digital sales rooms for B2B deals. Built the backend and took it to market. Now the company behind deepsmith.ai.",
    },
    {
      company: "Stackin",
      role: "founder",
      start: "2022",
      end: "2023",
      // TODO: one line on what Stackin was
      line: "Solo founder. Built and shipped the whole product alone: code, infra, go-to-market. 14 months, then closed it.",
    },
    {
      company: "RoundGlass",
      role: "software developer → senior",
      start: "2018",
      end: "2022",
      href: "https://round.glass",
      line: "Joined through the zoojoo.BE acquisition. Shipped the Aware meditation app redesign: 27 courses and 50 singles in year one.",
    },
    {
      company: "zoojoo.BE",
      role: "software engineer",
      start: "2015",
      end: "2018",
      line: "Habit-forming wellness app for companies. Built web + mobile. 500k users, 52 corporate clients (HP, Accenture, Tesco, Bayer, JLL); acquired by RoundGlass in 2018.",
    },
    {
      company: "Edumob e-learning",
      role: "co-founder",
      start: "2014",
      end: "2015",
      line: "First startup. E-learning platform for institutions.",
    },
  ] satisfies Job[],

  skills: [
    { dir: "product", items: ["strategy", "roadmaps & PRDs", "user research", "UX & design systems", "prototyping", "A/B testing", "go-to-market"] },
    { dir: "engineering", items: ["Go", "Python", "JavaScript / TypeScript", "PHP / Laravel", "React / React Native", "MySQL", "microservices", "API design"] },
    { dir: "ai-infra", items: ["agentic AI", "vector DBs", "AWS", "GCP", "Azure", "Docker / Kubernetes", "CI/CD"] },
  ] satisfies SkillGroup[],
};
