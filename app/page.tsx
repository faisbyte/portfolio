"use client";
import { useEffect } from "react";
type Link = { label: string; href: string };

const PROFILE = {
  initials: "FN",
  name: "Faisal Naveed",
  headline:
    "Software developer with experience in full-stack systems, data pipelines, and applied ML.",
  // Fill these in (your CV text had “Email | … | LinkedIn” but not the actual URLs)
  links: [
    { label: "Resume", href: "/resume.pdf" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/your-handle" },
    { label: "GitHub", href: "https://github.com/your-handle" },
  ] as Link[],
  location: "Sydney, Australia",
};

const EDUCATION = [
  {
    title: "Bachelor of Advanced Computing (Computational Data Science & BIS)",
    org: "The University of Sydney",
    period: "Jul 2023 – Jun 2027",
    highlight: "WAM: 78",
  },
];

const EXPERIENCE = [
  {
    title: "Business Development & Technology Solutions Design Lead",
    org: "Multivrse (Sydney, NSW)",
    period: "Oct 2025 – Present",
    bullets: [
      "Migrating organisation software from AWS to Akamai Linode",
      "Heading outreach and organising founding client meetings",
      "Structured data pipeline for multilingual RAG AI chatbot",
    ],
  },
  {
    title: "Software Developer",
    org: "Aurm (Bangalore, India)",
    period: "Jan 2026 – Mar 2026",
    bullets: [
      "Structured FaceID service codebase; implemented gender detection via Base64 image inputs",
      "Defined client transactions; built pipeline for vault cameras to capture and store recordings locally + cloud upload",
      "Modelled MongoDB to support transactions in bay area + vault workflows",
      "Automated vault recording for error/edge-case events",
    ],
  },
];

const PROJECTS = [
  {
    title: "Predicting 30-Second Stock Volatility (HFT Order Book)",
    period: "Project",
    bullets: [
      "Engineered 19 lagged features from 10-minute windows to predict next-30s volatility",
      "Benchmarked HAR-RV, GAM, LightGBM; stepwise HAR-RV performed best on composite R² + QLIKE",
      "Built an interactive Shiny app for visualisations + on-demand training",
    ],
    tags: ["Python", "Time Series", "Feature Engineering", "Shiny"],
    links: [] as Link[], // add GitHub/demo links later
  },
  {
    title: "Airline Operations DBMS (Flask, Tailwind, PostgreSQL)",
    period: "Project",
    bullets: [
      "Full-stack admin app to manage flights + passenger data across ~1M rows",
      "Designed schema + indexes; implemented CRUD, filters, joins, server-side pagination",
      "Optimised SQL queries for responsiveness at scale",
    ],
    tags: ["Flask", "PostgreSQL", "Tailwind", "DBMS"],
    links: [] as Link[],
  },
];

const CERTIFICATIONS = [
  {
    title: "Google Advanced Data Analytics Professional Certificate",
    meta: "ID: IEWYXOK2W89R",
  },
  {
    title: "Google Machine Learning Professional Certificate",
    meta: "ID: PY6P4N95AU86",
  },
  { title: "Quantium Data Analytics Simulation", meta: "ID: Fz3Mt4pmcNou8FZsC" },
];

const SKILLS = {
  "Programming & DB": [
    "Python",
    "Java",
    "Swift",
    "JavaScript",
    "HTML/CSS",
    "R",
    "MySQL",
    "PostgreSQL",
    "Oracle",
  ],
  "Analytics & Tools": [
    "Pandas",
    "NumPy",
    "GeoPandas",
    "Scikit-Learn",
    "Statsmodels",
    "Plotly",
    "Power BI",
    "Tableau",
    "Figma",
    "Excel",
  ],
  "Soft Skills": [
    "Communication",
    "Collaboration",
    "Problem Solving",
    "Leadership",
    "Creativity",
  ],
};

function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-4xl px-6 sm:px-10">{children}</div>
  );
}

function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-14">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        {subtitle ? (
          <p className="mt-2 text-sm text-[var(--muted)]">{subtitle}</p>
        ) : null}
      </div>
      {children}
    </section>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm">
      {children}
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted)]">
      {children}
    </span>
  );
}

