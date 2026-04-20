import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, MapPin, Share2, Wrench, Check } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

type Tier = { name: string; price: string; desc?: string; features: string[]; featured?: boolean };
type Group = { icon: typeof Globe; title: string; intro: string; tiers: Tier[] };

const groups: Group[] = [
  {
    icon: Globe,
    title: "Website Packages",
    intro: "Clean, mobile-friendly websites built to help local customers find and contact you.",
    tiers: [
      {
        name: "Starter Website",
        price: "$200",
        desc: "Perfect for getting online fast.",
        features: ["1-page custom design", "Mobile-friendly layout", "Contact info & click-to-call"],
      },
      {
        name: "Standard Website",
        price: "$350",
        desc: "Most popular for small businesses.",
        featured: true,
        features: ["Up to 3 pages", "Contact form & Google map", "Basic SEO setup"],
      },
      {
        name: "Premium Website",
        price: "$500–$650",
        desc: "More pages and polish for growing businesses.",
        features: ["4–6 pages", "Photo gallery or services pages", "Advanced SEO & speed tuning"],
      },
    ],
  },
  {
    icon: MapPin,
    title: "Google Business Profile Services",
    intro: "Show up on Google Search and Maps when locals look for your business.",
    tiers: [
      {
        name: "GBP Setup",
        price: "$75",
        features: ["Profile creation & verification", "Categories, hours & contact info", "Starter photos uploaded"],
      },
      {
        name: "GBP Optimization",
        price: "$100–$150",
        features: ["Full profile rewrite for visibility", "Services, products & Q&A added", "Review & post strategy tips"],
      },
    ],
  },
  {
    icon: Share2,
    title: "Social Media Setup",
    intro: "Get professional profiles on the platforms your customers actually use.",
    tiers: [
      {
        name: "Basic Setup",
        price: "$75",
        features: ["1 platform (Facebook or Instagram)", "Branded profile & bio", "Contact info & links added"],
      },
      {
        name: "Full Setup",
        price: "$150",
        features: ["Facebook + Instagram", "Branded profiles & cover images", "Starter posts & posting tips"],
      },
    ],
  },
  {
    icon: Wrench,
    title: "Monthly Maintenance Plans",
    intro: "Keep things running smoothly without lifting a finger.",
    tiers: [
      {
        name: "Basic",
        price: "$50",
        desc: "per month",
        features: ["Small website updates", "Monthly check-in", "Email support"],
      },
      {
        name: "Standard",
        price: "$75",
        desc: "per month",
        featured: true,
        features: ["Everything in Basic", "GBP post or update monthly", "Priority email support"],
      },
      {
        name: "Premium",
        price: "$100",
        desc: "per month",
        features: ["Everything in Standard", "Social media post help", "Phone support when you need it"],
      },
    ],
  },
];

const Pricing = () => (
  <>
    <section className="bg-gradient-subtle py-16 md:py-20">
      <div className="container max-w-3xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">Pricing</p>
        <h1 className="text-4xl font-bold text-primary sm:text-5xl">Simple, Honest Pricing</h1>
        <p className="mt-4 text-muted-foreground">
          No hidden fees, no jargon. Pick what fits your business — or contact me and I'll help you choose.
        </p>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="container space-y-16">
        {groups.map(({ icon: Icon, title, intro, tiers }) => (
          <div key={title}>
            <div className="mb-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/5 text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-primary sm:text-3xl">{title}</h2>
                <p className="mt-1 text-muted-foreground">{intro}</p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {tiers.map((t) => (
                <Card
                  key={t.name}
                  className={`relative flex flex-col p-6 shadow-soft sm:p-7 ${
                    t.featured ? "border-accent ring-2 ring-accent/30" : "border-border"
                  }`}
                >
                  {t.featured && (
                    <span className="absolute -top-3 left-6 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-lg font-semibold text-primary">{t.name}</h3>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-primary">{t.price}</span>
                    {t.desc && <span className="text-sm text-muted-foreground">{t.desc.startsWith("per") ? `/ ${t.desc.replace("per ", "")}` : ""}</span>}
                  </div>
                  {t.desc && !t.desc.startsWith("per") && (
                    <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
                  )}
                  <ul className="mt-5 flex-1 space-y-2">
                    {t.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="bg-secondary py-16 md:py-20">
      <div className="container flex flex-col items-center gap-6 text-center">
        <SectionHeader
          eyebrow="Not Sure Which to Pick?"
          title="Let's talk it through"
          sub="Reach out and I'll help you figure out what fits your business and budget — no pressure."
        />
        <Button asChild size="lg">
          <Link to="/contact">Contact Me</Link>
        </Button>
      </div>
    </section>
  </>
);

export default Pricing;
