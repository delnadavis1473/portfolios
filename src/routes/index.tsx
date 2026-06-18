import { createFileRoute } from "@tanstack/react-router";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Mail,
  Phone,
  Linkedin,
  ExternalLink,
  Sparkles,
  Figma,
  Palette,
  Layers,
  MousePointer2,
} from "lucide-react";
import delnaImage from "@/assets/delna.jpg";
import plantoCover from "@/assets/planto-cover.jpg";
import aiInterfaceCover from "@/assets/ai-interface-cover.jpg";
import styleueThumb from "@/assets/styleue-thumb.webp";
import rideMateThumb from "@/assets/ridemate-thumb.jpg";
import digitalRevolutionThumb from "@/assets/digital-revolution-thumb.jpg";
import {
  StyleueArt,
  RidemateArt,
  DigitalRevolutionArt,
  ErpDashboardArt,
} from "@/components/project-art";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Delna Davis — UI/UX Designer" },
      {
        name: "description",
        content:
          "Delna Davis is a UI/UX designer crafting thoughtful, user-friendly digital interfaces in Figma, Adobe XD, Photoshop and Illustrator.",
      },
      { property: "og:title", content: "Delna Davis — UI/UX Designer" },
      {
        property: "og:description",
        content:
          "Selected work, process, and contact for Delna Davis — a detail-oriented UI/UX designer.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Portfolio,
});

const NAV = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const PROJECTS = [
  {
    title: "Styleue",
    tag: "Online customized tailoring",
    description:
      "A digital tailor platform letting users customize fabrics, styles, and fittings with ease — from selection to checkout.",
    tools: ["Figma", "Illustrator"],
    link: "https://share.google/HNlRlsSQAmKO643Ri",
    visual: (
      <img
        src={styleueThumb}
        alt="Styleue customized tailoring platform"
        className="h-full w-full object-cover"
        loading="lazy"
      />
    ),
    year: "2024",
    role: "UI/UX Design",
  },
  {
    title: "Planto",
    tag: "Indoor plant mobile app",
    description:
      "A modern, user-friendly mobile app prototype focused on clean UI, intuitive navigation, and a calm browsing experience.",
    tools: ["Figma"],
    link: "https://share.google/NOQFjj3pbF1pHCuDb",
    visual: (
      <img
        src={plantoCover}
        alt="Planto indoor plant collection cover"
        className="h-full w-full object-cover"
        loading="lazy"
      />
    ),
    year: "2024",
    role: "Mobile Product Design",
  },
  {
    title: "Ridemate",
    tag: "Ride-sharing app",
    description:
      "A ride-sharing app with real-time GPS, secure payments, ride history, and rating — delivering a seamless UI/UX flow.",
    tools: ["Figma", "Illustrator", "Photoshop"],
    link: "https://share.google/JxokeBNJgYYuPbWvH",
    visual: (
      <img
        src={rideMateThumb}
        alt="Ridemate ride-sharing app"
        className="h-full w-full object-cover"
        loading="lazy"
      />
    ),
    year: "2024",
    role: "Product Design",
  },
  {
    title: "Digital Revolution",
    tag: "Concept exploration",
    description:
      "A visual concept exploring the language of a modern digital brand — typography, layout systems, and interaction patterns.",
    tools: ["Figma"],
    link: "https://share.google/6mGQi7j6BDZzYRJDb",
    visual: (
      <img
        src={digitalRevolutionThumb}
        alt="Digital Revolution concept"
        className="h-full w-full object-cover"
        loading="lazy"
      />
    ),
    year: "2025",
    role: "Concept / UI",
  },
  {
    title: "AI Interface",
    tag: "AI product exploration",
    description:
      "An interface study for an AI-driven product — focused on clarity, conversational flow, and approachable visual hierarchy.",
    tools: ["Figma"],
    link: "https://share.google/otLtO35WesQYbO92M",
    visual: (
      <img
        src={aiInterfaceCover}
        alt="AI Interface concept cover"
        className="h-full w-full object-cover"
        loading="lazy"
      />
    ),
    year: "2025",
    role: "Interface Design",
  },
  {
    title: "ERP Dashboard",
    tag: "Enterprise dashboard",
    description:
      "A data-dense ERP dashboard concept that organizes complex information into a calm, scannable, and confident interface.",
    tools: ["Figma"],
    link: "https://share.google/3FxffbHD9UaY3eBsI",
    visual: <ErpDashboardArt />,
    year: "2025",
    role: "Dashboard UX",
  },
];

