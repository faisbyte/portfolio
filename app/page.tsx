"use client";

import { useEffect } from "react";

type Link = { label: string; href: string; external?: boolean };

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
  return <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>;
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
    <section id={id} className="py-16 lg:py-24">
      <div className="mb-10 lg:mb-16">
        <div className="inline-block mb-3">
          <h2 className="text-3xl font-extrabold tracking-tight lg:text-4xl xl:text-5xl">{title}</h2>
          <div className="h-1 w-16 bg-gradient-to-r from-transparent via-black/30 to-transparent rounded-full mt-2"></div>
        </div>
        {subtitle ? <p className="text-sm text-black/65 mt-4 lg:text-base lg:max-w-2xl">{subtitle}</p> : null}
      </div>
      {children}
    </section>
  );
}

function Card({ children, className = "", featured = false }: { children: React.ReactNode; className?: string; featured?: boolean }) {
  return (
    <div className={`group rounded-2xl border border-black/12 bg-white/30 backdrop-blur-lg p-6 lg:p-8 shadow-sm transition-all duration-500 hover:shadow-xl hover:bg-white/40 hover:-translate-y-1 ${featured ? 'ring-2 ring-black/5' : ''} ${className}`}>
      {children}
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="
        inline-flex items-center
        rounded-full px-4 py-1.5
        text-xs font-medium
        border border-black/12
        bg-white/35 backdrop-blur-md
        text-black
        transition-all duration-300
        hover:bg-black hover:text-white hover:scale-105
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
  // Original scroll-driven gradient flow effect
  useEffect(() => {
    // Only run on client side after hydration
    if (typeof window === 'undefined') return;

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

    // Delay initial set to ensure hydration is complete
    const timeoutId = setTimeout(() => {
      setVars();
      window.addEventListener("scroll", onScroll, { passive: true });
    }, 0);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // TODO: Update the resume file path below when you have the file ready
  const RESUME_PATH = "/resume.pdf"; // Update this path with your actual resume file path

  const nav = [
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Technologies", href: "#technologies" },
    { label: "Certifications", href: "#certifications" },
    { label: "Volunteering", href: "#volunteering" },
    { label: "Resume", href: RESUME_PATH, external: true },
  ];

  const navBtn =
    "relative rounded-full px-5 py-2.5 text-sm font-medium tracking-wide border border-black/10 bg-white/35 backdrop-blur-md shadow-sm text-black transition-all duration-300 hover:bg-black hover:text-white hover:scale-105 hover:shadow-md active:scale-95";


  return (
    <div className="min-h-screen">
      {/* Modern floating navigation */}
      <div className="sticky top-4 z-50 mt-4 lg:top-6">
        <Container>
          <div className="flex items-center justify-center">
            <nav className="flex flex-wrap items-center justify-center gap-2.5 lg:gap-3 rounded-full px-4 py-3 border border-black/10 bg-white/30 backdrop-blur-xl shadow-lg">
              {nav.map((item) => (
                <a 
                  key={item.href} 
                  href={item.href} 
                  className={navBtn}
                  {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </Container>
      </div>

      {/* Refined hero section */}
      <Container>
        <div className="min-h-[80vh] flex flex-col items-center justify-center text-center gap-8 lg:gap-12">
          <div className="space-y-6">
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl bg-clip-text">
              {PROFILE.name}
            </h1>
            <p className="text-sm text-black/60 font-medium tracking-widest uppercase lg:text-base">Portfolio</p>
          </div>
        </div>
      </Container>

      {/* Redesigned content sections */}
      <Container>
        <Section
          id="experience"
          title="Experience"
          subtitle="Roles where I shipped real systems and owned deliverables."
        >
          <div className="space-y-6">
            {EXPERIENCE.map((x, idx) => (
              <Card key={x.title + x.org} featured={idx === 0}>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex-1 space-y-1">
                    <h3 className="text-lg font-bold lg:text-xl">{x.title}</h3>
                    <p className="text-sm text-black/70 lg:text-base">{x.org}</p>
                  </div>
                  <div className="text-xs font-medium text-black/60 lg:text-sm whitespace-nowrap">{x.period}</div>
                </div>
                <ul className="mt-5 space-y-2 list-disc pl-5 text-sm text-black/70 lg:text-base lg:space-y-2.5">
                  {x.bullets.map((b) => (
                    <li key={b} className="leading-relaxed">{b}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          id="education"
          title="Education"
          subtitle="Where I studied and what I'm currently focused on."
        >
          <div className="grid gap-6 lg:gap-8 lg:grid-cols-2">
            {EDUCATION.map((e) => (
              <Card key={e.title}>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between mb-5">
                  <div className="flex-1 space-y-1">
                    <h3 className="text-lg font-bold lg:text-xl">{e.title}</h3>
                    <p className="text-sm text-black/70 lg:text-base">{e.org}</p>
                  </div>
                  <div className="text-xs font-medium text-black/60 lg:text-sm whitespace-nowrap">{e.period}</div>
                </div>
                <div>
                  <Pill>{e.highlight}</Pill>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          id="technologies"
          title="Technologies"
          subtitle="Languages, frameworks, and tools I've used."
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {Object.entries(SKILLS).map(([k, items]) => (
              <Card key={k} className="h-full flex flex-col">
                <h3 className="text-base font-bold mb-4 lg:text-lg">{k}</h3>
                <div className="flex flex-wrap gap-2 mt-auto">
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
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {CERTIFICATIONS.map((c) => (
              <Card key={c.title}>
                <h3 className="text-base font-bold mb-2 lg:text-lg">{c.title}</h3>
                <p className="text-xs text-black/65 lg:text-sm">{c.meta}</p>
              </Card>
            ))}
          </div>
        </Section>

        <Section
          id="volunteering"
          title="Volunteering"
          subtitle="Community involvement and volunteer work."
        >
          <div className="max-w-2xl">
            <Card>
              <h3 className="text-base font-bold mb-2 lg:text-lg">Coming soon</h3>
              <p className="text-sm text-black/65 lg:text-base">Volunteering experiences will be added here.</p>
            </Card>
          </div>
        </Section>

        <footer className="py-12 text-center text-xs text-black/50 lg:text-sm lg:py-16">
          © {new Date().getFullYear()} {PROFILE.name}
        </footer>
      </Container>
    </div>
  );
}
