import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { aboutContent, highlights, services } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="mt-8 md:mt-10">
        <SectionHeader
          id="expertise"
          title="Mes domaines d'expertise"
          subtitle="Des solutions data, IA et web conçues pour générer de la valeur métier."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      <section className="mt-12 md:mt-14">
        <SectionHeader title="Compétences techniques" />
        <div className="grid gap-4 sm:grid-cols-2">
          {aboutContent.techSkills.map((skill) => (
            <div key={skill.category} className="card p-5">
              <h3 className="font-semibold text-slate-900">{skill.category}</h3>
              <p className="mt-2 text-sm text-slate-600">{skill.items}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          <div>
            <h3 className="text-lg font-bold text-slate-900">Langages</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {aboutContent.languages.map((l) => (
                <li key={l.group}>
                  <span className="font-medium text-slate-800">{l.group} :</span>{" "}
                  {l.items}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">Visualisation</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {aboutContent.tools.slice(0, 2).map((t) => (
                <li key={t.group}>
                  <span className="font-medium text-slate-800">{t.group} :</span>{" "}
                  {t.items}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">Cloud & Collaboration</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {aboutContent.tools.slice(2).map((t) => (
                <li key={t.group}>
                  <span className="font-medium text-slate-800">{t.group} :</span>{" "}
                  {t.items}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-12 md:mt-14">
        <SectionHeader title="Réalisations récentes" />
        <div className="grid gap-4 md:grid-cols-3">
          {highlights.map((item) => (
            <article key={item.title} className="card p-5">
              <h3 className="font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12 md:mt-14 overflow-hidden rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-slate-50 p-6 md:p-8">
        <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-center">
          <div>
            <h2 className="text-xl font-bold text-slate-900 md:text-2xl">
              Découvrir mes projets
            </h2>
            <p className="mt-1.5 max-w-xl text-sm text-slate-600 md:text-base">
              Data/IA, plateformes métier, CRM, automatisation WhatsApp et
              solutions IA appliquées.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-indigo-500/20 transition hover:bg-indigo-700"
          >
            Voir le portfolio
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
