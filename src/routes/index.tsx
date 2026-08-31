import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Users, Database, Search, LineChart, Home, Mail, MessageCircle, Linkedin,
  CheckCircle2, ArrowRight, Clock, ShieldCheck, FileSpreadsheet,
  Menu, X, Quote, Star, MapPin, BarChart3, FileSearch, Briefcase,
  Download, ArrowUp, Globe2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import portrait from "@/assets/zulqarnain.jpeg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zulqarnain Haider — Executive Virtual Assistant" },
      { name: "description", content: "Executive Virtual Assistant specializing in lead generation, data entry, web research, CRM management, and real estate support. 200+ projects delivered for clients worldwide." },
      { property: "og:title", content: "Zulqarnain Haider — Executive Virtual Assistant" },
      { property: "og:description", content: "Executive Virtual Assistant specializing in lead generation, data entry, web research, CRM management, and real estate support." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
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
  { n: "I", title: "Understand Requirements", desc: "I review your task, goals, tools, and expected output." },
  { n: "II", title: "Research & Organize", desc: "I collect, verify, clean, and organize the required data." },
  { n: "III", title: "Quality Check", desc: "I review the work for accuracy, formatting, and completeness." },
  { n: "IV", title: "Delivery", desc: "I deliver clean, professional, and easy-to-use results on time." },
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
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 bg-background" />
  );
}

