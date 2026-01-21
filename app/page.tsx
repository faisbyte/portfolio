"use client";

import { useEffect } from "react";

type Link = { label: string; href: string };

const PROFILE = {
  name: "Faisal Naveed",
  // update these 2 links
  links: {
    linkedin: "https://www.linkedin.com/in/your-handle",
    github: "https://github.com/your-handle",
    resume: "/resume.pdf",
  },
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

const CERTIFICATIONS = [
  { title: "Google Advanced Data Analytics Professional Certificate", meta: "ID: IEWYXOK2W89R" },
  { title: "Google Machine Learning Professional Certificate", meta: "ID: PY6P4N95AU86" },
  { title: "Quantium Data Analytics Simulation", meta: "ID: Fz3Mt4pmcNou8FZsC" },
];

const SKILLS = {
  "Programming & DB": ["Python", "Java", "Swift", "JavaScript", "HTML/CSS", "R", "MySQL", "PostgreSQL", "Oracle"],
  "Analytics & Tools": ["Pandas", "NumPy", "GeoPandas", "Scikit-Learn", "Statsmodels", "Plotly", "Power BI", "Tableau", "Figma", "Excel"],
  "Soft Skills": ["Communication", "Collaboration", "Problem Solving", "Leadership", "Creativity"],
};

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-4xl px-6 sm:px-10">{children}</div>;
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
        {subtitle ? <p className="mt-2 text-sm text-black/80">{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white/28 backdrop-blur-md p-5 shadow-sm">
      {children}
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="
        inline-flex items-center
        rounded-full px-4 py-2
        text-sm font-medium
        border border-black/10
        bg-white/35 backdrop-blur-md shadow-sm
        text-black
        transition-colors
        hover:bg-black hover:text-white
      "
    >
      {children}
    </span>
  );
}

function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5ZM.5 23.5h4V7.98h-4V23.5ZM8.5 7.98h3.83v2.12h.05c.53-1.01 1.82-2.12 3.75-2.12 4.01 0 4.75 2.64 4.75 6.08v9.44h-4v-8.37c0-2-.04-4.57-2.79-4.57-2.79 0-3.22 2.18-3.22 4.43v8.51h-4V7.98Z" />
    </svg>
  );
}

function IconGitHub() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.73.5.75 5.74.75 12.22c0 5.18 3.31 9.57 7.9 11.12.58.11.79-.26.79-.57v-2.05c-3.22.71-3.9-1.6-3.9-1.6-.52-1.37-1.27-1.74-1.27-1.74-1.04-.73.08-.71.08-.71 1.15.08 1.76 1.2 1.76 1.2 1.02 1.78 2.67 1.26 3.32.96.1-.76.4-1.26.72-1.55-2.57-.3-5.28-1.32-5.28-5.87 0-1.3.45-2.36 1.18-3.19-.12-.3-.51-1.52.11-3.18 0 0 .97-.32 3.18 1.22a10.7 10.7 0 0 1 2.9-.4c.98 0 1.97.14 2.9.4 2.2-1.54 3.17-1.22 3.17-1.22.63 1.66.24 2.88.12 3.18.73.83 1.17 1.89 1.17 3.19 0 4.56-2.72 5.56-5.31 5.86.41.37.78 1.08.78 2.17v3.22c0 .31.21.68.8.57 4.58-1.55 7.89-5.94 7.89-11.12C23.25 5.74 18.27.5 12 .5Z" />
    </svg>
  );
}

function IconPaper() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7l-5-5Zm1 7V3.5L18.5 9H15ZM8 13h8v2H8v-2Zm0 4h8v2H8v-2Zm0-8h6v2H8V9Z" />
    </svg>
  );
}

export default function Home() {
  // keep the “tie dye flows as you scroll” effect
  useEffect(() => {
    const root = document.documentElement;
    let ticking = false;

    const setVars = () => {
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
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Technologies", href: "#technologies" },
    { label: "Certifications", href: "#certifications" },
    { label: "Volunteering", href: "#volunteering" },
  ];

  const navBtn =
    "rounded-full px-6 py-3 text-base font-medium border border-black/10 bg-white/35 backdrop-blur-md shadow-sm text-black transition-colors hover:bg-black hover:text-white";
  const iconBtn =
    "grid h-12 w-12 place-items-center rounded-2xl border border-black/10 bg-white/35 backdrop-blur-md shadow-sm text-black transition-colors hover:bg-black hover:text-white";

  return (
    <div className="min-h-screen">
      {/* Centered “liquid glass” nav */}
      <div className="sticky top-0 z-50">
        <Container>
          <div className="flex items-center justify-center py-4">
            <nav className="flex flex-wrap items-center justify-center gap-3">
              {nav.map((item) => (
                <a key={item.href} href={item.href} className={navBtn}>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </Container>
      </div>

      {/* Clean hero (less content on load) */}
      <Container>
        <div className="min-h-[72vh] flex flex-col items-center justify-center text-center gap-6">
          <h1 className="text-6xl font-semibold tracking-tight sm:text-7xl">
            {PROFILE.name}
          </h1>

          <div className="flex items-center justify-center gap-4">
            <a
              href={PROFILE.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={iconBtn}
            >
              <IconLinkedIn />
            </a>
            <a
              href={PROFILE.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={iconBtn}
            >
              <IconGitHub />
            </a>
            <a
              href={PROFILE.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Resume"
              className={iconBtn}
            >
              <IconPaper />
            </a>
          </div>
        </div>
      </Container>

      {/* Reordered sections */}
      <Container>
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
                    <div className="text-sm text-black/80">{x.org}</div>
                  </div>
                  <div className="text-sm text-black/80">{x.period}</div>
                </div>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-black/80">
                  {x.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          id="education"
          title="Education"
          subtitle="Where I studied and what I’m currently focused on."
        >
          <div className="grid gap-4">
            {EDUCATION.map((e) => (
              <Card key={e.title}>
                <div className="flex
                  flex-col gap-2 sm:flex-row sm:items-start sm:justify-between"
                >
                  <div>
                    <div className="text-base font-semibold">{e.title}</div>
                    <div className="text-sm text-black/80">{e.org}</div>
                  </div>
                  <div className="text-sm text-black/80">{e.period}</div>
                </div>
                <div className="mt-3">
                  <Pill>{e.highlight}</Pill>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          id="technologies"
          title="Technologies"
          subtitle="Languages, frameworks, and tools I’ve used."
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
          subtitle="Credentials and programs completed."
        >
          <div className="grid gap-4">
            {CERTIFICATIONS.map((c) => (
              <Card key={c.title}>
                <div className="text-base font-semibold">{c.title}</div>
                <div className="mt-1 text-sm text-black/80">{c.meta}</div>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          id="volunteering"
          title="Volunteering"
          subtitle="Community involvement and volunteer work."
        >
          <div className="grid gap-4">
            <Card>
              <div className="text-base font-semibold">Coming soon</div>
              <div className="mt-1 text-sm text-black/80">Volunteering experiences will be added here.</div>
            </Card>
          </div>
        </Section>

        <footer className="py-12 text-center text-sm text-black/70">
          © {new Date().getFullYear()} {PROFILE.name}
        </footer>
      </Container>
    </div>
  );
}
