// Shared card grid used by "What I Do", "Process" and "Why Work With Me".
import Reveal from "../components/Reveal";

export default function Cards({
  items,
  cols = "md:grid-cols-2 lg:grid-cols-4",
}) {
  return (
    <ul className={`grid gap-6 ${cols}`}>
      {items.map(({ title, text, icon: Icon }, i) => (
        <Reveal as="li" key={title} delay={i * 120}>
          <div className="h-full rounded-3xl border border-white/10 bg-card p-6 transition duration-300 hover:border-accent/40">
            {Icon ? (
              <Icon className="text-accent" />
            ) : (
              <span className="font-bold text-accent">Step {i + 1}</span>
            )}
            <h3 className="mt-4 text-xl font-bold">{title}</h3>
            <p className="mt-2 text-muted">{text}</p>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}
