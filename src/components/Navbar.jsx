import { useState } from "react";
import { Menu, X } from "lucide-react";
import Reveal from "./Reveal";
import { navLinks, site } from "../data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-bg/80 backdrop-blur">
      <Reveal
        as="nav"
        aria-label="Main"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
      >
        {/* MyLogo */}
        <a href="#home">
          <h1 className="text-4xl font-extrabold italic tracking-tight">
            <span className="text-white">Mo</span>
            <span className="text-lime-400">Ali</span>
          </h1>
        </a>

        {/* Nav Links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map(([label, id]) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="text-sm text-muted transition-colors hover:text-white"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Contact BTN */}
        <a
          href="#contact"
          className="hidden rounded-full bg-accent px-5 py-2 text-sm font-bold text-black transition hover:brightness-110 md:inline-block"
        >
          Contact Me
        </a>

        {/* Toggle Menu For Mobile */}
        <button
          className="md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </Reveal>
      {open && (
        <ul className="border-t border-white/5 bg-bg px-6 py-4 md:hidden">
          {navLinks.map(([label, id]) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={close}
                className="block py-3 text-muted hover:text-white"
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={close}
              className="mt-2 block rounded-full bg-accent py-3 text-center font-bold text-black"
            >
              Contact Me
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