const SKILLS = [
  {
    group: "Design Tools",
    icon: Figma,
    items: ["Figma", "Adobe Photoshop", "Adobe Illustrator", "Adobe XD"],
  },
  {
    group: "UI / UX & Design",
    icon: Palette,
    items: [
      "User Interface Design",
      "User Experience Design",
      "Research & Prototyping",
      "Design Thinking",
      "Responsive Design",
    ],
  },
  {
    group: "Technical",
    icon: Layers,
    items: ["HTML", "CSS", "Logo Design"],
  },
  {
    group: "Soft Skills",
    icon: Sparkles,
    items: ["Project Management", "Time Management", "Teamwork"],
  },
];

const EDUCATION = [
  {
    title: "BCA, University of Calicut",
    place: "St. Joseph's College (Autonomous), Irinjalakuda",
    period: "June 2021 — April 2024",
  },
  {
    title: "Higher Secondary",
    place: "Holy Cross HSS, Mapranam",
    period: "June 2019 — March 2021",
  },
  {
    title: "High School",
    place: "St. Joseph's CGHS, Karuvannur",
    period: "June 2014 — March 2019",
  },
];

function useMagnetic<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;
    const handle = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      el.style.transform = `translate3d(${x * 0.18}px, ${y * 0.18}px, 0)`;
    };
    const reset = () => (el.style.transform = "translate3d(0,0,0)");
    el.addEventListener("mousemove", handle);
    el.addEventListener("mouseleave", reset);
    return () => {
      el.removeEventListener("mousemove", handle);
      el.removeEventListener("mouseleave", reset);
    };
  }, [reduce]);
  return ref;
}

