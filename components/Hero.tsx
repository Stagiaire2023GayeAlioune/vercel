import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Typewriter } from "./Typewriter";
import { siteConfig } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-slate-200/60 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 shadow-lg">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(99,102,241,0.22),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(14,165,233,0.12),transparent_45%)]" />
      <div className="relative px-5 py-8 md:px-8 md:py-10">
        <div className="flex flex-col items-center gap-6 md:flex-row md:items-center md:gap-8">
          <div className="shrink-0">
            <div className="h-20 w-20 overflow-hidden rounded-2xl border-2 border-white/15 shadow-lg ring-1 ring-white/10 md:h-24 md:w-24">
              <Image
                src={siteConfig.profileImage}
                alt={siteConfig.name}
                width={96}
                height={96}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>

          <div className="min-w-0 flex-1 text-center md:text-left">
            <p className="text-xs font-medium uppercase tracking-widest text-indigo-300/90">
              {siteConfig.tagline}
            </p>
            <h1 className="mt-1 text-2xl font-bold tracking-tight text-white md:text-3xl lg:text-4xl">
              {siteConfig.name}
            </h1>
            <p className="mt-1 text-sm text-slate-300 md:text-base">
              {siteConfig.title}
            </p>
            <Typewriter />
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-400 md:text-[0.925rem]">
              Solutions data, IA et web pour accélérer la transformation
              numérique des entreprises.
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3 md:justify-start">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Voir mes projets
                <ArrowRight size={15} />
              </Link>
              <a
                href="#expertise"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-4 py-2 text-sm font-medium text-white/90 transition hover:border-white/35 hover:bg-white/5"
              >
                Domaines d&apos;expertise
                <ChevronDown size={15} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
