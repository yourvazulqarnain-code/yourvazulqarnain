import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Users, Database, Search, LineChart, Home, Mail, MessageCircle, Linkedin,
  CheckCircle2, ArrowRight, Sparkles, Clock, ShieldCheck, FileSpreadsheet,
  Menu, X, Quote, Star, MapPin, BarChart3, FileSearch, Briefcase,
  Zap, Smile, Timer,

} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import portrait from "@/assets/zulqarnain.jpeg.asset.json";


export const Route = createFileRoute("/")({
  component: Portfolio,
});

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
  { text: "Zulqarnain delivered accurate research and organized data exactly as requested.", author: "Client, Upwork", initials: "JD" },
  { text: "Very reliable, responsive, and detail-oriented virtual assistant.", author: "Client, Upwork", initials: "SM" },
  { text: "Great support with lead generation and spreadsheet management.", author: "Client, Upwork", initials: "AR" },
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

// --- Hooks ---

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

function Counter({ to, suffix = "", duration = 1600 }: { to: number; suffix?: string; duration?: number }) {
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

// --- Sections ---

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
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/85 backdrop-blur-md border-b border-border shadow-soft" : "bg-background/40 backdrop-blur-sm border-b border-transparent"}`}>
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-display font-bold text-navy">
          <span className="w-8 h-8 rounded-md bg-brand-gradient flex items-center justify-center text-white text-sm">ZH</span>
          <span>Zulqarnain</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(l => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted-foreground hover:text-navy transition-colors">{l.label}</a>
          ))}
        </nav>
        <a href="#contact" className="hidden md:inline-flex">
          <Button className="bg-navy text-navy-foreground hover:bg-navy/90 transition-transform hover:-translate-y-0.5">Hire Me</Button>
        </a>
        <button className="md:hidden text-navy" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-6 py-4 flex flex-col gap-3">
            {navLinks.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm font-medium text-muted-foreground py-1">{l.label}</a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)}>
              <Button className="w-full bg-navy text-navy-foreground">Hire Me</Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  const badges = [
    { icon: Briefcase, label: "200+ Projects Completed" },
    { icon: Users, label: "Lead Generation Specialist" },
    { icon: Home, label: "Real Estate VA Support" },
    { icon: Database, label: "Data Entry Expert" },
  ];
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-hero text-white overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]" />
      <div className="absolute -top-24 -right-24 w-[520px] h-[520px] rounded-full bg-brand/30 blur-[140px]" />
      <div className="absolute -bottom-32 -left-24 w-[420px] h-[420px] rounded-full bg-brand/20 blur-[140px]" />
      <div className="relative mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-medium mb-6">
            <Sparkles size={14} className="text-brand" /> Available for new projects
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] animate-fade-up" style={{ animationDelay: "80ms" }}>
            Reliable Virtual Assistant for Accurate Research, Organized Data, and Admin Support
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-xl leading-relaxed animate-fade-up" style={{ animationDelay: "220ms" }}>
            I help businesses save time by handling lead generation, data entry, web research, CRM updates, spreadsheet management, and day-to-day administrative tasks with accuracy and professionalism.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: "340ms" }}>
            <a href="#contact"><Button size="lg" className="bg-brand hover:bg-brand/90 text-brand-foreground transition-all hover:-translate-y-0.5 hover:shadow-elevated">Hire Me <ArrowRight size={16} /></Button></a>
            <a href="#portfolio"><Button size="lg" variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10 transition-all hover:-translate-y-0.5">View My Work</Button></a>
          </div>
          <div className="mt-10 flex flex-wrap gap-2.5 animate-fade-up" style={{ animationDelay: "460ms" }}>
            {badges.map(b => (
              <span key={b.label} className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-white/85 hover:bg-white/10 hover:-translate-y-0.5 transition-all shadow-soft">
                <b.icon size={13} className="text-brand" /> {b.label}
              </span>
            ))}
          </div>
        </div>
        <div className="relative animate-fade-up md:justify-self-end" style={{ animationDelay: "200ms" }}>
          <div className="absolute -inset-6 bg-brand-gradient opacity-25 blur-3xl rounded-full" />
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden ring-4 ring-brand/40 ring-offset-4 ring-offset-transparent shadow-elevated">
            <img src={portrait.url} alt="Zulqarnain Haider — Virtual Assistant" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-3 -left-3 md:-left-6 bg-white text-navy rounded-xl px-4 py-3 shadow-elevated">
            <div className="text-2xl font-bold"><Counter to={200} suffix="+" /></div>
            <div className="text-xs text-muted-foreground">Projects delivered</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsBar() {
  const stats = [
    { icon: Briefcase, value: 200, suffix: "+", label: "Projects Completed" },
    { icon: Clock, value: 6, suffix: "+", label: "Years of Experience" },
    { icon: Smile, value: 98, suffix: "%", label: "Client Satisfaction" },
    { icon: Timer, value: 24, suffix: "h", label: "Response Time" },
  ];
  return (
    <section className="py-10 bg-secondary/60 border-y border-border">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="flex items-center gap-4 justify-center md:justify-start">
            <div className="w-11 h-11 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
              <s.icon size={20} />
            </div>
            <div className="min-w-0">
              <div className="text-2xl md:text-3xl font-display font-bold text-brand leading-none">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">{s.label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <div className="text-xs font-semibold uppercase tracking-wider text-brand mb-3">About Me</div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy">A dedicated VA focused on accuracy and reliability</h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed text-lg">
            <p>
              Hi, I'm <span className="text-navy font-semibold">Zulqarnain Haider</span>, a professional Virtual Assistant with experience in lead generation, data entry, web research, CRM management, and administrative support. I help business owners, real estate professionals, recruiters, and agencies stay organized by managing research, data, spreadsheets, and daily operational tasks.
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
    <section id="services" className="py-24 bg-gradient-to-b from-secondary/40 to-background">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-brand mb-3">Services</div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy">Everything you need to stay organized</h2>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <div className="group h-full p-7 rounded-2xl bg-card border border-border shadow-soft hover:shadow-elevated hover:-translate-y-1.5 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-brand/10 text-brand flex items-center justify-center mb-5 group-hover:bg-brand group-hover:text-brand-foreground group-hover:scale-105 transition-all">
                  <s.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
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
        <Reveal>
          <div className="text-xs font-semibold uppercase tracking-wider text-brand mb-3">Skills & Tools</div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy">Tools I work with every day</h2>
          <div className="mt-10 flex flex-wrap justify-center gap-2.5">
            {skills.map(s => (
              <span key={s} className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-navy hover:border-brand hover:text-brand hover:-translate-y-0.5 transition-all shadow-soft">{s}</span>
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
        <Reveal className="max-w-2xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-brand mb-3">Why Work With Me</div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy">Built for reliability and results</h2>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyPoints.map((w, i) => (
            <Reveal key={w.text} delay={i * 50}>
              <div className="flex items-start gap-4 p-6 rounded-xl bg-secondary/50 border border-border hover:shadow-soft hover:-translate-y-0.5 transition-all">
                <div className="w-10 h-10 rounded-lg bg-brand/10 text-brand flex items-center justify-center shrink-0">
                  <w.icon size={18} />
                </div>
                <p className="text-navy font-medium pt-1.5">{w.text}</p>
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
    <section className="py-24 bg-navy text-navy-foreground relative overflow-hidden">
      <div className="absolute -top-24 right-1/4 w-[420px] h-[420px] rounded-full bg-brand/20 blur-[140px]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-brand mb-3">How I Work</div>
          <h2 className="text-3xl md:text-4xl font-extrabold">A clear, four-step process</h2>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((p, i) => (
            <Reveal key={p.n} delay={i * 80}>
              <div className="h-full p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur hover:bg-white/10 hover:-translate-y-1 transition-all">
                <div className="text-4xl font-display font-bold bg-brand-gradient bg-clip-text text-transparent mb-3">{p.n}</div>
                <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
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
        <Reveal className="max-w-2xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-brand mb-3">Experience</div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy">Professional background</h2>
        </Reveal>
        <div className="relative border-l-2 border-border pl-8 space-y-10">
          {experience.map(e => (
            <Reveal key={e.role + e.company}>
              <div className="relative">
                <div className="absolute -left-[41px] w-4 h-4 rounded-full bg-brand ring-4 ring-background" />
                <div className="text-xs font-medium text-brand mb-1">{e.period}</div>
                <h3 className="text-xl font-semibold text-navy">{e.role} <span className="text-muted-foreground font-normal">— {e.company}</span></h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{e.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl mb-14 mx-auto text-center">
          <div className="text-xs font-semibold uppercase tracking-wider text-brand mb-3">Testimonials</div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy">What clients say</h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="h-full p-7 rounded-2xl bg-card border border-border shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-all">
                <div className="flex items-center gap-1 mb-4 text-brand">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} size={16} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <Quote size={22} className="text-brand/40 mb-3" />
                <p className="text-navy leading-relaxed mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-10 h-10 rounded-full bg-brand-gradient text-white flex items-center justify-center font-semibold text-sm">
                    {t.initials}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">{t.author}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-hero p-10 md:p-16 text-center text-white">
          <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]" />
          <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-brand/30 blur-[120px]" />
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-extrabold">Need Reliable Virtual Assistant Support?</h2>
            <p className="mt-4 text-white/70 max-w-2xl mx-auto text-lg">
              Let's work together to save your time, organize your data, and manage your daily business tasks more efficiently.
            </p>
            <a href="#contact" className="inline-block mt-8">
              <Button size="lg" className="bg-brand hover:bg-brand/90 text-brand-foreground transition-all hover:-translate-y-0.5 hover:shadow-elevated">Contact Me <ArrowRight size={16} /></Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal className="text-center mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-brand mb-3">FAQ</div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy">Frequently asked questions</h2>
        </Reveal>
        <Reveal>
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border border-border rounded-xl bg-card shadow-soft px-5 data-[state=open]:shadow-elevated transition-shadow">
                <AccordionTrigger className="text-left text-navy font-semibold hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
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
  return (
    <section id="contact" className="py-24 bg-secondary/50">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <div className="text-xs font-semibold uppercase tracking-wider text-brand mb-3">Contact</div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy">Let's get in touch</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Have a project or need ongoing VA support? Reach out directly and I'll reply within 24 hours.
          </p>
        </Reveal>
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {[
            { href: "mailto:yourvazulqarnain@gmail.com", icon: Mail, label: "Email", value: "yourvazulqarnain@gmail.com", ext: false },
            { href: "https://wa.me/923458007325", icon: MessageCircle, label: "WhatsApp", value: "+92 345 8007325", ext: true },
            { href: "https://www.linkedin.com/in/zulqarnain-haider-42763b418/", icon: Linkedin, label: "LinkedIn", value: "Zulqarnain Haider", ext: true },
          ].map((c, i) => (
            <Reveal key={c.label} delay={i * 80}>
              <a
                href={c.href}
                {...(c.ext ? { target: "_blank", rel: "noreferrer" } : {})}
                className="h-full flex flex-col items-center gap-4 p-7 rounded-2xl bg-card border border-border shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
                  <c.icon size={22} />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">{c.label}</div>
                  <div className="font-medium text-navy break-all">{c.value}</div>
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
    <footer className="border-t border-white/10 bg-[oklch(0.14_0.04_255)] text-navy-foreground">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-sm text-white/60">© 2026 Zulqarnain Haider. All Rights Reserved.</div>
        <div className="flex items-center gap-6 text-sm">
          <a href="#home" className="text-white/70 hover:text-white transition-colors">Home</a>
          <a href="#services" className="text-white/70 hover:text-white transition-colors">Services</a>
          <a href="#portfolio" className="text-white/70 hover:text-white transition-colors">Portfolio</a>
          <a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          {socials.map(s => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:bg-brand hover:text-white hover:border-brand transition-all"
            >
              <s.icon size={15} />
            </a>
          ))}
        </div>
      </div>
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
      className={`fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-brand text-brand-foreground font-semibold text-sm shadow-elevated animate-soft-pulse transition-all duration-300 hover:-translate-y-0.5 ${show ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"}`}
    >
      <Zap size={16} /> Hire Me
    </a>
  );
}

function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <StatsBar />
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
    </div>
  );
}

function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="max-w-2xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-brand mb-3">Work Samples</div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy">Selected work</h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6">
          {portfolio.map((p, i) => (
            <Reveal key={p.title} delay={i * 70}>
              <div className="group relative h-full p-8 rounded-2xl bg-card border border-border shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-all overflow-hidden">
                <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-brand/5 group-hover:bg-brand/10 transition-colors" />
                <div className="relative flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-brand/10 text-brand flex items-center justify-center shrink-0 group-hover:bg-brand group-hover:text-brand-foreground group-hover:scale-105 transition-all">
                    <p.icon size={26} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-mono text-brand mb-1">0{i+1}</div>
                    <h3 className="text-xl font-semibold text-navy mb-3">{p.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground text-center italic">
          Client data is always kept private and confidential. Sample work can be shared upon request with sensitive information removed.
        </p>
      </div>
    </section>
  );
}