function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (reduce) return;
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a, button, [data-cursor]"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [reduce]);
  if (reduce) return null;
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block"
      animate={{ x: pos.x - 14, y: pos.y - 14, scale: hover ? 2.4 : 1 }}
      transition={{ type: "spring", stiffness: 320, damping: 28, mass: 0.4 }}
    >
      <div
        className={`h-7 w-7 rounded-full mix-blend-multiply transition-colors ${
          hover ? "bg-[oklch(0.55_0.18_295/0.25)]" : "bg-[oklch(0.55_0.18_295/0.4)]"
        }`}
      />
    </motion.div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`container-fluid-nav flex items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${
          scrolled ? "glass-strong shadow-soft" : "glass"
        }`}
      >
        <a href="#top" className="flex items-center gap-2 text-sm font-medium tracking-tight">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-violet-gradient" />
          <span className="font-display text-base">Delna Davis</span>
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                className="rounded-full px-4 py-2 text-sm text-foreground/70 transition-colors hover:bg-white/60 hover:text-foreground"
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="group inline-flex items-center gap-1.5 rounded-full bg-violet-gradient px-4 py-2 text-sm font-medium text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
        >
          Let's talk
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </nav>
    </motion.header>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const cta = useMagnetic<HTMLAnchorElement>();

  return (
    <section
      ref={ref}
      id="top"
      className="noise relative overflow-hidden bg-aurora px-6 pb-20 pt-32 md:pt-36"
    >
      {/* Floating blobs */}
      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-[oklch(0.82_0.12_310/0.55)] blur-3xl animate-float" />
      <div className="pointer-events-none absolute -right-24 top-40 h-[28rem] w-[28rem] rounded-full bg-[oklch(0.84_0.1_280/0.5)] blur-3xl animate-float-delay" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-[oklch(0.9_0.08_330/0.6)] blur-3xl animate-float" />

      <div className="container-fluid relative grid items-center gap-14 md:grid-cols-[1.2fr_1fr]">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-medium text-foreground/70">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[oklch(0.55_0.2_295)] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[oklch(0.5_0.2_295)]" />
              </span>
              Available for UI/UX opportunities
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="font-display mt-6 text-5xl leading-[1.02] tracking-tight md:text-7xl lg:text-[5.5rem]">
              Designing
              <span className="text-gradient italic"> creative, considered </span>
              digital experiences.
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
              I'm Delna — a UI/UX designer crafting user-friendly interfaces and prototypes in
              Figma, Adobe XD, Photoshop and Illustrator. Grounded in research, design thinking, and
              a deep care for the small details.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                ref={cta}
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-violet-gradient px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-lift transition-shadow hover:shadow-glow"
                data-cursor
              >
                View selected work
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              >
                Get in touch
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.45}>
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-2">
                <MousePointer2 className="h-3.5 w-3.5" /> Scroll to explore
              </span>
              <span>Figma · Adobe XD · Photoshop · Illustrator</span>
            </div>
          </Reveal>
        </div>

        {/* Portrait */}
        <motion.div style={{ y: y1 }} className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-10 -z-10 rounded-full bg-lilac opacity-70 blur-3xl" />
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative flex flex-col items-center overflow-hidden rounded-[2rem] glass-violet p-8 shadow-lift"
          >
            <div className="relative aspect-square w-full max-w-[24rem] animate-float-subtle overflow-hidden rounded-full shadow-soft">
              <img
                src={delnaImage}
                alt="Portrait of Delna Davis, UI/UX Designer"
                className="h-full w-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[oklch(0.4_0.18_295/0.25)] via-transparent to-transparent" />
            </div>
            <div className="mt-6 flex w-full items-center justify-between px-2 text-sm text-foreground/70">
              <span className="font-medium">Delna Davis</span>
              <span>Kerala, India</span>
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* Marquee */}
      <div className="container-fluid relative mt-16 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
        <motion.div
          className="flex gap-12 whitespace-nowrap text-foreground/30"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 35, ease: "linear", repeat: Infinity }}
        >
          {[...Array(2)].map((_, i) => (
            <div
              key={i}
              className="flex shrink-0 items-center gap-12 font-display text-3xl md:text-4xl"
            >
              <span>User Interface</span>
              <span>✦</span>
              <span>User Experience</span>
              <span>✦</span>
              <span>Prototyping</span>
              <span>✦</span>
              <span>Design Thinking</span>
              <span>✦</span>
              <span>Responsive Design</span>
              <span>✦</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative px-6 py-20">
      <div className="container-fluid grid gap-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">About</p>
            <h2 className="font-display mt-3 text-4xl leading-tight md:text-5xl">
              A thoughtful approach to <span className="text-gradient italic">every pixel.</span>
            </h2>
          </Reveal>
        </div>
        <div className="md:col-span-8">
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-foreground/80 md:text-xl">
              UI/UX Designer with hands-on experience designing user-friendly digital interfaces and
              prototypes. Skilled in Figma, Adobe Photoshop, Illustrator, and Adobe XD, with a solid
              understanding of UI/UX fundamentals and design best practices — motivated to learn and
              grow in a professional design environment.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              { k: "Approach", v: "User-first, research-led" },
              { k: "Toolkit", v: "Figma · XD · PS · AI" },
              { k: "Based in", v: "Kerala, India" },
            ].map((c, i) => (
              <Reveal key={c.k} delay={0.15 + i * 0.08}>
                <div className="glass rounded-2xl p-5 transition-transform duration-500 hover:-translate-y-1">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    {c.k}
                  </div>
                  <div className="font-display mt-2 text-lg">{c.v}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="relative px-6 py-20">
      <div className="absolute inset-x-0 top-0 -z-10 h-[40rem] bg-aurora opacity-60" />
      <div className="container-fluid">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Selected Work
              </p>
              <h2 className="font-display mt-3 text-4xl leading-tight md:text-6xl">
                Projects that prioritize <span className="text-gradient italic">people.</span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <a
              href="https://www.behance.net/delnadavis"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-foreground/70 hover:text-foreground"
            >
              View full archive on Behance
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: (typeof PROJECTS)[number]; index: number }) {
  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className="group relative block overflow-hidden rounded-3xl glass-strong p-6 shadow-soft transition-shadow hover:shadow-lift md:p-7"
      data-cursor
    >
      {/* Visual */}
      <div className="relative aspect-[5/3.2] overflow-hidden rounded-2xl bg-muted">
        <div className="absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-105">
          {project.visual}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,white/15,transparent_55%)]" />
        <div className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-white/70 px-2.5 py-1 text-[10px] font-medium uppercase tracking-widest text-foreground/70 backdrop-blur">
          {project.year} · {project.role}
        </div>
        <div className="absolute inset-x-5 bottom-4">
          <h3 className="font-display text-3xl leading-tight text-white drop-shadow-sm md:text-4xl">
            {project.title}
          </h3>
          <p className="mt-1 text-xs text-white/80">{project.tag}</p>
        </div>
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileHover={{ y: 0, opacity: 1 }}
          className="absolute bottom-4 right-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-foreground shadow-soft transition-opacity group-hover:opacity-100"
        >
          <ArrowUpRight className="h-5 w-5" />
        </motion.div>
      </div>

      <div className="mt-6 flex items-start justify-between gap-6">
        <div>
          <p className="max-w-md text-sm leading-relaxed text-foreground/70">
            {project.description}
          </p>
        </div>
        <ExternalLink className="mt-1 h-5 w-5 shrink-0 text-foreground/40 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
      </div>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.tools.map((t) => (
          <span
            key={t}
            className="rounded-full border border-border bg-white/50 px-2.5 py-1 text-[11px] text-foreground/70"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.a>
  );
}

function Experience() {
  return (
    <section id="experience" className="relative px-6 py-20">
      <div className="container-fluid">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Experience</p>
          <h2 className="font-display mt-3 max-w-2xl text-4xl leading-tight md:text-5xl">
            Where I've sharpened the craft.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-7" delay={0.1}>
            <article className="relative overflow-hidden rounded-3xl glass-strong p-8 shadow-soft md:p-10">
              <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-violet-gradient opacity-20 blur-3xl" />
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span className="rounded-full bg-secondary px-2.5 py-1 font-medium">
                  Internship
                </span>
                <span>Apr 2025 — Oct 2025</span>
              </div>
              <h3 className="font-display mt-5 text-3xl md:text-4xl">UI/UX Designer</h3>
              <p className="mt-1 text-foreground/70">Zoople Technologies · Ernakulam</p>
              <ul className="mt-6 space-y-3 text-foreground/80">
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-gradient" />
                  Designed and prototyped user-friendly interfaces, improving user engagement by
                  30%.
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-gradient" />
                  Created interactive prototypes using Figma and Adobe XD to visualize design
                  concepts.
                </li>
              </ul>
            </article>
          </Reveal>

          <Reveal className="md:col-span-5" delay={0.2}>
            <div className="flex h-full flex-col gap-4">
              <div className="rounded-3xl glass p-6">
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  Role
                </div>
                <p className="mt-2 font-display text-xl leading-snug">
                  Designing and prototyping interfaces — turning concepts into clear, interactive
                  flows.
                </p>
              </div>
              <div className="grid flex-1 grid-cols-2 gap-4">
                <div className="rounded-3xl glass p-6">
                  <div className="font-display text-4xl text-gradient">30%</div>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Engagement uplift on designed interfaces
                  </p>
                </div>
                <div className="rounded-3xl glass p-6">
                  <div className="font-display text-4xl text-gradient">6mo</div>
                  <p className="mt-2 text-xs text-muted-foreground">
                    Industry internship at Zoople Technologies
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="relative px-6 py-20">
      <div className="container-fluid">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Skills</p>
              <h2 className="font-display mt-3 max-w-xl text-4xl leading-tight md:text-5xl">
                A toolkit built around <span className="text-gradient italic">clarity.</span>
              </h2>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SKILLS.map((s, i) => (
            <Reveal key={s.group} delay={i * 0.08}>
              <div className="group relative h-full overflow-hidden rounded-3xl glass-strong p-6 shadow-soft transition-transform duration-500 hover:-translate-y-1">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-violet-gradient opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-30" />
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-violet-gradient text-primary-foreground shadow-soft">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display mt-5 text-lg">{s.group}</h3>
                <ul className="mt-4 space-y-2">
                  {s.items.map((it) => (
                    <li key={it} className="text-sm text-foreground/75">
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="relative px-6 py-20">
      <div className="container-fluid">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Education</p>
          <h2 className="font-display mt-3 max-w-2xl text-4xl leading-tight md:text-5xl">
            A foundation in computer applications.
          </h2>
        </Reveal>

        <ol className="relative mt-14 space-y-4 border-l border-border pl-8">
          {EDUCATION.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.08}>
              <li className="relative">
                <span className="absolute -left-[37px] top-3 inline-flex h-3 w-3 rounded-full bg-violet-gradient ring-4 ring-background" />
                <div className="rounded-3xl glass p-6 transition-transform duration-500 hover:-translate-y-1 md:flex md:items-center md:justify-between md:gap-8">
                  <div>
                    <h3 className="font-display text-xl md:text-2xl">{e.title}</h3>
                    <p className="mt-1 text-sm text-foreground/70">{e.place}</p>
                  </div>
                  <span className="mt-2 inline-block text-xs uppercase tracking-widest text-muted-foreground md:mt-0">
                    {e.period}
                  </span>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Contact() {
  const cta = useMagnetic<HTMLAnchorElement>();
  return (
    <section id="contact" className="relative px-6 py-20">
      <div className="container-fluid">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-violet-gradient p-10 text-primary-foreground shadow-lift md:p-16">
          <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/20 blur-3xl animate-float" />
          <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-white/10 blur-3xl animate-float-delay" />

          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-white/70">Contact</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display mt-4 max-w-3xl text-5xl leading-[1.05] md:text-7xl">
              Let's design something <em className="italic">memorable</em> together.
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                ref={cta}
                href="mailto:delnaddavis1473@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-foreground shadow-glow transition-transform"
                data-cursor
              >
                <Mail className="h-4 w-4" />
                delnaddavis1473@gmail.com
              </a>
              <a
                href="tel:+919947532895"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-medium text-white backdrop-blur hover:bg-white/20"
              >
                <Phone className="h-4 w-4" />
                +91 99475 32895
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-12 grid gap-6 border-t border-white/15 pt-8 sm:grid-cols-3">
              <a
                href="https://www.linkedin.com/in/delna-davis"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-2xl bg-white/10 px-5 py-4 backdrop-blur transition-colors hover:bg-white/20"
              >
                <span className="flex items-center gap-2 text-sm">
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href="https://www.behance.net/delnadavis"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-2xl bg-white/10 px-5 py-4 backdrop-blur transition-colors hover:bg-white/20"
              >
                <span className="text-sm">Behance</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href="mailto:delnaddavis1473@gmail.com"
                className="group flex items-center justify-between rounded-2xl bg-white/10 px-5 py-4 backdrop-blur transition-colors hover:bg-white/20"
              >
                <span className="text-sm">Email</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </Reveal>
        </div>

        <footer className="mt-10 flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Delna Davis. Crafted with care.</p>
          <p>Designed & built as a personal portfolio.</p>
        </footer>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <main className="relative overflow-hidden bg-background text-foreground">
      <Cursor />
      <Nav />
      <Hero />
      <About />
      <Work />
      <Experience />
      <Skills />
      <Education />
      <Contact />
    </main>
  );
}
