import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Users, Database, Search, LineChart, Home, Mail, MessageCircle, Linkedin,
  CheckCircle2, ArrowRight, Sparkles, Clock, ShieldCheck, FileSpreadsheet,
  Menu, X, Quote, Star, MapPin, BarChart3, FileSearch, Briefcase,
  Zap, Smile, Timer, Download, ArrowUp, Globe2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import portrait from "@/assets/zulqarnain.jpeg.asset.json";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

// ============ DATA ============
const services = [
  { icon: Users, title: "Lead Generation", desc: "Targeted B2B lead lists with verified company details, contact information, LinkedIn profiles, and decision-maker data." },
  { icon: Database, title: "Data Entry", desc: "Accurate data input, formatting, cleaning, spreadsheet organization, and database management." },
  { icon: Search, title: "Web Research", desc: "Detailed online research for companies, contacts, events, real estate, recruiting, influencers, and market information." },
  { icon: LineChart, title: "CRM Management", desc: "Updating, organizing, and maintaining CRM records in tools like HubSpot, Salesforce, and similar platforms." },
  { icon: Home, title: "Real Estate VA Support", desc: "Property research, listing support, agent research, data mining, lead lists, and client follow-up support." },
  { icon: FileSpreadsheet, title: "Administrative Support", desc: "Email management, file organization, scheduling support, document formatting, and daily admin assistance." },
];

const skills = [
  "Google Sheets","Microsoft Excel","Data Entry","Lead Generation","LinkedIn Research",
  "Web Research","CRM Management","HubSpot","Salesforce","Apollo",
  "LinkedIn Sales Navigator","Email Management","Admin Support","Real Estate Research",
  "Data Mining","PDF Conversion","Internet Research","Contact List Building",
];

const portfolio = [
  { icon: Users, title: "B2B Lead Generation List", desc: "Built targeted lead lists with company name, website, contact person, email, LinkedIn profile, industry, and location." },
  { icon: MapPin, title: "Real Estate Data Research", desc: "Collected and organized property, agent, broker, and market data for real estate clients." },
  { icon: BarChart3, title: "CRM Data Cleanup", desc: "Updated missing fields, removed duplicates, organized contacts, and improved CRM data quality." },
  { icon: FileSearch, title: "Web Research Report", desc: "Collected business, event, contact, and market information from online sources and organized into clear spreadsheets." },
];

const whyPoints = [
  { icon: CheckCircle2, text: "Accurate and detail-oriented work" },
  { icon: Clock, text: "Fast turnaround and reliable communication" },
  { icon: Search, text: "Experience with research and admin workflows" },
  { icon: FileSpreadsheet, text: "Organized spreadsheet and CRM management" },
  { icon: Users, text: "Flexible support for businesses and agencies" },
  { icon: ShieldCheck, text: "Professional handling of confidential data" },
];

const process = [
  { n: "01", title: "Understand Requirements", desc: "I review your task, goals, tools, and expected output." },
  { n: "02", title: "Research & Organize", desc: "I collect, verify, clean, and organize the required data." },
  { n: "03", title: "Quality Check", desc: "I review the work for accuracy, formatting, and completeness." },
  { n: "04", title: "Delivery", desc: "I deliver clean, professional, and easy-to-use results on time." },
];

const experience = [
  { role: "Virtual Assistant", company: "Frontline Financial", period: "June 2023 – Present", desc: "Provided admin support, data entry, research, spreadsheet management, and client-related assistance." },
  { role: "Freelance Virtual Assistant", company: "Upwork", period: "January 2020 – Present", desc: "Completed 200+ projects related to lead generation, data entry, web research, CRM updates, and administrative support." },
];

const testimonials = [
  { text: "Zulqarnain delivered accurate research and organized data exactly as requested. Communication was clear and the turnaround was excellent.", author: "Client, Upwork", initials: "JD" },
  { text: "Very reliable, responsive, and detail-oriented virtual assistant. Highly recommended for any research or admin project.", author: "Client, Upwork", initials: "SM" },
  { text: "Great support with lead generation and spreadsheet management. Delivered exactly what was scoped, on time.", author: "Client, Upwork", initials: "AR" },
];

