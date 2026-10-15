import { ExternalLink, Github } from "lucide-react";

function LinkButton({ href, icon: Icon, children }) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold";
  if (!href)
    return (
      <span
        className={`${base} cursor-not-allowed border border-white/10 text-muted/60`}
        title="Add your link in src/data/projects.js"
      >
        <Icon size={16} />
        {children}
      </span>
    );
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`${base} border border-accent/40 text-accent transition hover:bg-accent hover:text-black`}
    >
      <Icon size={16} />
      {children}
    </a>
  );
}

export default function ProjectCard({ project }) {
  const { title, description, tags, image, liveUrl, codeUrl } = project;
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-card transition duration-300 hover:-translate-y-1 hover:border-accent/40">
      {image ? (
        <img
          src={image}
          alt={`Screenshot of ${title}`}
          className="aspect-video w-full object-cover"
        />
      ) : (
        <div className="flex aspect-video items-center justify-center  bg-linear-to-br from-[#262626] to-[#161616] text-sm text-muted">
          Screenshot placeholder
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 flex-1 text-muted">{description}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <li
              key={t}
              className="rounded-full bg-white/5 px-3 py-1 text-xs text-muted"
            >
              {t}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex gap-3">
          <LinkButton href={liveUrl} icon={ExternalLink}>
            Live Demo
          </LinkButton>
          <LinkButton href={codeUrl} icon={Github}>
            View Code
          </LinkButton>
        </div>
      </div>
    </article>
  );
}
