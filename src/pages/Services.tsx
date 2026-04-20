import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Share2, MapPin, Globe, Check } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const services = [
  {
    icon: Share2,
    title: "Social Media Setup",
    desc: "Get professional profiles on the platforms your customers actually use — set up the right way from day one.",
    benefits: [
      "Branded profile design across Facebook & Instagram",
      "Bio, links, and contact info optimized for local search",
      "Starter posting tips so you can keep momentum going",
    ],
  },
  {
    icon: MapPin,
    title: "Google Business Profile Setup",
    desc: "Show up on Google Search and Maps when locals look for businesses like yours. This is the #1 thing most small businesses are missing.",
    benefits: [
      "Complete profile setup and verification",
      "Categories, services, and hours optimized for visibility",
      "Photos, descriptions, and Q&A done for you",
    ],
  },
  {
    icon: Globe,
    title: "Website Creation",
    desc: "A clean, mobile-friendly website that turns visitors into customers — built quickly and affordably.",
    benefits: [
      "1–3 page custom design that loads fast on phones",
      "Contact forms, maps, and click-to-call built in",
      "Easy to update as your business grows",
    ],
  },
];

const Services = () => (
  <>
    <section className="bg-gradient-subtle py-16 md:py-20">
      <div className="container max-w-3xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">Services</p>
        <h1 className="text-4xl font-bold text-primary sm:text-5xl">Everything You Need to Get Found Online</h1>
        <p className="mt-4 text-muted-foreground">
          Practical digital marketing services built for small local businesses in Southwest Virginia.
        </p>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="container space-y-8">
        {services.map(({ icon: Icon, title, desc, benefits }) => (
          <Card key={title} className="border-border p-6 shadow-soft sm:p-8">
            <div className="grid gap-6 md:grid-cols-[auto_1fr] md:gap-8">
              <div className="grid h-14 w-14 place-items-center rounded-xl bg-primary/5 text-primary">
                <Icon className="h-7 w-7" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-primary">{title}</h2>
                <p className="mt-2 text-muted-foreground">{desc}</p>
                <ul className="mt-5 space-y-2">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>

    <section className="bg-secondary py-16 md:py-20">
      <div className="container flex flex-col items-center gap-6 text-center">
        <SectionHeader eyebrow="Get Started" title="Not sure where to begin?" sub="Reach out and we can talk through what would help your business most." />
        <Button asChild size="lg">
          <Link to="/contact">Contact Me</Link>
        </Button>
      </div>
    </section>
  </>
);

export default Services;