const faqs = [
  { q: "What tools do you use?", a: "I work with Google Sheets, Microsoft Excel, HubSpot, Salesforce, Apollo, LinkedIn Sales Navigator, and other standard research, CRM, and productivity tools." },
  { q: "How fast is your turnaround?", a: "Most small tasks are delivered within 24 hours. Larger projects are scoped and delivered on an agreed timeline with regular progress updates." },
  { q: "Do you sign NDAs for confidential data?", a: "Yes. I sign NDAs and handle all client data with strict confidentiality and professional care." },
  { q: "What is your availability and timezone?", a: "I am available 40+ hours per week and can overlap with US, UK, EU, and AU business hours as needed." },
  { q: "How do we get started?", a: "Reach out via email, WhatsApp, or LinkedIn with a short description of your project. I'll reply within 24 hours to align on scope and next steps." },
];

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const regions = ["United States", "United Kingdom", "Canada", "Australia", "UAE", "Germany", "Singapore", "Netherlands"];

// ============ HOOKS ============
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("reveal-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function Counter({ to, suffix = "", duration = 1800 }: { to: number; suffix?: string; duration?: number }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const step = (now: number) => {
            const p = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(to * eased));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);
  return <span ref={ref}>{val}{suffix}</span>;
}

// ============ FX ============
function BackgroundFX() {
  // stars
  const stars = Array.from({ length: 40 }, (_, i) => ({
    left: (i * 137.5) % 100,
    top: (i * 53.3) % 100,
    delay: (i % 8) * 0.6,
    size: (i % 3) + 1,
  }));
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* base gradient */}
      <div className="absolute inset-0 bg-hero" />
      {/* aurora blobs */}
      <div className="absolute -top-40 -left-40 w-[720px] h-[720px] rounded-full blur-[160px] opacity-60 animate-aurora"
           style={{ background: "radial-gradient(circle, rgba(59,130,246,0.55), transparent 60%)" }} />
      <div className="absolute top-1/3 -right-40 w-[680px] h-[680px] rounded-full blur-[160px] opacity-50 animate-aurora"
           style={{ background: "radial-gradient(circle, rgba(139,92,246,0.55), transparent 60%)", animationDelay: "-8s" }} />
      <div className="absolute bottom-0 left-1/3 w-[620px] h-[620px] rounded-full blur-[160px] opacity-40 animate-aurora"
           style={{ background: "radial-gradient(circle, rgba(6,182,212,0.55), transparent 60%)", animationDelay: "-14s" }} />
      {/* grid */}
      <div className="absolute inset-0 bg-grid opacity-[0.35]"
           style={{ maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)" }} />
      {/* moving beam */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/2 top-0 w-[60%] h-[200%] blur-3xl opacity-40 animate-beam"
             style={{ background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.35), transparent)" }} />
      </div>
      {/* stars */}
      {stars.map((s, i) => (
        <span key={i} className="absolute rounded-full bg-white animate-twinkle"
          style={{ left: `${s.left}%`, top: `${s.top}%`, width: s.size, height: s.size, animationDelay: `${s.delay}s` }} />
      ))}
      {/* noise */}
      <div className="absolute inset-0 bg-noise opacity-[0.12] mix-blend-overlay" />
    </div>
  );
}

function CursorGlow() {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    let x = 0, y = 0, tx = 0, ty = 0;
    const onMove = (e: MouseEvent) => { tx = e.clientX; ty = e.clientY; };
    const tick = () => {
      x += (tx - x) * 0.18;
      y += (ty - y) * 0.18;
      el.style.transform = `translate3d(${x - 180}px, ${y - 180}px, 0)`;
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    return () => { window.removeEventListener("mousemove", onMove); cancelAnimationFrame(raf); };
  }, []);
  return (
    <div ref={ref} aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[60] w-[360px] h-[360px] rounded-full opacity-60 mix-blend-screen hidden md:block"
      style={{ background: "radial-gradient(circle, rgba(59,130,246,0.35), rgba(139,92,246,0.15) 40%, transparent 70%)", filter: "blur(20px)" }}
    />
  );
}

