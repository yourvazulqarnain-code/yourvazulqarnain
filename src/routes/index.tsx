import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Users, Database, Search, LineChart, Home, Mail, Phone, Linkedin,
  CheckCircle2, ArrowRight, Sparkles, Clock, ShieldCheck, FileSpreadsheet,
  Menu, X, Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
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
  { title: "B2B Lead Generation List", desc: "Built targeted lead lists with company name, website, contact person, email, LinkedIn profile, industry, and location." },
  { title: "Real Estate Data Research", desc: "Collected and organized property, agent, broker, and market data for real estate clients." },
  { title: "CRM Data Cleanup", desc: "Updated missing fields, removed duplicates, organized contacts, and improved CRM data quality." },
  { title: "Web Research Report", desc: "Collected business, event, contact, and market information from online sources and organized into clear spreadsheets." },
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
  { text: "Zulqarnain delivered accurate research and organized data exactly as requested.", author: "Client, Upwork" },
  { text: "Very reliable, responsive, and detail-oriented virtual assistant.", author: "Client, Upwork" },
  { text: "Great support with lead generation and spreadsheet management.", author: "Client, Upwork" },
];

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
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
          <Button className="bg-navy text-navy-foreground hover:bg-navy/90">Hire Me</Button>
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
  const badges = ["200+ Projects Completed","Lead Generation Specialist","Real Estate VA Support","Data Entry Expert"];
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-hero text-white overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]" />
      <div className="relative mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-medium mb-6">
            <Sparkles size={14} className="text-brand" /> Available for new projects
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1]">
            Reliable Virtual Assistant for Accurate Research, Organized Data, and Admin Support
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-xl leading-relaxed">
            I help businesses save time by handling lead generation, data entry, web research, CRM updates, spreadsheet management, and day-to-day administrative tasks with accuracy and professionalism.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact"><Button size="lg" className="bg-brand hover:bg-brand/90 text-brand-foreground">Hire Me <ArrowRight size={16} /></Button></a>
            <a href="#portfolio"><Button size="lg" variant="outline" className="border-white/20 bg-white/5 text-white hover:bg-white/10">View My Work</Button></a>
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {badges.map(b => (
              <span key={b} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/80">{b}</span>
            ))}
          </div>
        </div>
        <div className="relative animate-fade-up md:justify-self-end">
          <div className="absolute -inset-4 bg-brand-gradient opacity-20 blur-3xl rounded-full" />
          <div className="relative w-64 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden border border-white/10 shadow-elevated">
            <img src={portrait.url} alt="Zulqarnain Haider — Virtual Assistant" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-5 -left-5 bg-white text-navy rounded-xl px-4 py-3 shadow-elevated hidden md:block">
            <div className="text-2xl font-bold">200+</div>
            <div className="text-xs text-muted-foreground">Projects delivered</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="text-xs font-semibold uppercase tracking-wider text-brand mb-3">About Me</div>
        <h2 className="text-3xl md:text-4xl font-bold text-navy">A dedicated VA focused on accuracy and reliability</h2>
        <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed text-lg">
          <p>
            Hi, I'm <span className="text-navy font-semibold">Zulqarnain Haider</span>, a professional Virtual Assistant with experience in lead generation, data entry, web research, CRM management, and administrative support. I help business owners, real estate professionals, recruiters, and agencies stay organized by managing research, data, spreadsheets, and daily operational tasks.
          </p>
          <p>My focus is simple: accurate work, clear communication, fast turnaround, and reliable support.</p>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-24 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-brand mb-3">Services</div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy">Everything you need to stay organized</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(s => (
            <div key={s.title} className="group p-7 rounded-2xl bg-card border border-border shadow-soft hover:shadow-elevated hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-5 group-hover:bg-brand group-hover:text-brand-foreground transition-colors">
                <s.icon size={22} />
              </div>
              <h3 className="text-lg font-semibold text-navy mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
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
        <div className="text-xs font-semibold uppercase tracking-wider text-brand mb-3">Skills & Tools</div>
        <h2 className="text-3xl md:text-4xl font-bold text-navy">Tools I work with every day</h2>
        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {skills.map(s => (
            <span key={s} className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-navy hover:border-brand hover:text-brand transition-colors">{s}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-brand mb-3">Work Samples</div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy">Selected work</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {portfolio.map((p, i) => (
            <div key={p.title} className="p-8 rounded-2xl bg-card border border-border shadow-soft hover:shadow-elevated transition-all">
              <div className="text-sm font-mono text-brand mb-2">0{i+1}</div>
              <h3 className="text-xl font-semibold text-navy mb-3">{p.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground text-center italic">
          Client data is always kept private and confidential. Sample work can be shared upon request with sensitive information removed.
        </p>
      </div>
    </section>
  );
}

function WhyMe() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-brand mb-3">Why Work With Me</div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy">Built for reliability and results</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyPoints.map(w => (
            <div key={w.text} className="flex items-start gap-4 p-6 rounded-xl bg-secondary/50 border border-border">
              <div className="w-10 h-10 rounded-lg bg-brand/10 text-brand flex items-center justify-center shrink-0">
                <w.icon size={18} />
              </div>
              <p className="text-navy font-medium pt-1.5">{w.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="py-24 bg-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-brand mb-3">How I Work</div>
          <h2 className="text-3xl md:text-4xl font-bold">A clear, four-step process</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map(p => (
            <div key={p.n} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur">
              <div className="text-4xl font-display font-bold bg-brand-gradient bg-clip-text text-transparent mb-3">{p.n}</div>
              <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-white/70 leading-relaxed">{p.desc}</p>
            </div>
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
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-brand mb-3">Experience</div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy">Professional background</h2>
        </div>
        <div className="relative border-l-2 border-border pl-8 space-y-10">
          {experience.map(e => (
            <div key={e.role + e.company} className="relative">
              <div className="absolute -left-[41px] w-4 h-4 rounded-full bg-brand ring-4 ring-background" />
              <div className="text-xs font-medium text-brand mb-1">{e.period}</div>
              <h3 className="text-xl font-semibold text-navy">{e.role} <span className="text-muted-foreground font-normal">— {e.company}</span></h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{e.desc}</p>
            </div>
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
        <div className="max-w-2xl mb-14 mx-auto text-center">
          <div className="text-xs font-semibold uppercase tracking-wider text-brand mb-3">Testimonials</div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy">What clients say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="p-7 rounded-2xl bg-card border border-border shadow-soft">
              <Quote size={24} className="text-brand mb-4" />
              <p className="text-navy leading-relaxed mb-5">"{t.text}"</p>
              <div className="text-sm text-muted-foreground font-medium">— {t.author}</div>
            </div>
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
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold">Need Reliable Virtual Assistant Support?</h2>
            <p className="mt-4 text-white/70 max-w-2xl mx-auto text-lg">
              Let's work together to save your time, organize your data, and manage your daily business tasks more efficiently.
            </p>
            <a href="#contact" className="inline-block mt-8">
              <Button size="lg" className="bg-brand hover:bg-brand/90 text-brand-foreground">Contact Me <ArrowRight size={16} /></Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [loading, setLoading] = useState(false);
  const services = ["Lead Generation","Data Entry","Web Research","CRM Management","Real Estate VA","Administrative Support","Other"];
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Message sent! I'll get back to you within 24 hours.");
      (e.target as HTMLFormElement).reset();
    }, 700);
  };
  return (
    <section id="contact" className="py-24 bg-secondary/50">
      <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-5 gap-10">
        <div className="lg:col-span-2">
          <div className="text-xs font-semibold uppercase tracking-wider text-brand mb-3">Contact</div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy">Let's get in touch</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Have a project or need ongoing VA support? Send a quick message and I'll reply within 24 hours.
          </p>
          <div className="mt-8 space-y-4">
            <a href="mailto:yourvazulqarnain@gmail.com" className="flex items-center gap-3 text-navy hover:text-brand transition-colors">
              <div className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center"><Mail size={16} /></div>
              <span className="font-medium break-all">yourvazulqarnain@gmail.com</span>
            </a>
            <a href="tel:+923458007325" className="flex items-center gap-3 text-navy hover:text-brand transition-colors">
              <div className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center"><Phone size={16} /></div>
              <span className="font-medium">+92 345 8007325</span>
            </a>
            <a href="https://linkedin.com/in/zulqarnain-haider-31147a3a5/" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-navy hover:text-brand transition-colors">
              <div className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center"><Linkedin size={16} /></div>
              <span className="font-medium">linkedin.com/in/zulqarnain-haider</span>
            </a>
          </div>
        </div>
        <form onSubmit={onSubmit} className="lg:col-span-3 p-8 rounded-2xl bg-card border border-border shadow-soft space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-navy mb-1.5 block">Name</label>
              <Input required name="name" placeholder="Your full name" />
            </div>
            <div>
              <label className="text-sm font-medium text-navy mb-1.5 block">Email</label>
              <Input required type="email" name="email" placeholder="you@company.com" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-navy mb-1.5 block">Company</label>
              <Input name="company" placeholder="Company name" />
            </div>
            <div>
              <label className="text-sm font-medium text-navy mb-1.5 block">Service Needed</label>
              <select name="service" className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm">
                {services.map(s => <option key={s}>{s}</option>)}
              </select>
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-navy mb-1.5 block">Message</label>
            <Textarea required name="message" rows={5} placeholder="Tell me about your project..." />
          </div>
          <Button type="submit" disabled={loading} size="lg" className="w-full bg-navy text-navy-foreground hover:bg-navy/90">
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10 bg-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-white/60">© 2026 Zulqarnain Haider. All Rights Reserved.</div>
        <div className="flex gap-6 text-sm">
          <a href="#home" className="text-white/70 hover:text-white">Home</a>
          <a href="#services" className="text-white/70 hover:text-white">Services</a>
          <a href="#portfolio" className="text-white/70 hover:text-white">Portfolio</a>
          <a href="#contact" className="text-white/70 hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}

function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <Toaster />
      <Nav />
      <Hero />
      <About />
      <Services />
      <Skills />
      <PortfolioSection />
      <WhyMe />
      <Process />
      <Experience />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}

// Rename the portfolio section component to avoid collision with page component
function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-brand mb-3">Work Samples</div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy">Selected work</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {portfolio.map((p, i) => (
            <div key={p.title} className="p-8 rounded-2xl bg-card border border-border shadow-soft hover:shadow-elevated transition-all">
              <div className="text-sm font-mono text-brand mb-2">0{i+1}</div>
              <h3 className="text-xl font-semibold text-navy mb-3">{p.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted-foreground text-center italic">
          Client data is always kept private and confidential. Sample work can be shared upon request with sensitive information removed.
        </p>
      </div>
    </section>
  );
}
