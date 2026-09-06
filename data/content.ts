/**
 * All page content lives here. Components read from this file and nothing else,
 * so a new project or role is an object literal, not a JSX edit.
 */

export type Link = { label: string; href: string };

export type WorkEntry = {
  title: string;
  /** Secondary line under the title: a role, an institution, whatever fits. */
  subtitle?: string;
  /** Right-hand metadata slot. Free text so entries without dates still work. */
  period: string;
  href?: string;
  /** Real paragraphs. Each string is one <p>. */
  body: string[];
  tags?: string[];
};

export type Role = {
  company: string;
  href?: string;
  title: string;
  location: string;
  period: string;
  points: string[];
};

export type CommunityEntry = {
  title: string;
  href?: string;
  detail: string;
  period: string;
};

export type SkillGroup = { label: string; items: string };

export const profile = {
  name: "Faisal Naveed",
  intro:
    "Final-year computer science student at the University of Sydney and co-founder of Mudivu, where I build multi-agent LLM systems and the backend infrastructure they run on.",
  location: "Based in Sydney.",
  email: "faisalnaveed1011@gmail.com",
  linkedin: "https://www.linkedin.com/in/faisal-naveed-32bb55288/",
  /** Fill in the handle URL and the link appears in the hero and footer. */
  github: "",
  resume: "/resume.pdf",
  siteUrl: "https://faisalnaveed.vercel.app",
};

export const work: WorkEntry[] = [
  {
    title: "Mudivu",
    subtitle: "Co-founder",
    period: "Jun 2026 - Present",
    href: "https://www.mudivu.in/",
    body: [
      "Mudivu is an AI human-simulation platform for enterprise consumer decision-making: a multi-agent LLM system that predicts how Indian consumers respond to pricing, packaging, and campaign decisions.",
      "The agent model is a two-round deliberation pipeline with peer influence. Each agent is grounded in an eight-parameter behavioural-economics profile calibrated from Census, PLFS, and NFHS-5 distributions, so the behaviour comes out of the calibration rather than out of prompt engineering.",
      "We benchmarked the simulation against Euromonitor market-share data across 19 brands and 1,500 simulated choices, reaching 2.09% mean absolute error and 0.108 KL divergence.",
      "I built the product surface and the infrastructure under it: a FastAPI backend, a React and Vite dashboard, the ingestion and benchmarking stack, and a distributed execution layer that runs more than 5,000 concurrent agents.",
      "Backed by Campus Fund (SEBI-registered), with Prestige Estates Projects Limited (NSE/BSE-listed) as design partner.",
    ],
    tags: ["Python", "FastAPI", "multi-agent LLM systems", "React", "distributed systems"],
  },
  {
    title: "Honours thesis",
    subtitle: "University of Sydney",
    period: "In progress",
    body: [
      "Honours thesis on data freshness in MongoDB cloud databases.",
    ],
    tags: ["MongoDB", "distributed data"],
  },
];

export const experience: Role[] = [
  {
    company: "Multivrse Digital",
    href: "https://www.multivrse.digital/",
    title: "Full Stack Developer Intern",
    location: "Sydney",
    period: "Dec 2025 - Apr 2026",
    points: [
      "Assisted the migration of production infrastructure from AWS to Akamai Linode with no customer-facing downtime.",
      "Owned a multilingual RAG chatbot end to end, from retrieval pipeline to model selection and integration, enabling automated support across 16 languages.",
      "Shipped and maintained the company's production web presence with CI/CD deployments, performance tuning, and technical SEO.",
      "Ran early-stage business development: outreach, founding-client meetings, and translating client requirements into technical scope.",
    ],
  },
  {
    company: "Aurm",
    href: "https://aurm.in/",
    title: "Software Developer Intern",
    location: "Bangalore",
    period: "Jan 2026 - Feb 2026",
    points: [
      "Owned the automated vault-recording pipeline: onboarded cameras trigger on client transaction and system events and persist recordings locally with cloud upload, removing manual capture from every vault session.",
      "Built the event-driven notification workflow on AWS SNS/SQS, decoupling recording triggers from downstream consumers so failed and edge-case events retry instead of dropping.",
      "Restructured the FaceID service codebase and integrated gender detection into it; modelled the MongoDB schema backing client transactions across Aurm's Bay Area and Vault products.",
    ],
  },
];

export const community: CommunityEntry[] = [
  {
    title: "The University of Sydney",
    href: "https://www.sydney.edu.au/",
    detail: "Bachelor of Advanced Computing (Honours), Computational Data Science.",
    period: "Jul 2023 - Aug 2027",
  },
  {
    title: "Sydney University Artificial Intelligence Association",
    href: "https://www.suaia.org/",
    detail:
      "Founding Member and Treasurer. Co-founded USYD's first student-run AI society; ran workshops, speaker sessions, and industry nights, and scaled it to roughly 600 members.",
    period: "Dec 2024 - Present",
  },
];

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    items: "Python, TypeScript, JavaScript, Java, Swift, R, SQL",
  },
  {
    label: "AI/ML",
    items:
      "LangChain, LiteLLM, RAG pipelines, multi-agent systems, sentence-transformers, vector search (pgvector, ChromaDB), structured LLM output (Pydantic/instructor), OpenAI / Anthropic / Gemini APIs, scikit-learn, LightGBM",
  },
  {
    label: "Backend & infrastructure",
    items:
      "FastAPI, Docker, AWS (SNS, SQS, EC2, S3), Akamai Linode, CI/CD, REST API design, async Python, SQLAlchemy",
  },
  {
    label: "Data",
    items:
      "Pandas, NumPy, GeoPandas, Statsmodels, PostgreSQL, MySQL, MongoDB, Plotly, Power BI, Tableau",
  },
  {
    label: "Frontend",
    items: "React, Vite, Next.js",
  },
];
