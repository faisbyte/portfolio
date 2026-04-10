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
    subtitle: "Computational Data Science & Business Information Systems",
    org: "The University of Sydney",
    period: "Jul 2023 - Jun 2027",
    image: "/usyd.svg",
    link: "https://www.sydney.edu.au/",
    brand: "education" as const,
  },
];

const EXPERIENCE = [
  {
    title: "Full Stack Developer & Technology Lead",
    org: "Sydney, New South Wales, Australia",
    period: "Dec 2025 - Present",
    image: "/multirvrse.png",
    link: "https://www.multivrse.digital/",
    brand: "multivrse" as const,
    bullets: [
      "Led cloud infrastructure migration from AWS to Akamai Linode, optimising cost, performance, and operational simplicity while maintaining service continuity.",
      "Designed and implemented a multilingual RAG-based AI chatbot data pipeline, including architecture definition, model integration, and end-to-end technical documentation.",
      "Shipped and maintained a production web presence with CI/CD-driven deployments, performance optimisation, and end-to-end technical SEO (schema markup, redirects, indexing controls) to maximise organic discoverability.",
      "Drove early-stage business development through client outreach, founding customer meetings, and translation of client needs into scalable technical solutions.",
    ],
  },
  {
    title: "Software Developer",
    org: "Bangalore, Karnataka, India",
    period: "Jan 2026 - Mar 2026",
    image: "/aurm.svg",
    link: "https://aurm.in/",
    brand: "aurm" as const,
    bullets: [
      "Designed and structured the FaceID service codebase, implementing a Base64-based gender detection pipeline and supporting secure identity workflows.",
      "Defined client transaction logic and built an automated recording pipeline for onboarded vault cameras, enabling reliable local storage with cloud synchronisation.",
      "Architected system and user event flows to trigger API endpoints, including AWS-based event-driven notification workflows for operational alerts.",
      "Structured MongoDB schemas to support high-integrity client transactions across Aurm's Bay Area and Vault systems, with automated handling of error and edge-case recording events.",
    ],
  },
  {
    title: "Business Development Executive",
    org: "Sydney, New South Wales, Australia (Remote)",
    period: "Nov 2025 - Jan 2026",
    image: "/marquis.png",
    link: "https://www.marquiseducation.com.au/",
    brand: "marquis" as const,
    bullets: [
      "Coordinated strategic partnerships for a newly acquired EdTech startup in Abu Dhabi, supporting market entry, stakeholder alignment, and early growth initiatives.",
      "Led outreach and relationship development for the launch of university consultancy services in India, engaging institutions and prospective partners to establish local presence.",
    ],
  },
];

const CERTIFICATIONS = [
  { title: "Google Advanced Data Analytics Professional Certificate", meta: "ID: IEWYXOK2W89R" },
  { title: "Google Machine Learning Professional Certificate", meta: "ID: PY6P4N95AU86" },
  { title: "Quantium Data Analytics Simulation", meta: "ID: Fz3Mt4pmcNou8FZsC" },
];

const LOGOS = [
  "bitbucket.png","confluence.png","css.png","figma.png","github.png",
  "html.png","java.png","jira.png","mongo.png","mysql.png","nextjs.png",
  "npm.png","postgre.png","powerbi.png","python.png","R.png","react.png",
  "sqlite.png","supabase.png","swift.png","tableau.png","ts.png","vercel.png",
];

const VOLUNTEERING = [
  {
    title: "Technology Executive & Secretary",
    org: "Sydney University Artificial Intelligence Association",
    period: "Nov 2024 - Present",
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
  { label: "Certifications", href: "#certifications" },
  { label: "Volunteering",   href: "#volunteering" },
  { label: "Resume",         href: "/resume.pdf", external: true },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
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
  return <div className="border-t border-white/[0.06] my-0" />;
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[0.62rem] font-semibold tracking-[0.2em] uppercase text-white/30 mb-6 lg:mb-8">
      {children}
    </p>
  );
}

// ---------------------------------------------------------------------------
// Nav
// ---------------------------------------------------------------------------

function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(5,5,5,0.7)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "1px solid transparent",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between h-14">
        <span className="text-xs font-semibold tracking-widest uppercase text-white/30 select-none">
          FN
        </span>
        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="px-3 py-1.5 text-[0.72rem] font-medium tracking-wide text-white/40 rounded-md transition-colors duration-200 hover:text-white hover:bg-white/[0.06]"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

// ---------------------------------------------------------------------------
// Hero
// ---------------------------------------------------------------------------