function LoadingScreen() {
  const [gone, setGone] = useState(false);
  const [fade, setFade] = useState(false);
  useEffect(() => {
    const t1 = setTimeout(() => setFade(true), 1100);
    const t2 = setTimeout(() => setGone(true), 1700);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);
  if (gone) return null;
  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#050816] transition-opacity duration-500 ${fade ? "opacity-0" : "opacity-100"}`}>
      <div className="relative">
        <div className="absolute inset-0 rounded-full blur-3xl opacity-70 bg-brand-gradient animate-gradient" />
        <div className="relative w-28 h-28 rounded-full glass-strong flex items-center justify-center">
          <div className="absolute inset-0 rounded-full animate-spin-slow"
               style={{ background: "conic-gradient(from 0deg, rgba(59,130,246,0.8), rgba(6,182,212,0.6), rgba(139,92,246,0.8), rgba(59,130,246,0.8))",
                        WebkitMask: "radial-gradient(circle, transparent 55%, black 56%)",
                        mask: "radial-gradient(circle, transparent 55%, black 56%)" }} />
          <span className="text-3xl font-display font-bold text-gradient">ZH</span>
        </div>
      </div>
    </div>
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onS = () => setShow(window.scrollY > 800);
    onS();
    window.addEventListener("scroll", onS, { passive: true });
    return () => window.removeEventListener("scroll", onS);
  }, []);
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`fixed bottom-6 left-6 z-40 w-11 h-11 rounded-full glass-strong flex items-center justify-center text-white transition-all ${show ? "opacity-100" : "opacity-0 pointer-events-none translate-y-3"}`}
    >
      <ArrowUp size={18} />
    </button>
  );
}

// ============ SECTIONS ============
function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "backdrop-blur-xl bg-[#050816]/70 border-b border-white/10 shadow-soft" : "bg-transparent border-b border-transparent"}`}>
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5 font-display font-bold text-white">
          <span className="relative w-9 h-9 rounded-lg bg-brand-gradient animate-gradient flex items-center justify-center text-white text-sm shadow-glow">
            ZH
          </span>
          <span className="text-gradient">Zulqarnain</span>
        </a>
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(l => (
            <a key={l.href} href={l.href}
              className="relative px-3 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors group">
              {l.label}
              <span className="absolute left-3 right-3 -bottom-0.5 h-px bg-brand-gradient scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
            </a>
          ))}
        </nav>
        <a href="#contact" className="hidden md:inline-flex">
          <Button className="btn-glow bg-brand-gradient animate-gradient text-white hover:opacity-95 transition-all hover:-translate-y-0.5 shadow-glow rounded-full px-5">
            Hire Me <ArrowRight size={14} />
          </Button>
        </a>
        <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#050816]/95 backdrop-blur-xl">
          <div className="px-6 py-4 flex flex-col gap-2">
            {navLinks.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm font-medium text-white/80 py-2">{l.label}</a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-2">
              <Button className="w-full bg-brand-gradient text-white rounded-full">Hire Me</Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${(-py * 8).toFixed(2)}deg) rotateY(${(px * 10).toFixed(2)}deg) translateY(-4px)`;
  };
  const onLeave = () => { const el = ref.current; if (el) el.style.transform = ""; };
  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}
      className={`transition-transform duration-200 will-change-transform ${className}`}>
      {children}
    </div>
  );
}

