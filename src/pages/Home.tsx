import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, MessageSquare, Lightbulb, Rocket } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import SectionHeader from "@/components/SectionHeader";

const steps = [
  { icon: MessageSquare, title: "1. Free Consultation", desc: "We chat over the phone about your business and what you need to grow online." },
  { icon: Lightbulb, title: "2. Simple Plan", desc: "I put together a clear, affordable plan tailored to your goals — no jargon." },
  { icon: Rocket, title: "3. Launch & Grow", desc: "I build it out, get you live, and help you keep things running smoothly." },
];


const Home = () => (
  <>
    <section className="relative overflow-hidden bg-gradient-subtle">
      <div className="container grid items-center gap-12 py-16 md:py-24 lg:grid-cols-2 lg:py-28">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Serving small businesses in Southwest Virginia
          </span>
          <h1 className="text-4xl font-bold leading-[1.1] text-primary sm:text-5xl lg:text-6xl">
            Helping Local Businesses{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">Grow Online</span>
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground">
            Affordable, stress-free digital marketing for small local businesses — websites, Google
            Business Profiles, social media, and simple strategy that actually works.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Button asChild size="lg" className="shadow-glow">
              <Link to="/contact">
                Get Started <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-hero opacity-10 blur-2xl" />
          <img
            src={heroImg}
            alt="Local Southwest Virginia business growing online"
            width={1280}
            height={960}
            className="relative rounded-2xl shadow-card"
          />
        </div>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="container max-w-3xl text-center">
        <SectionHeader
          eyebrow="What I Do"
          title="Simple Digital Marketing for Small Businesses"
          sub="From your first Google listing to a full website, I help local businesses in Southwest Virginia get online and get found — without the stress, jargon, or big agency price tag."
        />
      </div>
    </section>

    <section className="bg-secondary py-16 md:py-24">
      <div className="container">
        <SectionHeader eyebrow="How It Works" title="Three Simple Steps" />
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map(({ icon: Icon, title, desc }) => (
            <Card key={title} className="border-border p-6 shadow-soft">
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-primary/5 text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-primary">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="container">
        <SectionHeader eyebrow="Testimonials" title="What Clients Are Saying" sub="Real feedback from local businesses — coming soon." />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Card key={i} className="border-border p-6 shadow-soft">
              <div className="mb-3 flex gap-1 text-accent">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mb-4 text-sm italic leading-relaxed text-muted-foreground">"{t.quote}"</p>
              <div>
                <p className="text-sm font-semibold text-primary">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-gradient-hero py-16 text-primary-foreground md:py-20">
      <div className="container flex flex-col items-center gap-6 text-center">
        <h2 className="max-w-2xl text-3xl font-bold sm:text-4xl">Ready to grow your local business online?</h2>
        <p className="max-w-xl text-primary-foreground/80">
          Let's talk about what you need. No pressure, no obligation — just a friendly conversation.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">Contact Me</Link>
          </Button>
          <Button asChild size="lg" className="bg-background text-primary hover:bg-background/90">
            <Link to="/services">View Services</Link>
          </Button>
        </div>
      </div>
    </section>
  </>
);

export default Home;
