import Image from "next/image";
import { Typewriter } from "./Typewriter";
import { siteConfig } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 px-6 py-16 text-center text-white shadow-xl md:px-12 md:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.35),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(236,72,153,0.25),transparent_35%)]" />
      <div className="relative mx-auto max-w-3xl">
        <div className="mx-auto mb-6 h-28 w-28 overflow-hidden rounded-full border-4 border-white/20 shadow-2xl">
          <Image
            src={siteConfig.profileImage}
            alt={siteConfig.name}
            width={112}
            height={112}
            className="h-full w-full object-cover"
            priority
          />
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">
          {siteConfig.name}
        </h1>
        <p className="mt-3 text-base text-slate-200 md:text-lg">
          {siteConfig.title}
        </p>
        <Typewriter />
        <p className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
          Je conçois et déploie des solutions data et web intelligentes alliant
          analyse de données, intelligence artificielle, automatisation et
          développement full-stack pour accompagner la transformation numérique
          des entreprises.
        </p>
      </div>
    </section>
  );
}
