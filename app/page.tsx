"use client";

import { useEffect, useRef, useState } from "react";

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
    title: "Bachelor of Advanced Computing (Honours)",
    subtitle: "Computational Data Science & Business Information Systems",
    org: "The University of Sydney",
    period: "Jul 2023 - Jun 2027",
    image: "/usyd.svg",
    link: "https://www.sydney.edu.au/",
    isEducation: true,
  },
];

const EXPERIENCE = [
  {
    title: "Business Development & Technology Solutions Design Lead",
    org: "Sydney, New South Wales, Australia",
    period: "Oct 2025 - Present",
    image: "/multirvrse.png",
    link: "https://www.multivrse.digital/",
    isMultivrse: true,
    bullets: [
      "Migrating organisation software from AWS to Akamai Linode",
      "Heading outreach and organising founding client meetings",
      "Structured data pipeline for multilingual RAG AI chatbot",
    ],
  },
  {
    title: "Software Developer",
    org: "Bangalore, Karnataka, India",
    period: "Jan 2026 - Mar 2026",
    image: "/aurm.svg",
    link: "https://aurm.in/",
    isMultivrse: false,
    isAurm: true,
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

// Hook for scroll-triggered animations
function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return { ref, isVisible };
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
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      id={id} 
      className={`py-16 lg:py-24 transition-all duration-1000 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="mb-10 lg:mb-16">
        <div className={`inline-block mb-3 transition-all duration-700 delay-100 ${
          isVisible 
            ? 'opacity-100 translate-x-0' 
            : 'opacity-0 -translate-x-4'
        }`}>
          <h2 className="text-3xl font-extrabold tracking-tight lg:text-4xl xl:text-5xl">{title}</h2>
          <div className={`h-1 w-16 bg-gradient-to-r from-transparent via-white/50 to-transparent rounded-full mt-2 transition-all duration-700 delay-200 ${
            isVisible 
              ? 'opacity-100 scale-x-100' 
              : 'opacity-0 scale-x-0'
          }`}></div>
        </div>
        {subtitle ? (
          <p className={`text-sm text-white/80 mt-4 lg:text-base lg:max-w-2xl transition-all duration-700 delay-150 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-4'
          }`}>{subtitle}</p>
        ) : null}
      </div>
      {children}
    </section>
  );
}

// Hook for card animations
function useCardAnimation(delay: number = 0) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return { ref, isVisible };
}

function Card({ 
  children, 
  className = "", 
  featured = false, 
  index = 0,
  image = null,
  link = null,
  isMultivrse = false,
  isAurm = false,
  isEducation = false
}: { 
  children: React.ReactNode; 
  className?: string; 
  featured?: boolean; 
  index?: number;
  image?: string | null;
  link?: string | null;
  isMultivrse?: boolean;
  isAurm?: boolean;
  isEducation?: boolean;
}) {
  const { ref, isVisible } = useCardAnimation(index * 100);

  const cardContent = (
    <div className={`flex gap-6 lg:gap-8 ${image ? 'flex-row' : ''}`}>
      {image && (
        <div className="flex-shrink-0">
          {link ? (
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={image} 
                alt={isMultivrse ? "Multivrse" : isEducation ? "University of Sydney" : "Company logo"} 
                className={`object-contain rounded-lg ${
                  isEducation 
                    ? 'w-32 h-32 lg:w-40 lg:h-40' 
                    : 'w-24 h-24 lg:w-32 lg:h-32'
                }`}
              />
            </a>
          ) : (
            <img 
              src={image} 
              alt="Company logo" 
              className={`object-contain rounded-lg ${
                isEducation 
                  ? 'w-32 h-32 lg:w-40 lg:h-40' 
                  : 'w-24 h-24 lg:w-32 lg:h-32'
              }`}
            />
          )}
        </div>
      )}
      <div className="flex-1">
        {children}
      </div>
    </div>
  );

  return (
    <div 
      ref={ref}
      className={`group rounded-2xl border border-black/12 ${isMultivrse || isAurm || isEducation ? '' : 'bg-white/30'} backdrop-blur-lg p-6 lg:p-10 shadow-sm transition-all duration-700 hover:shadow-xl hover:-translate-y-1 ${
        featured ? 'ring-2 ring-black/5' : ''
      } ${
        isMultivrse 
          ? 'multivrse-card' 
          : isAurm
          ? 'aurm-card'
          : isEducation
          ? 'education-card'
          : 'hover:bg-white/40'
      } ${
        isVisible 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-8 scale-95'
      } ${className}`}
    >
      {cardContent}
    </div>
  );
}

function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Parallax effect based on scroll
  const parallaxOffset = Math.min(scrollY * 0.5, 200);
  const opacity = Math.max(1 - scrollY / 400, 0.3);
  const scale = Math.max(1 - scrollY / 1000, 0.8);

  return (
    <Container>
      <div 
        ref={heroRef}
        className="min-h-[80vh] flex flex-col items-center justify-center text-center gap-8 lg:gap-12 transition-all duration-300"
        style={{
          transform: `translateY(${parallaxOffset}px) scale(${scale})`,
          opacity: opacity,
        }}
      >
        <div className="space-y-6">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl bg-clip-text">
            {PROFILE.name}
          </h1>
            <p className="text-sm text-white/80 font-medium tracking-widest uppercase lg:text-base">Portfolio</p>
        </div>
      </div>
    </Container>
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
        text-white
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
  // Dynamic animated gradient background with randomized movement
  useEffect(() => {
    // Only run on client side after hydration
    if (typeof window === 'undefined') return;

    const root = document.documentElement;
    let animationFrameId: number;
    let startTime = Date.now();

    // Initialize random offsets for each gradient layer with moderate speeds
    const offsets = {
      s1: { base: Math.random() * 2, speed: 0.4 + Math.random() * 0.2, phase: Math.random() * Math.PI * 2 },
      s2: { base: Math.random() * 2, speed: 0.35 + Math.random() * 0.2, phase: Math.random() * Math.PI * 2 },
      s3: { base: Math.random() * 2, speed: 0.45 + Math.random() * 0.2, phase: Math.random() * Math.PI * 2 },
      s4: { base: Math.random() * 2, speed: 0.38 + Math.random() * 0.2, phase: Math.random() * Math.PI * 2 },
      s5: { base: Math.random() * 2, speed: 0.42 + Math.random() * 0.2, phase: Math.random() * Math.PI * 2 },
    };

    const animate = () => {
      const elapsed = (Date.now() - startTime) / 1000; // Time in seconds
      const vw = window.innerWidth / 100;
      const vh = window.innerHeight / 100;

      // Pure time-based animation with moderate movement
      // Using reasonable limits to prevent stretching while allowing visible movement
      const maxOffset = 20; // Increased for more visible movement
      const amplitude = 8; // Moderate amplitude for smooth movement
      
      const s1 = Math.max(-maxOffset, Math.min(maxOffset, (offsets.s1.base + Math.sin(elapsed * offsets.s1.speed + offsets.s1.phase) * amplitude) * vw));
      const s2 = Math.max(-maxOffset, Math.min(maxOffset, (offsets.s2.base + Math.sin(elapsed * offsets.s2.speed + offsets.s2.phase) * amplitude) * vw));
      const s3 = Math.max(-maxOffset, Math.min(maxOffset, (offsets.s3.base + Math.sin(elapsed * offsets.s3.speed + offsets.s3.phase) * amplitude) * vw));
      const s4 = Math.max(-maxOffset, Math.min(maxOffset, (offsets.s4.base + Math.sin(elapsed * offsets.s4.speed + offsets.s4.phase) * amplitude) * vw));
      const s5 = Math.max(-maxOffset, Math.min(maxOffset, (offsets.s5.base + Math.sin(elapsed * offsets.s5.speed + offsets.s5.phase) * amplitude) * vh));

      root.style.setProperty("--s1", `${s1}px`);
      root.style.setProperty("--s2", `${s2}px`);
      root.style.setProperty("--s3", `${s3}px`);
      root.style.setProperty("--s4", `${s4}px`);
      root.style.setProperty("--s5", `${s5}px`);

      animationFrameId = requestAnimationFrame(animate);
    };

    // Start animation immediately
    animate();

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
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
    "relative rounded-full px-5 py-2.5 text-sm font-medium tracking-wide border border-white/20 bg-white/35 backdrop-blur-md shadow-sm text-white transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 hover:shadow-md active:scale-95";


  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const progress = scrollTop / (documentHeight - windowHeight);
      setScrollProgress(Math.min(progress, 1));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Scroll progress indicator */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-black/5 z-50">
        <div 
          className="h-full bg-gradient-to-r from-transparent via-black/20 to-transparent transition-all duration-150"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Modern floating navigation */}
      <div className="sticky top-4 z-50 mt-4 lg:top-6">
        <Container>
          <div className="flex items-center justify-center">
            <nav className="flex flex-wrap items-center justify-center gap-2.5 lg:gap-3 rounded-full px-4 py-3 border border-black/10 bg-white/30 backdrop-blur-xl shadow-lg nav-container">
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

      {/* Refined hero section with scroll animation */}
      <HeroSection />

      {/* Redesigned content sections */}
      <Container>
        <Section
          id="experience"
          title="Experience"
          subtitle="Roles where I shipped real systems and owned deliverables."
        >
          <div className="space-y-6">
            {EXPERIENCE.map((x, idx) => (
              <Card 
                key={x.title + x.org} 
                featured={idx === 0} 
                index={idx}
                image={x.image || null}
                link={x.link || null}
                isMultivrse={x.isMultivrse || false}
                isAurm={x.isAurm || false}
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex-1 space-y-1">
                    <h3 className="text-lg font-bold lg:text-xl transition-colors duration-700 text-white">{x.title}</h3>
                    <p className="text-sm text-white/90 lg:text-base transition-colors duration-700">{x.org}</p>
                  </div>
                  <div className={`text-xs font-medium text-white/80 lg:text-sm whitespace-nowrap transition-colors duration-700 period ${x.isMultivrse ? '' : ''}`}>{x.period}</div>
                </div>
                <ul className="mt-5 space-y-2 list-disc pl-5 text-sm text-white/90 lg:text-base lg:space-y-2.5">
                  {x.bullets.map((b) => (
                    <li key={b} className="leading-relaxed transition-colors duration-700">{b}</li>
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
          <div className="space-y-6">
            {EDUCATION.map((e, idx) => (
              <Card 
                key={e.title} 
                index={idx}
                image={e.image || null}
                link={e.link || null}
                isEducation={e.isEducation || false}
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex-1 space-y-1">
                    <h3 className="text-lg font-bold lg:text-xl transition-colors duration-700 text-white">{e.title}</h3>
                    {e.subtitle && (
                      <p className="text-sm text-white/80 lg:text-base transition-colors duration-700">{e.subtitle}</p>
                    )}
                    <p className="text-sm text-white/90 lg:text-base transition-colors duration-700">{e.org}</p>
                  </div>
                  <div className="text-xs font-medium text-white/80 lg:text-sm whitespace-nowrap transition-colors duration-700 period">{e.period}</div>
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
            {Object.entries(SKILLS).map(([k, items], idx) => (
              <Card key={k} className="h-full flex flex-col" index={idx}>
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
            {CERTIFICATIONS.map((c, idx) => (
              <Card key={c.title} index={idx}>
                <h3 className="text-base font-bold mb-2 lg:text-lg">{c.title}</h3>
                <p className="text-xs text-white/80 lg:text-sm">{c.meta}</p>
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
            <Card index={0}>
              <h3 className="text-base font-bold mb-2 lg:text-lg">Coming soon</h3>
              <p className="text-sm text-white/80 lg:text-base">Volunteering experiences will be added here.</p>
            </Card>
          </div>
        </Section>

        <footer className="py-12 text-center text-xs text-white/60 lg:text-sm lg:py-16">
          © {new Date().getFullYear()} {PROFILE.name}
        </footer>
      </Container>
    </div>
  );
}
