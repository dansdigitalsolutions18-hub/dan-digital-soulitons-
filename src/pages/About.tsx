import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, MapPin, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => (
  <>
    <section className="bg-gradient-subtle py-16 md:py-20">
      <div className="container max-w-3xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">About</p>
        <h1 className="text-4xl font-bold text-primary sm:text-5xl">Hi, I'm Dan 👋</h1>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="container max-w-3xl space-y-6 text-lg leading-relaxed text-muted-foreground">
        <p>
          Dans Digital Solutions exists for one reason: to help small local businesses in
          Southwest Virginia build a strong online presence — without the stress, confusion, or
          high cost that usually comes with it.
        </p>
        <p>
          A lot of small business owners know they <em>should</em> have a website, a Google
          listing, and a social presence — but they don't have the time to figure it all out, and
          they don't want to be sold something they don't understand. That's where I come in.
        </p>
        <p>
          I keep things simple, friendly, and honest. We talk about what your business actually
          needs, I put together a plan that fits your budget, and I handle the technical side so
          you can stay focused on running your business.
        </p>
        <p>
          Whether you need your very first website, a properly set-up Google Business Profile, or
          just someone to point you in the right direction — I'm here to help.
        </p>
      </div>
    </section>

    <section className="bg-secondary py-16 md:py-20">
      <div className="container">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Heart, title: "Friendly & Supportive", desc: "No jargon, no pressure — just real conversations and honest advice." },
            { icon: MapPin, title: "Local to Southwest VA", desc: "I understand small-town businesses and the customers they serve." },
            { icon: Users, title: "Built for Small Business", desc: "Affordable, simple services designed for owners wearing every hat." },
          ].map(({ icon: Icon, title, desc }) => (
            <Card key={title} className="border-border bg-background p-6 shadow-soft">
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-primary/5 text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-primary">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </Card>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Button asChild size="lg">
            <Link to="/contact">Let's Talk</Link>
          </Button>
        </div>
      </div>
    </section>
  </>
);

export default About;
