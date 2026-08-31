import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/lib/data";

export function ProjectCard({ project }: { project: Project }) {
  const images = project.images ?? (project.image ? [project.image] : []);

  return (
    <article className="card flex h-full flex-col overflow-hidden p-0">
      {images.length > 0 && (
        <div className={`grid gap-0 ${images.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
          {images.map((src) => (
            <div key={src} className="relative h-44 w-full bg-slate-100">
              <Image
                src={src}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          ))}
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex flex-wrap gap-2">
          {project.tags?.map((tag) => (
            <span key={tag} className="badge">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-lg font-semibold text-slate-900">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
          {project.description}
        </p>
        {project.details?.map((d) => (
          <p key={d.label} className="mt-2 text-sm text-slate-600">
            <span className="font-medium text-slate-800">{d.label} :</span> {d.text}
          </p>
        ))}
        {project.link && (
          <Link
            href={project.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 hover:text-indigo-800"
          >
            {project.link.label}
            <ExternalLink size={14} />
          </Link>
        )}
      </div>
    </article>
  );
}