function Hero() {
  const badges = [
    { icon: Briefcase, label: "200+ Projects" },
    { icon: Users, label: "Lead Generation" },
    { icon: Home, label: "Real Estate VA" },
    { icon: Database, label: "Data Entry" },
  ];
  return (
    <section id="home" className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-14 items-center">
        {/* left */}
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass text-xs font-medium text-white/85 mb-6 animate-fade-up">
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            Available for new projects
            <Sparkles size={12} className="text-cyan-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] text-white animate-fade-up" style={{ animationDelay: "80ms" }}>
            Helping businesses <span className="text-gradient animate-gradient">scale</span> with elite virtual assistance
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-xl leading-relaxed animate-fade-up" style={{ animationDelay: "220ms" }}>
            Executive Assistance · Lead Generation · Recruitment · CRM Management · Appointment Setting · Administrative Support · Real Estate Support · LinkedIn Outreach.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: "340ms" }}>
            <a href="#contact">
              <Button size="lg" className="btn-glow rounded-full bg-brand-gradient animate-gradient text-white hover:-translate-y-0.5 transition-all shadow-glow px-6">
                Hire Me <ArrowRight size={16} />
              </Button>
            </a>
            <a href="#portfolio">
              <Button size="lg" variant="outline" className="rounded-full glass border-white/15 text-white hover:bg-white/10 hover:-translate-y-0.5 transition-all px-6">
                View Portfolio
              </Button>
            </a>
            <a href="mailto:yourvazulqarnain@gmail.com?subject=Resume%20Request">
              <Button size="lg" variant="ghost" className="rounded-full text-white/85 hover:text-white hover:bg-white/10 px-6">
                <Download size={16} /> Download Resume
              </Button>
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-2.5 animate-fade-up" style={{ animationDelay: "460ms" }}>
            {badges.map(b => (
              <span key={b.label} className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full glass text-xs text-white/85 hover:-translate-y-0.5 transition-all">
                <b.icon size={13} className="text-cyan-accent" /> {b.label}
              </span>
            ))}
          </div>
        </div>

        {/* right - premium profile card */}
        <div className="relative md:justify-self-end animate-fade-up" style={{ animationDelay: "260ms" }}>
          <div className="absolute -inset-8 bg-brand-gradient opacity-30 blur-3xl rounded-[3rem] animate-gradient" />
          <TiltCard>
            <div className="relative w-[300px] md:w-[360px] p-5 rounded-[2rem] glass-strong shadow-elevated animate-float">
              {/* animated border */}
              <div className="absolute inset-0 rounded-[2rem] pointer-events-none animate-spin-slow opacity-70"
                style={{
                  background: "conic-gradient(from 0deg, rgba(59,130,246,0.6), rgba(6,182,212,0.35), rgba(139,92,246,0.65), rgba(59,130,246,0.6))",
                  WebkitMask: "linear-gradient(#000,#000) content-box, linear-gradient(#000,#000)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                  padding: "1px",
                }} />
              <div className="relative overflow-hidden rounded-[1.5rem] aspect-[4/5]">
                <img src={portrait.url} alt="Zulqarnain Haider — Virtual Assistant" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div>
                    <div className="text-white font-semibold text-lg leading-tight">Zulqarnain Haider</div>
                    <div className="text-white/70 text-xs">Virtual Assistant · Lead Gen</div>
                  </div>
                  <div className="w-9 h-9 rounded-full glass flex items-center justify-center">
                    <Sparkles size={14} className="text-cyan-accent" />
                  </div>
                </div>
              </div>
              {/* floating stat chip */}
              <div className="absolute -left-6 -bottom-6 px-4 py-3 rounded-2xl glass-strong shadow-glow animate-float" style={{ animationDelay: "-2s" }}>
                <div className="text-2xl font-bold text-white leading-none"><Counter to={200} suffix="+" /></div>
                <div className="text-[10px] uppercase tracking-wider text-white/60 mt-1">Projects delivered</div>
              </div>
              <div className="absolute -right-4 -top-4 px-3 py-2 rounded-xl glass flex items-center gap-2 shadow-glow animate-float" style={{ animationDelay: "-4s" }}>
                <Star size={14} className="text-yellow-300" fill="currentColor" />
                <span className="text-xs text-white font-medium">5.0 Rating</span>
              </div>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}

