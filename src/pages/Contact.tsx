import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const EMAIL = "dansdigitalsolutions18@gmail.com";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", business: "", message: "" });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: "Please fill in name, email, and message.", variant: "destructive" });
      return;
    }
    const subject = encodeURIComponent(`New inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nBusiness: ${form.business || "—"}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    toast({ title: "Opening your email app…", description: "Your message has been prepared in your default email client." });
  };

  const update = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <>
      <section className="bg-gradient-subtle py-16 md:py-20">
        <div className="container max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">Contact</p>
          <h1 className="text-4xl font-bold text-primary sm:text-5xl">Let's Grow Your Business</h1>
          <p className="mt-4 text-muted-foreground">
            Reach out below or send me an email directly — I usually reply within one business day.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-3 text-primary transition-colors hover:text-accent"
            >
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-secondary shadow-soft">
                <Mail className="h-5 w-5" />
              </span>
              <span className="break-all text-base font-medium">{EMAIL}</span>
            </a>

            <div className="rounded-2xl border-2 border-accent bg-background p-6 shadow-card">
              <div className="flex items-start gap-3">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground">
                  <Phone className="h-5 w-5" />
                </div>
                <p className="text-base font-semibold leading-relaxed text-primary">
                  If you email me, we can set up a{" "}
                  <span className="bg-gradient-hero bg-clip-text text-transparent">
                    free over-the-phone consultation
                  </span>{" "}
                  to talk about your business needs.
                </p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground">
              Prefer to write your own email? Just send a note to{" "}
              <a href={`mailto:${EMAIL}`} className="font-medium text-primary underline-offset-4 hover:underline">
                {EMAIL}
              </a>{" "}
              and I'll get back to you soon.
            </p>
          </div>

          <Card className="border-border p-6 shadow-card sm:p-8">
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Input value={form.name} onChange={update("name")} placeholder="Your name" required />
                <Input value={form.email} onChange={update("email")} type="email" placeholder="Email address" required />
              </div>
              <Input value={form.business} onChange={update("business")} placeholder="Business name (optional)" />
              <Textarea value={form.message} onChange={update("message")} placeholder="Tell me about your project…" rows={5} required />
              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                This will open your email app with your message ready to send.
              </p>
            </form>
          </Card>
        </div>
      </section>
    </>
  );
};

export default Contact;
