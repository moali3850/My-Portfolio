import DotsBackground from "./DotsBackground";

export default function Section({ id, alt = false, children }) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden px-6 py-24 sm:py-32 ${alt ? "bg-[#181818]" : ""}`}
    >
      <DotsBackground />
      <div className="relative mx-auto max-w-6xl">{children}</div>
    </section>
  );
}
