interface Props {
  eyebrow?: string;
  title: string;
  sub?: string;
  align?: "center" | "left";
}

const SectionHeader = ({ eyebrow, title, sub, align = "center" }: Props) => (
  <div className={`mb-12 max-w-2xl ${align === "center" ? "mx-auto text-center" : "text-left"}`}>
    {eyebrow && (
      <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent">{eyebrow}</p>
    )}
    <h2 className="text-3xl font-bold text-primary sm:text-4xl">{title}</h2>
    {sub && <p className="mt-4 text-muted-foreground">{sub}</p>}
  </div>
);

export default SectionHeader;
