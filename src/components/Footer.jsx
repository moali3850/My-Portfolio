import {
  Github,
  Linkedin,
  Facebook,
  MessageCircle,
  Instagram,
} from "lucide-react";
import { navLinks, site } from "../data/site";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-extrabold">
            {site.name}
            <span className="text-accent">.</span>
          </p>
          <p className="mt-1 text-sm text-muted">
            Building clean, accessible interfaces for the web.
          </p>
        </div>
        <ul className="flex flex-wrap gap-6 text-sm text-muted">
          {navLinks.map(([label, id]) => (
            <li key={id}>
              <a href={`#${id}`} className="hover:text-white">
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-4">
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-muted hover:text-accent"
          >
            <Github />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-muted hover:text-accent"
          >
            <Linkedin />
          </a>
          <a
            href="https://www.facebook.com/moali3850"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-muted hover:text-accent"
          >
            <Facebook />
          </a>
          <a
            href="https://www.instagram.com/moali3850"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-muted hover:text-accent"
          >
            <Instagram />
          </a>
          <a
            href="https://wa.me/201012435235"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-muted hover:text-accent"
          >
            <MessageCircle />
          </a>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-6xl text-sm text-muted">
        &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
      </p>
    </footer>
  );
}