function LoadingScreen() {
  const [gone, setGone] = useState(false);
  const [fade, setFade] = useState(false);
  useEffect(() => {
    const t1 = setTimeout(() => setFade(true), 900);
    const t2 = setTimeout(() => setGone(true), 1500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);
  if (gone) return null;
  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#0d0d0d] transition-opacity duration-500 ${fade ? "opacity-0" : "opacity-100"}`}>
      <div className="flex flex-col items-center gap-5">
        <span className="font-display text-4xl text-gold italic">ZH</span>
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
        <span className="text-[10px] uppercase tracking-[0.4em] text-gold-light/60">Executive Virtual Assistance</span>
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
      className={`fixed bottom-6 left-6 z-40 w-11 h-11 border border-gold/40 bg-[#0d0d0d] flex items-center justify-center text-gold hover:bg-gold hover:text-[#0d0d0d] transition-all ${show ? "opacity-100" : "opacity-0 pointer-events-none translate-y-3"}`}
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
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "backdrop-blur-xl bg-[#0d0d0d]/85 border-b border-gold/20" : "bg-transparent border-b border-transparent"}`}>
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <span className="font-display italic text-xl text-gold">ZH</span>
          <span className="hidden sm:block h-4 w-px bg-gold/30" />
          <span className="hidden sm:block font-display text-sm tracking-wide text-foreground">Zulqarnain Haider</span>
        </a>
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(l => (
            <a key={l.href} href={l.href}
              className="relative px-3 py-2 text-xs uppercase tracking-[0.15em] font-medium text-foreground/60 hover:text-gold-light transition-colors group">
              {l.label}
              <span className="absolute left-3 right-3 -bottom-0.5 h-px bg-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
            </a>
          ))}
        </nav>
        <a href="#contact" className="hidden md:inline-flex">
          <Button className="bg-gold text-[#0d0d0d] hover:bg-gold-light transition-colors uppercase text-[11px] tracking-[0.2em] font-semibold rounded-none px-6 h-10">
            Hire Me
          </Button>
        </a>
        <button className="md:hidden text-gold-light" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-gold/20 bg-[#0d0d0d]/95 backdrop-blur-xl">
          <div className="px-6 py-4 flex flex-col gap-2">
            {navLinks.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-xs uppercase tracking-[0.15em] font-medium text-foreground/70 py-2">{l.label}</a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-2">
              <Button className="w-full bg-gold text-[#0d0d0d] uppercase text-[11px] tracking-[0.2em] rounded-none">Hire Me</Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative border-b border-gold/20">
      <div className="grid lg:grid-cols-[55%_45%] min-h-screen">
        {/* Left: editorial content */}
        <div className="flex flex-col justify-center px-6 md:px-16 lg:px-20 pt-32 pb-16 lg:py-0 bg-[#0d0d0d]">
          <div className="max-w-xl">
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 text-gold tracking-[0.3em] text-[11px] font-semibold uppercase pb-2 border-b border-gold">
                <span className="relative flex w-1.5 h-1.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-gold opacity-70 animate-ping" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-gold" />
                </span>
                Available for new projects
              </span>
            </div>
            <h1 className="mt-8 text-4xl md:text-6xl lg:text-7xl text-white leading-[1.08] animate-fade-up" style={{ animationDelay: "120ms" }}>
              Helping businesses <span className="text-gold italic">scale</span> with elite virtual assistance.
            </h1>
            <p className="mt-8 text-base md:text-lg text-gold-light/70 max-w-lg leading-relaxed font-light animate-fade-up" style={{ animationDelay: "260ms" }}>
              Executive Assistance · Lead Generation · Recruitment · CRM Management · Appointment Setting · Administrative Support · Real Estate Support · LinkedIn Outreach.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "380ms" }}>
              <a href="#contact">
                <Button size="lg" className="bg-gold text-[#0d0d0d] hover:bg-gold-light transition-colors uppercase text-xs tracking-[0.2em] font-semibold rounded-none px-10 h-12">
                  Hire Me <ArrowRight size={14} />
                </Button>
              </a>
              <a href="#portfolio">
                <Button size="lg" variant="outline" className="border-gold/40 text-gold hover:bg-gold/10 hover:text-gold-light uppercase text-xs tracking-[0.2em] font-semibold rounded-none px-10 h-12">
                  View Portfolio
                </Button>
              </a>
              <a href="mailto:yourvazulqarnain@gmail.com?subject=Resume%20Request" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold-light/60 hover:text-gold-light transition-colors h-12 px-2">
                <Download size={14} /> Resume
              </a>
            </div>
          </div>
        </div>

        {/* Right: framed portrait panel */}
        <div className="relative bg-[#141310] flex items-center justify-center py-16 lg:py-0 border-t lg:border-t-0 lg:border-l border-gold/20">
          <div className="w-[78%] max-w-[400px] animate-fade-up" style={{ animationDelay: "320ms" }}>
            <div className="border border-gold/25 p-3 bg-[#0d0d0d]">
              <div className="relative overflow-hidden aspect-[4/5]">
                <img src={portrait.url} alt="Zulqarnain Haider — Executive Virtual Assistant" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="font-display text-white text-lg leading-tight">Zulqarnain Haider</div>
                  <div className="text-gold-light/70 text-[10px] uppercase tracking-[0.25em] mt-1">Virtual Assistant · Lead Gen</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsBar() {
  const stats = [
    { value: 200, suffix: "+", label: "Projects Completed" },
    { value: 4, suffix: "+", label: "Years Experience" },
    { value: 10000, suffix: "+", label: "Leads Generated" },
    { value: 15, suffix: "+", label: "Global Clients" },
  ];
  return (
    <section className="bg-[#141310] border-b border-gold/20">
      <div className="mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 md:divide-x md:divide-gold/20">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 80}>
            <div className="py-14 px-6 flex flex-col items-center justify-center text-center">
              <span className="font-display text-4xl md:text-5xl text-gold mb-2">
                <Counter to={s.value} suffix={s.suffix} />
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-gold-light/60 font-semibold">{s.label}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ClientsStrip() {
  return (
    <section className="py-12 border-b border-gold/20">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="text-center text-[10px] uppercase tracking-[0.35em] text-gold/70 mb-7">Trusted by clients across</div>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3">
            {regions.map(r => (
              <span key={r} className="text-xs uppercase tracking-[0.15em] text-foreground/50 hover:text-gold-light transition-colors">
                {r}
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
    <Reveal className={`${center ? "text-center mx-auto" : ""} max-w-2xl mb-16`}>
      <span className="overline-gold mb-5">
        <span className="h-px w-6 bg-gold" /> {eyebrow} {center && <span className="h-px w-6 bg-gold" />}
      </span>
      <h2 className="text-3xl md:text-5xl text-white leading-tight">{title}</h2>
      <div className={`mt-6 h-px w-16 bg-gold/60 ${center ? "mx-auto" : ""}`} />
    </Reveal>
  );
}

function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <SectionHead eyebrow="About Me" title="A dedicated VA focused on reliability" center />
        <Reveal>
          <div className="space-y-5 text-gold-light/70 leading-relaxed text-lg font-light">
            <p>
              Hi, I'm <span className="text-white font-medium">Zulqarnain Haider</span>, a professional Virtual Assistant with experience in lead generation, data entry, web research, CRM management, and administrative support. I help business owners, real estate professionals, recruiters, and agencies stay organized by managing research, data, spreadsheets, and daily operational tasks.
            </p>
            <p className="font-display italic text-gold-light">My focus is simple: accurate work, clear communication, fast turnaround, and reliable support.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-24 border-t border-gold/10">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead eyebrow="Services" title="Everything you need to stay organized" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/15 border border-gold/20">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <div className="group h-full p-10 bg-[#121110] hover:bg-[#171512] transition-colors duration-500">
                <s.icon size={26} strokeWidth={1.5} className="text-gold mb-6 transform group-hover:-translate-y-1 transition-transform duration-300" />
                <h3 className="font-display text-xl text-white mb-4">{s.title}</h3>
                <p className="text-sm text-gold-light/60 leading-relaxed">{s.desc}</p>
                <div className="mt-6 h-px w-0 bg-gold group-hover:w-12 transition-all duration-500" />
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
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((s) => (
              <span key={s}
                className="px-4 py-2 border border-gold/20 bg-[#141310] text-xs uppercase tracking-[0.12em] text-gold-light/70 hover:text-gold-light hover:border-gold/50 transition-colors cursor-default">
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
    <section className="py-24 border-t border-gold/10">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead eyebrow="Why Work With Me" title="Built for reliability and results" />
        <div className="grid md:grid-cols-2 gap-x-14">
          {whyPoints.map((w, i) => (
            <Reveal key={w.text} delay={i * 40}>
              <div className="flex items-start gap-5 py-6 border-b border-gold/15 group">
                <w.icon size={18} className="text-gold shrink-0 mt-1" />
                <p className="text-foreground/85 font-light text-lg group-hover:text-gold-light transition-colors">{w.text}</p>
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
    <section className="py-24 bg-[#141310] border-y border-gold/20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead eyebrow="How I Work" title="A clear four-step process" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-gold/15 border border-gold/20">
          {process.map((p, i) => (
            <Reveal key={p.n} delay={i * 80}>
              <div className="h-full p-8 bg-[#121110] hover:bg-[#171512] transition-colors duration-500">
                <div className="font-display italic text-4xl text-gold/70 mb-4">{p.n}</div>
                <h3 className="font-display text-lg text-white mb-3">{p.title}</h3>
                <p className="text-sm text-gold-light/60 leading-relaxed">{p.desc}</p>
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
      <div className="mx-auto max-w-3xl px-6">
        <SectionHead eyebrow="Experience" title="Professional background" />
        <div className="relative pl-10 space-y-12">
          <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-gold via-gold/40 to-transparent" />
          {experience.map(e => (
            <Reveal key={e.role + e.company}>
              <div className="relative">
                <div className="absolute -left-[41px] top-1.5 w-3 h-3 rotate-45 bg-gold" />
                <div className="text-[10px] font-semibold text-gold mb-2 uppercase tracking-[0.25em]">{e.period}</div>
                <h3 className="font-display text-xl text-white">{e.role} <span className="text-gold-light/50 font-normal">— {e.company}</span></h3>
                <p className="mt-3 text-gold-light/60 leading-relaxed font-light">{e.desc}</p>
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
    <section id="portfolio" className="py-24 border-t border-gold/10">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHead eyebrow="Work Samples" title="Selected client work" />
        <div className="grid md:grid-cols-2 gap-px bg-gold/15 border border-gold/20">
          {portfolio.map((p, i) => (
            <Reveal key={p.title} delay={i * 70}>
              <div className="group h-full p-10 bg-[#121110] hover:bg-[#171512] transition-colors duration-500">
                <div className="flex items-start justify-between mb-6">
                  <p.icon size={26} strokeWidth={1.5} className="text-gold" />
                  <span className="font-display italic text-sm text-gold/50">0{i+1} / 0{portfolio.length}</span>
                </div>
                <h3 className="font-display text-xl text-white mb-4">{p.title}</h3>
                <p className="text-sm text-gold-light/60 leading-relaxed">{p.desc}</p>
                <div className="mt-6 h-px w-0 bg-gold group-hover:w-12 transition-all duration-500" />
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-10 text-sm text-gold-light/40 text-center font-display italic">
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
    <section className="py-24 bg-[#141310] border-y border-gold/20">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHead eyebrow="Testimonials" title="What clients say" center />
        <Reveal>
          <div className="relative border border-gold/25 bg-[#0d0d0d] p-10 md:p-14 text-center">
            <Quote size={30} className="mx-auto text-gold/60 mb-6" />
            <div className="flex items-center justify-center gap-1.5 mb-6 text-gold">
              {Array.from({ length: 5 }).map((_, k) => (
                <Star key={k} size={15} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <p key={idx} className="font-display text-xl md:text-2xl text-white leading-relaxed animate-fade-up">
              "{testimonials[idx].text}"
            </p>
            <div className="mt-9 flex items-center justify-center gap-4">
              <div className="w-11 h-11 rounded-full border border-gold/50 text-gold flex items-center justify-center font-display italic text-sm">
                {testimonials[idx].initials}
              </div>
              <div className="text-xs uppercase tracking-[0.2em] text-gold-light/60">{testimonials[idx].author}</div>
            </div>
          </div>
          <div className="mt-8 flex justify-center gap-2.5">
            {testimonials.map((_, i) => (
              <button key={i} aria-label={`Testimonial ${i+1}`} onClick={() => setIdx(i)}
                className={`h-px transition-all duration-300 ${i === idx ? "w-10 bg-gold" : "w-4 bg-gold/25"}`} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="relative border border-gold/30 bg-[#121110] p-10 md:p-16 text-center">
            <div className="relative">
              <span className="overline-gold mb-6"><span className="h-px w-6 bg-gold" /> Let's Talk <span className="h-px w-6 bg-gold" /></span>
              <h2 className="text-3xl md:text-5xl text-white">Need reliable <span className="text-gold italic">VA support</span>?</h2>
              <p className="mt-5 text-gold-light/70 max-w-2xl mx-auto text-lg font-light">
                Let's work together to save your time, organize your data, and manage your daily business tasks more efficiently.
              </p>
              <a href="#contact" className="inline-block mt-9">
                <Button size="lg" className="bg-gold text-[#0d0d0d] hover:bg-gold-light transition-colors uppercase text-xs tracking-[0.2em] font-semibold rounded-none px-10 h-12">
                  Contact Me <ArrowRight size={14} />
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
    <section id="faq" className="py-24 border-t border-gold/10">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHead eyebrow="FAQ" title="Frequently asked questions" center />
        <Reveal>
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border border-gold/20 bg-[#121110] px-6 data-[state=open]:border-gold/40 transition-colors">
                <AccordionTrigger className="text-left text-white font-display text-base hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-gold-light/60 leading-relaxed font-light">
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
    <section id="contact" className="py-24 bg-[#141310] border-t border-gold/20">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <SectionHead eyebrow="Contact" title="Let's get in touch" center />
        <Reveal>
          <p className="text-gold-light/60 leading-relaxed max-w-2xl mx-auto -mt-8 mb-12 font-light">
            Have a project or need ongoing VA support? Reach out directly and I'll reply within 24 hours.
          </p>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-px bg-gold/15 border border-gold/20">
          {cards.map((c, i) => (
            <Reveal key={c.label} delay={i * 80}>
              <a
                href={c.href}
                {...(c.ext ? { target: "_blank", rel: "noreferrer" } : {})}
                className="group h-full flex flex-col items-center gap-5 p-10 bg-[#121110] hover:bg-[#171512] transition-colors duration-500"
              >
                <c.icon size={24} strokeWidth={1.5} className="text-gold group-hover:-translate-y-1 transition-transform duration-300" />
                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-gold-light/50 mb-2">{c.label}</div>
                  <div className="font-medium text-white break-all text-sm">{c.value}</div>
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
    <footer className="relative border-t border-gold/20">
      <div className="mx-auto max-w-7xl px-6 py-14 flex flex-col md:flex-row items-center justify-between gap-8">
        <a href="#home" className="flex items-center gap-3">
          <span className="font-display italic text-xl text-gold">ZH</span>
          <span className="h-4 w-px bg-gold/30" />
          <span className="font-display text-sm text-foreground">Zulqarnain Haider</span>
        </a>
        <div className="flex items-center gap-8">
          {["Home","Services","Portfolio","Contact"].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-[11px] uppercase tracking-[0.2em] text-foreground/50 hover:text-gold-light transition-colors">{l}</a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          {socials.map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}
              className="w-10 h-10 border border-gold/30 flex items-center justify-center text-gold/80 hover:text-[#0d0d0d] hover:bg-gold transition-colors">
              <s.icon size={15} />
            </a>
          ))}
        </div>
      </div>
      <div className="text-center pb-8 text-[10px] uppercase tracking-[0.25em] text-gold-light/35">© 2026 Zulqarnain Haider. All Rights Reserved.</div>
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
      className={`fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 px-6 py-3 bg-gold text-[#0d0d0d] font-semibold text-[11px] uppercase tracking-[0.2em] transition-all duration-300 hover:bg-gold-light ${show ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"}`}
    >
      Hire Me
    </a>
  );
}

function Portfolio() {
  return (
    <div className="relative min-h-screen text-foreground">
      <BackgroundFX />
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
