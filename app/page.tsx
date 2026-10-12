"use client";

import { useEffect, useRef, useState } from "react";
import MeshBackground from "./components/MeshBackground";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const PROFILE = {
  name: "Faisal Naveed",
  links: {
    linkedin: "https://www.linkedin.com/in/faisal-naveed-32bb55288/",
    github: "https://github.com/your-handle",
    resume: "/resume.pdf",
  },
};

const EDUCATION = [
  {
    title: "Bachelor of Advanced Computing (Honours)",
    subtitle: "Computational Data Science",
    org: "The University of Sydney",
    period: "Jul 2023 - Jun 2027",
    image: "/usyd.svg",
    link: "https://www.sydney.edu.au/",
    brand: "education" as const,
  },
];

const EXPERIENCE = [
  {
    title: "Co-Founder",
    company: "Mudivu",
    location: "Bangalore, Karnataka, India",
    period: "Jun 2026 - Present",
    image: "/mudivu-mark.svg",
    link: "https://www.mudivu.in/",
    brand: "mudivu" as const,
  },
  {
    title: "Full Stack Developer Intern",
    company: "Multivrse Digital",
    location: "Sydney, New South Wales, Australia",
    period: "Dec 2025 - Apr 2026",
    image: "/multirvrse.png",
    link: "https://www.multivrse.digital/",
    brand: "multivrse" as const,
  },
  {
    title: "Software Developer Intern",
    company: "Aurm",
    location: "Bangalore, Karnataka, India",
    period: "Jan 2026 - Mar 2026",
    image: "/aurm.svg",
    link: "https://aurm.in/",
    brand: "aurm" as const,
  },
];

const PROJECTS = [
  {
    title: "Thesis Citation Verifier",
    description:
      "Web tool that checks whether a sentence citing a research paper is actually supported by that paper, returning relevant / partially relevant / irrelevant with the exact supporting or contradicting quote.",
    stack: "TypeScript, Next.js, SQLite (FTS5/BM25), local embeddings (bge-small), Claude API",
    link: "https://github.com/faisbyte/thesis-agent",
  },
];

const CERTIFICATIONS = [
  { title: "Google Advanced Data Analytics Professional Certificate", meta: "ID: IEWYXOK2W89R" },
  { title: "Google Machine Learning Professional Certificate", meta: "ID: PY6P4N95AU86" },
  { title: "AWS Academy Certified Cloud Architect", meta: "ID: cce674f9ae47" },
];

const LOGOS = [
  "aws.webp","bitbucket.png","confluence.png","css.png","docker.webp","fastapi.webp",
  "figma.png","github.png","html.png","java.png","jira.png","mongo.png",
  "mysql.png","nextjs.png","npm.png","postgre.png","powerbi.png","python.png",
  "R.png","react.png","sqlite.png","supabase.png","swift.png","tableau.png",
  "ts.png","vercel.png","vite.webp",
];

const VOLUNTEERING = [
  {
    title: "Founding Member & Treasurer",
    org: "Sydney University Artificial Intelligence Association",
    period: "Dec 2024 - Present",
    image: "/suaia.jpeg",
    link: "https://www.suaia.org/",
  },
  {
    title: "Subcommittee Member",
    org: "Sydney University Cyber Security Society",
    period: "Jun 2024 - Oct 2024",
    image: "/cybersoc.jpeg",
    link: "https://www.linkedin.com/company/usyd-csec/?originalSubdomain=au",
  },
];

const NAV = [
  { label: "Experience",     href: "#experience" },
  { label: "Education",      href: "#education" },
  { label: "Technologies",   href: "#technologies" },
  { label: "Projects",       href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Volunteering",   href: "#volunteering" },
  { label: "Resume",         href: "/resume.pdf", external: true },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

function useInView<T extends HTMLElement = HTMLDivElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia(REDUCED_MOTION).matches) { setInView(true); return; }
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); obs.disconnect(); }
    }, { threshold: 0.08, rootMargin: "0px 0px -60px 0px", ...options });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, inView };
}