export default function Home() {
  useEffect(() => {
    const root = document.documentElement;
    let ticking = false;

    const setVars = () => {
      // keep motion bounded so it doesn't drift forever
      const t = (window.scrollY || 0) % 1600;

      root.style.setProperty("--s1", `${t * 0.18}px`);
      root.style.setProperty("--s2", `${t * -0.10}px`);
      root.style.setProperty("--s3", `${t * 0.06}px`);
      root.style.setProperty("--s4", `${t * -0.04}px`);
      root.style.setProperty("--s5", `${t * 0.12}px`);

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(setVars);
      }
    };

    setVars();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  const nav = [
    { label: "Education", href: "#education" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Technologies", href: "#technologies" },
    { label: "Certifications", href: "#certifications" },
  ];

  return (
    <div className="min-h-screen">
      {/* Sticky header */}
      <div className="sticky top-0 z-50 bg-transparent">
        <Container>
          <div className="flex h-14 items-center justify-between">
            <a href="#" className="flex items-center gap-3">
            </a>

            <nav className="hidden items-center gap-5 sm:flex">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-[var(--muted)] hover:text-[var(--foreground)]"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[var(--border)] px-4 py-2 text-sm hover:bg-black/5 dark:hover:bg-white/10"
              >
                Resume
              </a>
            </nav>
          </div>
        </Container>
      </div>

      {/* Hero */}
      <Container>
        <div className="py-14">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              {PROFILE.name}
            </h1>
            <p className="max-w-2xl text-base leading-7 text-[var(--muted)]">
              {PROFILE.headline}
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center rounded-full bg-[var(--foreground)] px-6 text-sm font-medium text-[var(--background)] hover:opacity-90"
              >
                See Resume
              </a>
              {PROFILE.links
                .filter((l) => l.label !== "Resume")
                .map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center justify-center rounded-full border border-[var(--border)] px-6 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10"
                  >
                    {l.label}
                  </a>
                ))}
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              <Pill>{PROFILE.location}</Pill>
              <Pill>Full-stack</Pill>
              <Pill>Data Science</Pill>
              <Pill>Applied ML</Pill>
            </div>
          </div>
        </div>
      </Container>

      {/* Sections */}
      <Container>
        <Section
          id="education"
          title="Education"
          subtitle="Where I studied and what I’m currently focused on."
        >
          <div className="grid gap-4">
            {EDUCATION.map((e) => (
              <Card key={e.title}>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="text-base font-semibold">{e.title}</div>
                    <div className="text-sm text-[var(--muted)]">{e.org}</div>
                  </div>
                  <div className="text-sm text-[var(--muted)]">{e.period}</div>
                </div>
                <div className="mt-3">
                  <Pill>{e.highlight}</Pill>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          id="experience"
          title="Experience"
          subtitle="Roles where I shipped real systems and owned deliverables."
        >
          <div className="grid gap-4">
            {EXPERIENCE.map((x) => (
              <Card key={x.title + x.org}>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="text-base font-semibold">{x.title}</div>
                    <div className="text-sm text-[var(--muted)]">{x.org}</div>
                  </div>
                  <div className="text-sm text-[var(--muted)]">{x.period}</div>
                </div>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
                  {x.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          id="projects"
          title="Projects"
          subtitle="A few things I’ve built that show range: data → apps → DB systems."
        >
          <div className="grid gap-4">
            {PROJECTS.map((p) => (
              <Card key={p.title}>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div className="text-base font-semibold">{p.title}</div>
                  <div className="text-sm text-[var(--muted)]">{p.period}</div>
                </div>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
                  {p.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Pill key={t}>{t}</Pill>
                  ))}
                </div>

                {p.links.length ? (
                  <div className="mt-4 flex flex-wrap gap-3">
                    {p.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium hover:underline"
                      >
                        {l.label} →
                      </a>
                    ))}
                  </div>
                ) : null}
              </Card>
            ))}
          </div>
        </Section>

        <Section
          id="technologies"
          title="Technologies"
          subtitle="Languages, frameworks, and tools I’ve used in production and projects."
        >
          <div className="grid gap-4 sm:grid-cols-3">
            {Object.entries(SKILLS).map(([k, items]) => (
              <Card key={k}>
                <div className="text-sm font-semibold">{k}</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {items.map((s) => (
                    <Pill key={s}>{s}</Pill>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          id="certifications"
          title="Certifications"
          subtitle="Formal credentials that back up the work."
        >
          <div className="grid gap-4">
            {CERTIFICATIONS.map((c) => (
              <Card key={c.title}>
                <div className="text-base font-semibold">{c.title}</div>
                <div className="mt-1 text-sm text-[var(--muted)]">{c.meta}</div>
              </Card>
            ))}
          </div>
        </Section>

        <footer className="py-12 text-center text-sm text-[var(--muted)]">
          © {new Date().getFullYear()} {PROFILE.name}. Built with Next.js + Tailwind.
        </footer>
      </Container>
    </div>
  );
}