function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
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
          className="hero-name font-extrabold text-white"
          style={{
            textShadow: "0 0 120px rgba(129,140,248,0.15), 0 40px 80px rgba(0,0,0,0.6)",
          }}
        >
          {PROFILE.name}
        </h1>
      </div>

      {/* links row */}
      <div className="relative z-10 mt-10 flex items-center gap-3 flex-wrap justify-center">
        <a href={PROFILE.links.linkedin} target="_blank" rel="noopener noreferrer" className="hero-cta gap-2">
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5ZM.5 23.5h4V7.98h-4V23.5ZM8.5 7.98h3.83v2.12h.05c.53-1.01 1.82-2.12 3.75-2.12 4.01 0 4.75 2.64 4.75 6.08v9.44h-4v-8.37c0-2-.04-4.57-2.79-4.57-2.79 0-3.22 2.18-3.22 4.43v8.51h-4V7.98Z"/></svg>
          LinkedIn
        </a>
        <a href={PROFILE.links.resume} target="_blank" rel="noopener noreferrer" className="hero-cta gap-2">
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden><path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7l-5-5Zm1 7V3.5L18.5 9H15ZM8 13h8v2H8v-2Zm0 4h8v2H8v-2Zm0-8h6v2H8V9Z"/></svg>
          Resume
        </a>
      </div>

      {/* scroll hint */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20">
        <span className="text-[0.6rem] tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />
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
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={`card-base card-${item.brand} border rounded-2xl p-7 lg:p-9 transition-all duration-700`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transitionDelay: `${index * 80}ms`,
      }}
    >
      <a href={item.link} target="_blank" rel="noopener noreferrer" className="block">
        <div className="flex gap-6 items-start mb-6">
          <img
            src={item.image}
            alt={item.org}
            className="w-20 h-20 object-contain rounded-xl flex-shrink-0 opacity-95"
          />
          <div className="flex-1 min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <h3 className="text-sm font-semibold text-white leading-snug">{item.title}</h3>
              <span className="text-[0.65rem] text-white/30 font-mono whitespace-nowrap">{item.period}</span>
            </div>
            <p className="text-xs text-white/40 mt-0.5">{item.org}</p>
          </div>
        </div>
      </a>
      <ul className="space-y-2.5">
        {item.bullets.map((b) => (
          <li key={b} className="flex gap-3 text-[0.78rem] text-white/55 leading-relaxed">
            <span className="text-white/20 mt-0.5 flex-shrink-0 text-[0.6rem]">&#9632;</span>
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Education card
// ---------------------------------------------------------------------------

function EducationCard({ item }: { item: typeof EDUCATION[number] }) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={`card-base card-${item.brand} border rounded-2xl p-7 lg:p-9 transition-all duration-700`}
      style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)" }}
    >
      <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex gap-6 items-start">
        <img
          src={item.image}
          alt={item.org}
          className="w-20 h-20 object-contain rounded-xl flex-shrink-0 opacity-95"
        />
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
            <h3 className="text-sm font-semibold text-white leading-snug">{item.title}</h3>
            <span className="text-[0.65rem] text-white/30 font-mono whitespace-nowrap">{item.period}</span>
          </div>
          {item.subtitle && (
            <p className="text-xs text-white/40 mt-0.5">{item.subtitle}</p>
          )}
          <p className="text-xs text-white/30 mt-0.5">{item.org}</p>
        </div>
      </a>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Volunteering card
// ---------------------------------------------------------------------------

function VolunteerCard({ item, index }: { item: typeof VOLUNTEERING[number]; index: number }) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className="card-base border rounded-2xl p-7 lg:p-9 transition-all duration-700"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transitionDelay: `${index * 80}ms`,
      }}
    >
      <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex gap-5 items-start">
        <img
          src={item.image}
          alt={item.org}
          className="w-16 h-16 object-contain rounded-xl flex-shrink-0 opacity-95"
        />
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
            <h3 className="text-sm font-semibold text-white leading-snug">{item.title}</h3>
            <span className="text-[0.65rem] text-white/30 font-mono whitespace-nowrap">{item.period}</span>
          </div>
          <p className="text-xs text-white/40 mt-0.5">{item.org}</p>
        </div>
      </a>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Certifications
// ---------------------------------------------------------------------------

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
      <h3 className="text-sm font-semibold text-white leading-snug mb-2">{item.title}</h3>
      <p className="text-[0.65rem] text-white/30 font-mono">{item.meta}</p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Technologies marquee
// ---------------------------------------------------------------------------

function Technologies() {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className="transition-all duration-700"
      style={{ opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(20px)" }}
    >
      <div className="flex overflow-hidden py-4">
        <div className="flex animate-marquee gap-10">
          {[...LOGOS, ...LOGOS, ...LOGOS].map((logo, i) => (
            <div key={i} className="flex-shrink-0">
              <img
                src={`/logos/${logo}`}
                alt={logo.replace(".png", "")}
                className="h-14 w-14 lg:h-16 lg:w-16 object-contain"
              />
            </div>
          ))}
        </div>
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

        <Divider />
        <footer className="py-14 flex justify-center">
          <p className="text-[0.65rem] tracking-widest uppercase text-white/15">Faisal Naveed</p>
        </footer>
      </div>
    </div>
  );
}