// ---------------------------------------------------------------------------
// Small components
// ---------------------------------------------------------------------------

function Divider() {
  return <div className="border-t border-[var(--line)] my-0" />;
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-[var(--ink-4)] mb-6 lg:mb-8">
      {children}
    </h2>
  );
}

/* Screen-reader cue for links that leave the page. */
function ExternalHint() {
  return <span className="sr-only"> (opens in a new tab)</span>;
}

// ---------------------------------------------------------------------------
// Nav
// ---------------------------------------------------------------------------

function NavLink({ item, onClick, className = "" }: { item: typeof NAV[number]; onClick?: () => void; className?: string }) {
  return (
    <a
      href={item.href}
      onClick={onClick}
      {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex items-center min-h-11 px-3 text-[0.72rem] font-medium tracking-wide text-[var(--ink-3)] rounded-md transition-colors duration-200 hover:text-[var(--ink)] hover:bg-[rgba(20,17,14,0.05)] ${className}`}
    >
      {item.label}
      {item.external && <><span aria-hidden className="ml-1 text-[0.65rem]">&#8599;</span><ExternalHint /></>}
    </a>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const frosted = scrolled || open;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: frosted ? "rgba(246,242,234,0.72)" : "transparent",
        backdropFilter: frosted ? "blur(20px)" : "none",
        borderBottom: frosted ? "1px solid rgba(20,17,14,0.08)" : "1px solid transparent",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between h-14">
        <span className="text-xs font-semibold tracking-widest uppercase text-[var(--ink-4)] select-none">
          FN
        </span>

        <nav aria-label="Sections" className="hidden md:flex items-center gap-1">
          {NAV.map((item) => <NavLink key={item.href} item={item} />)}
        </nav>

        {/* phone: 44pt toggle in place of the row */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden inline-flex items-center justify-center w-11 h-11 -mr-2 rounded-md text-[var(--ink-3)] hover:text-[var(--ink)] hover:bg-[rgba(20,17,14,0.05)] transition-colors"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" aria-hidden>
            {open
              ? <path d="M6 6l12 12M18 6L6 18" />
              : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Sections"
        hidden={!open}
        className="md:hidden border-t border-[var(--line)]"
      >
        <div className="mx-auto max-w-7xl px-4 py-2 flex flex-col">
          {NAV.map((item) => (
            <NavLink key={item.href} item={item} onClick={() => setOpen(false)} className="w-full" />
          ))}
        </div>
      </nav>
    </header>
  );
}

// ---------------------------------------------------------------------------
// Hero
// ---------------------------------------------------------------------------

function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (window.matchMedia(REDUCED_MOTION).matches) return;
    const handler = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* name */}
      <div
        className="relative z-10 select-none"
        style={{
          transform: `perspective(1200px) rotateX(${mouse.y * -6}deg) rotateY(${mouse.x * 6}deg)`,
          transition: "transform 0.12s ease-out",
        }}
      >
        <h1
          className="hero-name font-extrabold text-[var(--ink)]"
          style={{
            textShadow: "0 0 100px rgba(122,90,40,0.10), 0 24px 60px rgba(20,17,14,0.12)",
          }}
        >
          {PROFILE.name}
        </h1>
      </div>

      {/* links row */}
      <div className="relative z-10 mt-10 flex items-center gap-3 flex-wrap justify-center">
        <a href={PROFILE.links.linkedin} target="_blank" rel="noopener noreferrer" className="hero-cta gap-2">
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5ZM.5 23.5h4V7.98h-4V23.5ZM8.5 7.98h3.83v2.12h.05c.53-1.01 1.82-2.12 3.75-2.12 4.01 0 4.75 2.64 4.75 6.08v9.44h-4v-8.37c0-2-.04-4.57-2.79-4.57-2.79 0-3.22 2.18-3.22 4.43v8.51h-4V7.98Z"/></svg>
          LinkedIn<ExternalHint />
        </a>
        <a href={PROFILE.links.resume} target="_blank" rel="noopener noreferrer" className="hero-cta gap-2">
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden><path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7l-5-5Zm1 7V3.5L18.5 9H15ZM8 13h8v2H8v-2Zm0 4h8v2H8v-2Zm0-8h6v2H8V9Z"/></svg>
          Resume<ExternalHint />
        </a>
      </div>

      {/* scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--ink-4)]">
        <span className="text-[0.7rem] tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[var(--ink-4)] to-transparent" />
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Experience card
// ---------------------------------------------------------------------------

function ExperienceCard({
  item,
  index,
}: {
  item: typeof EXPERIENCE[number];
  index: number;
}) {
  const { ref, inView } = useInView<HTMLAnchorElement>();

  return (
    <a
      ref={ref}
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`card-base card-link card-${item.brand} block border rounded-2xl p-7 lg:p-9 transition-all duration-700`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transitionDelay: `${index * 80}ms`,
      }}
    >
        <div className="flex gap-6 items-center">
          <img
            src={item.image}
            alt={item.company}
            className="w-20 h-20 object-contain rounded-xl flex-shrink-0 opacity-95"
          />
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <h3 className="text-sm font-semibold text-[var(--ink)] leading-snug">{item.title}</h3>
              <span className="text-[0.7rem] text-[var(--ink-4)] font-mono whitespace-nowrap">{item.period}</span>
            </div>
            <p className="text-xs text-[var(--ink-3)] mt-0.5">{item.company}</p>
            <p className="text-xs text-[var(--ink-4)] mt-0.5">{item.location}</p>
          </div>
        </div>
        <ExternalHint />
    </a>
  );
}

// ---------------------------------------------------------------------------
// Education card
// ---------------------------------------------------------------------------

function EducationCard({ item }: { item: typeof EDUCATION[number] }) {
  const { ref, inView } = useInView<HTMLAnchorElement>();

  return (
    <a
      ref={ref}
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`card-base card-link card-${item.brand} flex gap-6 items-start border rounded-2xl p-7 lg:p-9 transition-all duration-700`}
      style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)" }}
    >
        <img
          src={item.image}
          alt={item.org}
          className="w-20 h-20 object-contain rounded-xl flex-shrink-0 opacity-95"
        />
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
            <h3 className="text-sm font-semibold text-[var(--ink)] leading-snug">{item.title}</h3>
            <span className="text-[0.7rem] text-[var(--ink-4)] font-mono whitespace-nowrap">{item.period}</span>
          </div>
          {item.subtitle && (
            <p className="text-xs text-[var(--ink-3)] mt-0.5">{item.subtitle}</p>
          )}
          <p className="text-xs text-[var(--ink-4)] mt-0.5">{item.org}</p>
        </div>
        <ExternalHint />
    </a>
  );
}

// ---------------------------------------------------------------------------
// Volunteering card
// ---------------------------------------------------------------------------

function VolunteerCard({ item, index }: { item: typeof VOLUNTEERING[number]; index: number }) {
  const { ref, inView } = useInView<HTMLAnchorElement>();

  return (
    <a
      ref={ref}
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="card-base card-link flex gap-5 items-start border rounded-2xl p-7 lg:p-9 transition-all duration-700"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transitionDelay: `${index * 80}ms`,
      }}
    >
        <img
          src={item.image}
          alt={item.org}
          className="w-16 h-16 object-contain rounded-xl flex-shrink-0 opacity-95"
        />
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
            <h3 className="text-sm font-semibold text-[var(--ink)] leading-snug">{item.title}</h3>
            <span className="text-[0.7rem] text-[var(--ink-4)] font-mono whitespace-nowrap">{item.period}</span>
          </div>
          <p className="text-xs text-[var(--ink-3)] mt-0.5">{item.org}</p>
        </div>
        <ExternalHint />
    </a>
  );
}

// ---------------------------------------------------------------------------
// Certifications
// ---------------------------------------------------------------------------

function ProjectCard({ item, index }: { item: typeof PROJECTS[number]; index: number }) {
  const { ref, inView } = useInView<HTMLAnchorElement>();

  return (
    <a
      ref={ref}
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="card-base card-link block border rounded-2xl p-7 lg:p-9 transition-all duration-700"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transitionDelay: `${index * 80}ms`,
      }}
    >
      <h3 className="text-sm font-semibold text-[var(--ink)] leading-snug">
        {item.title}
        <span aria-hidden className="ml-1.5 text-[var(--ink-4)]">&#8599;</span>
      </h3>
      <p className="text-xs text-[var(--ink-3)] mt-2 leading-relaxed">{item.description}</p>
      <p className="text-[0.7rem] text-[var(--ink-4)] font-mono mt-3">{item.stack}</p>
      <ExternalHint />
    </a>
  );
}

function CertCard({ item, index }: { item: typeof CERTIFICATIONS[number]; index: number }) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className="card-base border rounded-2xl p-7 transition-all duration-700"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transitionDelay: `${index * 80}ms`,
      }}
    >
      <h3 className="text-sm font-semibold text-[var(--ink)] leading-snug mb-2">{item.title}</h3>
      <p className="text-[0.7rem] text-[var(--ink-4)] font-mono">{item.meta}</p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Technologies grid
// ---------------------------------------------------------------------------

function Technologies() {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className="transition-all duration-700"
      style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)" }}
    >
      <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-x-6 gap-y-9 place-items-center">
        {LOGOS.map((logo) => {
          const name = logo.replace(/\.(png|webp)$/, "");
          return (
            <img
              key={logo}
              src={`/logos/${logo}`}
              alt={name}
              title={name}
              className="h-12 w-20 lg:h-14 lg:w-24 object-contain"
            />
          );
        })}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Page section wrapper
// ---------------------------------------------------------------------------

function PageSection({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Divider />
      <section id={id} className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <SectionLabel>{label}</SectionLabel>
          {children}
        </div>
      </section>
    </>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <MeshBackground />

      {/* All foreground content sits above the overlay */}
      <div className="relative z-10">
        <Nav />

        <main>
        <Hero />

        <PageSection id="experience" label="Experience">
          <div className="space-y-5">
            {EXPERIENCE.map((item, i) => (
              <ExperienceCard key={item.title} item={item} index={i} />
            ))}
          </div>
        </PageSection>

        <PageSection id="education" label="Education">
          <div className="space-y-5">
            {EDUCATION.map((item) => (
              <EducationCard key={item.title} item={item} />
            ))}
          </div>
        </PageSection>

        <PageSection id="technologies" label="Technologies">
          <Technologies />
        </PageSection>

        <PageSection id="projects" label="Projects">
          <div className="space-y-5">
            {PROJECTS.map((item, i) => (
              <ProjectCard key={item.title} item={item} index={i} />
            ))}
          </div>
        </PageSection>

        <PageSection id="certifications" label="Certifications">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CERTIFICATIONS.map((item, i) => (
              <CertCard key={item.title} item={item} index={i} />
            ))}
          </div>
        </PageSection>

        <PageSection id="volunteering" label="Volunteering">
          <div className="space-y-5">
            {VOLUNTEERING.map((item, i) => (
              <VolunteerCard key={item.title} item={item} index={i} />
            ))}
          </div>
        </PageSection>
        </main>

        <Divider />
        <footer className="py-14 flex justify-center">
          <p className="text-[0.7rem] tracking-widest uppercase text-[var(--ink-4)]">Faisal Naveed</p>
        </footer>
      </div>
    </div>
  );
}
