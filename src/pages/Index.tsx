import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import {
  MapPin,
  Globe,
  Share2,
  Wrench,
  Check,
  Zap,
  DollarSign,
  HeartHandshake,
  Sparkles,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";

const services = [
  {
    icon: MapPin,
    title: "Google Business Profile",
    desc: "Setup & optimization so locals find you first on Google Search and Maps.",
  },
  {
    icon: Globe,
    title: "Website Design",
    desc: "Clean, mobile-friendly websites (1–3 pages) that convert visitors into customers.",
  },
  {
    icon: Share2,
    title: "Social Media Setup",
    desc: "Professional profiles on the platforms that matter most to your audience.",
  },
  {
    icon: Wrench,
    title: "Monthly Maintenance",
    desc: "Updates, backups, and small tweaks so your site stays fast and current.",
  },
];

const pricing = [
  { name: "Google Business Profile Setup", price: "$150", note: "one-time" },
  { name: "Website Design", price: "$300–$500", note: "1–3 pages" },
  { name: "Social Media Setup", price: "$100", note: "one-time" },
  { name: "Monthly Maintenance", price: "$50", note: "/month" },
];

const reasons = [
  { icon: Zap, text: "Fast turnaround" },
  { icon: DollarSign, text: "Affordable pricing" },
  { icon: HeartHandshake, text: "Local and reliable" },
  { icon: Check, text: "Simple, stress-free process" },
  { icon: Sparkles, text: "Clean, modern designs" },
];

const Nav = () => (
  <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
    <div className="container flex h-16 items-center justify-between">
      <a href="#top" className="flex items-center gap-2 font-display text-lg font-bold text-primary">
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground">
          D
        </span>
        Dans Digital Solutions
      </a>
      <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
        <a href="#services" className="transition-colors hover:text-primary">Services</a>
        <a href="#pricing" className="transition-colors hover:text-primary">Pricing</a>
        <a href="#portfolio" className="transition-colors hover:text-primary">Portfolio</a>
        <a href="#about" className="transition-colors hover:text-primary">About</a>
        <a href="#contact" className="transition-colors hover:text-primary">Contact</a>
      </nav>
      <Button asChild size="sm" className="hidden md:inline-flex">
        <a href="#contact">Get Started</a>
      </Button>
    </div>
  </header>
);

const Hero = () => (
  <section id="top" className="relative overflow-hidden bg-gradient-subtle">
    <div className="container grid items-center gap-12 py-20 md:py-28 lg:grid-cols-2 lg:py-32">
      <div className="space-y-6">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-xs font-medium text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-accent" />
          Digital marketing for small businesses
        </span>
        <h1 className="text-4xl font-bold leading-[1.1] text-primary sm:text-5xl lg:text-6xl">
          Helping Local Businesses{" "}
          <span className="bg-gradient-hero bg-clip-text text-transparent">Grow Online</span>
        </h1>
        <p className="max-w-xl text-lg text-muted-foreground">
          Affordable websites, Google Business Profiles, and digital marketing services
          for small businesses.
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <Button asChild size="lg" className="shadow-glow">
            <a href="#contact">
              Get Started <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#services">View Services</a>
          </Button>
        </div>
      </div>
      <div className="relative">
        <div className="absolute -inset-4 rounded-3xl bg-gradient-hero opacity-10 blur-2xl" />
        <img
          src={heroImg}
          alt="Local business growing online with digital marketing"
          width={1280}
          height={960}
          className="relative rounded-2xl shadow-card"
        />
      </div>
    </div>
  </section>
);

const SectionHeader = ({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) => (
  <div className="mx-auto mb-14 max-w-2xl text-center">
    <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">{eyebrow}</p>
    <h2 className="text-3xl font-bold text-primary sm:text-4xl">{title}</h2>
    {sub && <p className="mt-4 text-muted-foreground">{sub}</p>}
  </div>
);

const Services = () => (
  <section id="services" className="py-20 md:py-28">
    <div className="container">
      <SectionHeader
        eyebrow="What I Do"
        title="Services Built for Small Businesses"
        sub="Everything you need to show up online — without the agency price tag."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map(({ icon: Icon, title, desc }) => (
          <Card
            key={title}
            className="group border-border p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card"
          >
            <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-primary/5 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-primary">{title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const Pricing = () => (
  <section id="pricing" className="bg-secondary py-20 md:py-28">
    <div className="container">
      <SectionHeader
        eyebrow="Pricing"
        title="Simple, Honest Prices"
        sub="No hidden fees. Pay for exactly what you need."
      />
      <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-border bg-background shadow-card">
        {pricing.map((p, i) => (
          <div
            key={p.name}
            className={`flex items-center justify-between gap-4 px-6 py-5 sm:px-8 ${
              i !== pricing.length - 1 ? "border-b border-border" : ""
            }`}
          >
            <span className="font-medium text-primary">{p.name}</span>
            <div className="text-right">
              <span className="text-xl font-bold text-primary">{p.price}</span>
              <span className="ml-1 text-sm text-muted-foreground">{p.note}</span>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-6 text-center text-sm text-muted-foreground">
        Starting prices. Custom packages available on request.
      </p>
    </div>
  </section>
);

const Portfolio = () => (
  <section id="portfolio" className="py-20 md:py-28">
    <div className="container">
      <SectionHeader eyebrow="Recent Work" title="A Few Examples" />
      <div className="grid gap-8 md:grid-cols-2">
        {[
          { img: portfolio1, tag: "Website Design", title: "Local Bakery Website", desc: "A clean 3-page website built to drive online orders and showcase the menu." },
          { img: portfolio2, tag: "Google Business Profile", title: "Neighborhood Café Profile", desc: "Optimized GBP that doubled monthly direction requests in 60 days." },
        ].map((p) => (
          <Card key={p.title} className="overflow-hidden border-border shadow-soft transition-all hover:shadow-card">
            <div className="aspect-[4/3] overflow-hidden bg-secondary">
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                width={1024}
                height={768}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-accent">{p.tag}</span>
              <h3 className="mt-2 text-xl font-semibold text-primary">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const WhyMe = () => (
  <section className="bg-gradient-hero py-20 text-primary-foreground md:py-28">
    <div className="container">
      <div className="mx-auto mb-14 max-w-2xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary-foreground/70">
          Why Choose Me
        </p>
        <h2 className="text-3xl font-bold sm:text-4xl">A Better Way to Get Online</h2>
      </div>
      <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map(({ icon: Icon, text }) => (
          <div
            key={text}
            className="flex items-center gap-3 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 px-5 py-4 backdrop-blur-sm"
          >
            <Icon className="h-5 w-5 shrink-0 text-primary-foreground" />
            <span className="font-medium">{text}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-20 md:py-28">
    <div className="container max-w-3xl text-center">
      <SectionHeader eyebrow="About" title="Hi, I’m Dan" />
      <p className="text-lg leading-relaxed text-muted-foreground">
        Dans Digital Solutions helps small businesses build a strong online presence
        with affordable websites, optimized Google Business Profiles, and simple digital
        marketing tools. The goal is straightforward: give local businesses a clean,
        professional online home that brings in more customers — without the complexity
        or high cost of a big agency.
      </p>
    </div>
  </section>
);

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      business: String(data.get("business") || ""),
      message: String(data.get("message") || ""),
    };

    setLoading(true);
    try {
      const { supabase } = await import("@/integrations/supabase/client");
      const { error } = await supabase.functions.invoke("send-contact-message", { body: payload });
      if (error) throw error;
      toast({ title: "Message sent!", description: "Thanks — I’ll be in touch within 24 hours." });
      form.reset();
    } catch (err) {
      toast({
        title: "Couldn’t send message",
        description: "Please email dansdigitalsolutions18@gmail.com directly.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-secondary py-20 md:py-28">
      <div className="container grid gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">Contact</p>
          <h2 className="text-3xl font-bold text-primary sm:text-4xl">Let’s Grow Your Business</h2>
          <p className="mt-4 text-muted-foreground">
            Tell me a little about your business and I’ll send back a custom quote — usually
            within one business day.
          </p>
          <div className="mt-8 space-y-4">
            <a href="mailto:dansdigitalsolutions18@gmail.com" className="flex items-center gap-3 text-primary transition-colors hover:text-accent">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-background shadow-soft">
                <Mail className="h-5 w-5" />
              </span>
              <span className="font-medium">dansdigitalsolutions18@gmail.com</span>
            </a>
          </div>
        </div>

        <Card className="border-border p-6 shadow-card sm:p-8">
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Input name="name" placeholder="Your name" required />
              <Input name="email" type="email" placeholder="Email address" required />
            </div>
            <Input name="business" placeholder="Business name" />
            <Textarea name="message" placeholder="Tell me about your project…" rows={5} required />
            <Button type="submit" size="lg" className="w-full" disabled={loading}>
              {loading ? "Sending…" : "Request a Quote"}
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="border-t border-border bg-background py-8">
    <div className="container flex flex-col items-center justify-between gap-3 text-sm text-muted-foreground sm:flex-row">
      <p>© {new Date().getFullYear()} Dans Digital Solutions. All rights reserved.</p>
      <p>Built for local businesses, with care.</p>
    </div>
  </footer>
);

const Index = () => (
  <main>
    <Nav />
    <Hero />
    <Services />
    <Pricing />
    <Portfolio />
    <WhyMe />
    <About />
    <Contact />
    <Footer />
  </main>
);

export default Index;
