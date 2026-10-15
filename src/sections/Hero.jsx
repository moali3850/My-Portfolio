import { Github, Linkedin } from "lucide-react";
import Reveal from "../components/Reveal";
import DotsBackground from "../components/DotsBackground";
import { site } from "../data/site";
//

const portrait = `${import.meta.env.BASE_URL}images/MyPhoto.png`;

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-6 pb-20 pt-32 sm:pt-40"
    >
      <DotsBackground density={10000} />
      <div
        className="pointer-events-none absolute -right-32 top-20 h-\[28rem\] w-\[28rem\] rounded-full bg-accent/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div>
          <Reveal delay={100}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-card px-4 py-1.5 text-sm text-muted">
              availableForWork: "My Mom Says I'm Good 😂"
            </span>
          </Reveal>
          <Reveal
            as="h1"
            delay={250}
            className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-7xl"
          >
            Hi, I'm {site.name}
          </Reveal>
          <Reveal
            as="p"
            delay={400}
            className="mt-4 text-2xl font-semibold sm:text-3xl"
          >
            Front-End Developer crafting{" "}
            <span className="text-accent">modern web experiences.</span>
          </Reveal>
          <Reveal
            as="p"
            delay={550}
            className="mt-6 max-w-xl text-lg text-muted"
          >
            I love building responsive, accessible, and user-friendly interfaces
            with clean code and close attention to detail.
          </Reveal>

          {/* My Buttons */}
          <Reveal delay={700} className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-accent px-7 py-3 font-bold text-black transition hover:brightness-110"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/20 px-7 py-3 font-bold transition hover:border-accent hover:text-accent"
            >
              Contact Me
            </a>
          </Reveal>
          <Reveal delay={850} className="mt-8 flex gap-4">
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-white/10 p-3 text-muted transition hover:border-accent hover:text-accent"
            >
              <Github size={20} />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-white/10 p-3 text-muted transition hover:border-accent hover:text-accent"
            >
              <Linkedin size={20} />
            </a>
          </Reveal>
        </div>

        <Reveal delay={500} className="relative mx-auto w-full max-w-md">
          {/* Decorative shapes sit behind the portrait and never cover the face */}
          <div
            className="
            float absolute inset-x-6 bottom-0 top-10 rounded-[3rem]
            border border-accent/20 bg-linear-to-b from-accent/20 to-transparent"
            aria-hidden="true"
          />
          <div
            className="absolute -left-4 top-1/3 h-16 w-16 rounded-2xl border border-accent/40"
            aria-hidden="true"
          />
          <img
            src={portrait}
            alt="Portrait of Mohamed Ali"
            width="400"
            height="500"
            className="
            relative h-auto w-full object-contain drop-shadow-[0_0_40px_rgba(201,243,29,0.25)] 
            hover:pointer-fine:hover:scale-105 hover:drop-shadow-[0_0_60px_rgba(201,243,29,0.5)]
            transition-all duration-300 cursor-pointer rounded-3xl
          "
          />

          {/* Box label */}
          <pre
            className="absolute -bottom-4 left-0 rounded-2xl border border-white/10 bg-card/90 p-4 text-xs text-muted backdrop-blur sm\:left-[-2rem\]"
            aria-hidden="true"
          >
            {`const bro = {
  name: "Mohamed Ali",
  talent: "Copy Paste Engineer",
};`}
          </pre>
        </Reveal>
      </div>
    </section>
  );
}