function StatsBar() {
  const stats = [
    { icon: Briefcase, value: 200, suffix: "+", label: "Projects Completed" },
    { icon: Clock, value: 4, suffix: "+", label: "Years Experience" },
    { icon: Users, value: 10000, suffix: "+", label: "Leads Generated" },
    { icon: Globe2, value: 15, suffix: "+", label: "Global Clients" },
  ];
  return (
    <section className="py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="p-5 rounded-2xl glass flex items-center gap-4 hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 rounded-xl bg-brand-gradient text-white flex items-center justify-center shrink-0 shadow-glow">
                  <s.icon size={20} />
                </div>
                <div className="min-w-0">
                  <div className="text-2xl md:text-3xl font-display font-bold text-white leading-none">
                    <Counter to={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-xs text-white/60 mt-1">{s.label}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClientsStrip() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="text-center text-xs uppercase tracking-[0.25em] text-white/50 mb-6">Trusted by clients across</div>
          <div className="flex flex-wrap justify-center gap-3">
            {regions.map(r => (
              <span key={r} className="px-4 py-2 rounded-full glass text-sm text-white/80 hover:text-white transition-colors">
                <Globe2 size={13} className="inline mr-1.5 text-cyan-accent" />{r}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function SectionHead({ eyebrow, title, center = false }: { eyebrow: string; title: string; center?: boolean }) {
  return (
    <Reveal className={`${center ? "text-center mx-auto" : ""} max-w-2xl mb-14`}>
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-accent mb-4">
        <Sparkles size={11} /> {eyebrow}
      </div>
      <h2 className="text-3xl md:text-5xl font-bold text-white">
        {title.split(" ").map((w, i, arr) =>
          i === arr.length - 1 ? <span key={i} className="text-gradient animate-gradient">{w}</span> : <span key={i}>{w} </span>
        )}
      </h2>
    </Reveal>
  );
}

function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <SectionHead eyebrow="About Me" title="A dedicated VA focused on reliability" center />
        <Reveal>
          <div className="space-y-4 text-white/75 leading-relaxed text-lg">
            <p>
              Hi, I'm <span className="text-white font-semibold">Zulqarnain Haider</span>, a professional Virtual Assistant with experience in lead generation, data entry, web research, CRM management, and administrative support. I help business owners, real estate professionals, recruiters, and agencies stay organized by managing research, data, spreadsheets, and daily operational tasks.
            </p>
            <p>My focus is simple: accurate work, clear communication, fast turnaround, and reliable support.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead eyebrow="Services" title="Everything you need to stay organized" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <div className="group relative h-full p-7 rounded-2xl glass hover:-translate-y-1.5 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: "radial-gradient(400px circle at var(--x,50%) var(--y,50%), rgba(59,130,246,0.15), transparent 40%)" }} />
                <div className="absolute -top-24 -right-24 w-52 h-52 rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition-opacity"
                  style={{ background: "radial-gradient(circle, rgba(139,92,246,0.4), transparent)" }} />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-brand-gradient text-white flex items-center justify-center mb-5 shadow-glow group-hover:scale-110 transition-transform">
                    <s.icon size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{s.title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed">{s.desc}</p>
                  <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-cyan-accent opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight size={12} />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <SectionHead eyebrow="Skills & Tools" title="Tools I work with every day" center />
        <Reveal>
          <div className="flex flex-wrap justify-center gap-2.5">
            {skills.map((s, i) => (
              <span key={s}
                className="px-4 py-2 rounded-full glass text-sm font-medium text-white/85 hover:text-white hover:-translate-y-0.5 hover:shadow-glow transition-all cursor-default"
                style={{ animationDelay: `${i * 30}ms` }}>
                {s}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function WhyMe() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead eyebrow="Why Work With Me" title="Built for reliability and results" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyPoints.map((w, i) => (
            <Reveal key={w.text} delay={i * 50}>
              <div className="flex items-start gap-4 p-6 rounded-xl glass hover:-translate-y-0.5 hover:shadow-glow transition-all">
                <div className="w-10 h-10 rounded-lg bg-brand-gradient text-white flex items-center justify-center shrink-0 shadow-glow">
                  <w.icon size={18} />
                </div>
                <p className="text-white/90 font-medium pt-1.5">{w.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="py-24 relative">
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHead eyebrow="How I Work" title="A clear four-step process" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((p, i) => (
            <Reveal key={p.n} delay={i * 80}>
              <div className="relative h-full p-6 rounded-2xl glass hover:-translate-y-1 transition-all">
                <div className="text-5xl font-display font-bold text-gradient animate-gradient mb-3">{p.n}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{p.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHead eyebrow="Experience" title="Professional background" />
        <div className="relative pl-8 space-y-10">
          <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-brand via-purple-accent to-cyan-accent opacity-60" />
          {experience.map(e => (
            <Reveal key={e.role + e.company}>
              <div className="relative">
                <div className="absolute -left-[33px] top-1 w-4 h-4 rounded-full bg-brand-gradient ring-4 ring-[#050816] shadow-glow" />
                <div className="text-xs font-semibold text-cyan-accent mb-1 uppercase tracking-wider">{e.period}</div>
                <h3 className="text-xl font-semibold text-white">{e.role} <span className="text-white/50 font-normal">— {e.company}</span></h3>
                <p className="mt-2 text-white/70 leading-relaxed">{e.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead eyebrow="Work Samples" title="Selected client work" />
        <div className="grid md:grid-cols-2 gap-6">
          {portfolio.map((p, i) => (
            <Reveal key={p.title} delay={i * 70}>
              <div className="group relative h-full p-8 rounded-2xl glass hover:-translate-y-1 hover:shadow-glow transition-all overflow-hidden">
                <div className="absolute -top-24 -right-24 w-56 h-56 rounded-full bg-brand/10 blur-3xl group-hover:bg-brand/30 transition-colors" />
                <div className="relative flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-brand-gradient text-white flex items-center justify-center shrink-0 shadow-glow group-hover:scale-110 transition-transform">
                    <p.icon size={26} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-mono text-cyan-accent mb-1">0{i+1} / 0{portfolio.length}</div>
                    <h3 className="text-xl font-semibold text-white mb-3">{p.title}</h3>
                    <p className="text-white/70 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-10 text-sm text-white/50 text-center italic">
          Client data is always kept private and confidential. Sample work can be shared upon request with sensitive information removed.
        </p>
      </div>
    </section>
  );
}

function Testimonials() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % testimonials.length), 5500);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="py-24">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHead eyebrow="Testimonials" title="What clients say" center />
        <Reveal>
          <div className="relative">
            <div className="p-8 md:p-12 rounded-3xl glass-strong shadow-elevated text-center">
              <Quote size={36} className="mx-auto text-cyan-accent/70 mb-4" />
              <div className="flex items-center justify-center gap-1 mb-5 text-yellow-300">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p key={idx} className="text-xl md:text-2xl text-white leading-relaxed font-medium animate-fade-up">
                "{testimonials[idx].text}"
              </p>
              <div className="mt-8 flex items-center justify-center gap-3">
                <div className="w-11 h-11 rounded-full bg-brand-gradient text-white flex items-center justify-center font-semibold text-sm shadow-glow">
                  {testimonials[idx].initials}
                </div>
                <div className="text-sm text-white/70">{testimonials[idx].author}</div>
              </div>
            </div>
            <div className="mt-6 flex justify-center gap-2">
              {testimonials.map((_, i) => (
                <button key={i} aria-label={`Testimonial ${i+1}`} onClick={() => setIdx(i)}
                  className={`h-1.5 rounded-full transition-all ${i === idx ? "w-8 bg-brand-gradient" : "w-3 bg-white/20"}`} />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl glass-strong p-10 md:p-16 text-center">
            <div className="absolute inset-0 bg-brand-gradient opacity-20 animate-gradient" />
            <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-purple-accent/40 blur-[120px]" />
            <div className="absolute -bottom-24 -left-24 w-[420px] h-[420px] rounded-full bg-cyan-accent/30 blur-[120px]" />
            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-bold text-white">Need reliable <span className="text-gradient animate-gradient">VA support</span>?</h2>
              <p className="mt-4 text-white/80 max-w-2xl mx-auto text-lg">
                Let's work together to save your time, organize your data, and manage your daily business tasks more efficiently.
              </p>
              <a href="#contact" className="inline-block mt-8">
                <Button size="lg" className="btn-glow rounded-full bg-brand-gradient animate-gradient text-white hover:-translate-y-0.5 transition-all shadow-glow px-7">
                  Contact Me <ArrowRight size={16} />
                </Button>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHead eyebrow="FAQ" title="Frequently asked questions" center />
        <Reveal>
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-0 rounded-xl glass px-5 data-[state=open]:shadow-glow transition-shadow">
                <AccordionTrigger className="text-left text-white font-semibold hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-white/70 leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  const cards = [
    { href: "mailto:yourvazulqarnain@gmail.com", icon: Mail, label: "Email", value: "yourvazulqarnain@gmail.com", ext: false },
    { href: "https://wa.me/923458007325", icon: MessageCircle, label: "WhatsApp", value: "+92 345 8007325", ext: true },
    { href: "https://www.linkedin.com/in/zulqarnain-haider-42763b418/", icon: Linkedin, label: "LinkedIn", value: "Zulqarnain Haider", ext: true },
  ];
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <SectionHead eyebrow="Contact" title="Let's get in touch" center />
        <Reveal>
          <p className="text-white/70 leading-relaxed max-w-2xl mx-auto -mt-8 mb-10">
            Have a project or need ongoing VA support? Reach out directly and I'll reply within 24 hours.
          </p>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-5">
          {cards.map((c, i) => (
            <Reveal key={c.label} delay={i * 80}>
              <a
                href={c.href}
                {...(c.ext ? { target: "_blank", rel: "noreferrer" } : {})}
                className="group h-full flex flex-col items-center gap-4 p-7 rounded-2xl glass hover:-translate-y-1 hover:shadow-glow transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-gradient text-white flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                  <c.icon size={22} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-white/50 mb-1">{c.label}</div>
                  <div className="font-medium text-white break-all">{c.value}</div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const socials = [
    { href: "https://www.linkedin.com/in/zulqarnain-haider-42763b418/", icon: Linkedin, label: "LinkedIn" },
    { href: "mailto:yourvazulqarnain@gmail.com", icon: Mail, label: "Email" },
    { href: "https://wa.me/923458007325", icon: MessageCircle, label: "WhatsApp" },
  ];
  return (
    <footer className="relative mt-10 border-t border-white/10">
      <div className="absolute inset-x-0 -top-px h-px bg-brand-gradient opacity-70" />
      <div className="mx-auto max-w-7xl px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5 text-white font-display font-bold">
          <span className="w-8 h-8 rounded-lg bg-brand-gradient animate-gradient flex items-center justify-center text-white text-xs shadow-glow">ZH</span>
          <span className="text-gradient">Zulqarnain Haider</span>
        </div>
        <div className="flex items-center gap-6 text-sm">
          {["Home","Services","Portfolio","Contact"].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-white/60 hover:text-white transition-colors">{l}</a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          {socials.map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/80 hover:text-white hover:shadow-glow hover:-translate-y-0.5 transition-all">
              <s.icon size={15} />
            </a>
          ))}
        </div>
      </div>
      <div className="text-center pb-8 text-xs text-white/40">© 2026 Zulqarnain Haider. All Rights Reserved.</div>
    </footer>
  );
}

function FloatingCTA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <a
      href="#contact"
      aria-label="Hire Me"
      className={`fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-brand-gradient animate-gradient text-white font-semibold text-sm shadow-glow animate-soft-pulse transition-all duration-300 hover:-translate-y-0.5 ${show ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"}`}
    >
      <Zap size={16} /> Hire Me
    </a>
  );
}

function Portfolio() {
  return (
    <div className="relative min-h-screen text-white">
      <BackgroundFX />
      <CursorGlow />
      <LoadingScreen />
      <Nav />
      <Hero />
      <StatsBar />
      <ClientsStrip />
      <About />
      <Services />
      <Skills />
      <PortfolioSection />
      <WhyMe />
      <Process />
      <Experience />
      <Testimonials />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
      <FloatingCTA />
      <BackToTop />
    </div>
  );
}
