import Reveal from "./Reveal";

export default function SectionTitle({ title, text }) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
        {title}
      </h2>
      {text && <p className="mt-4 text-lg text-muted">{text}</p>}
    </Reveal>
  );
}
