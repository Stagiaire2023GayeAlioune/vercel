import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { highlights, services } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="mt-16">
        <SectionHeader
          title="Mes domaines d'expertise"
          subtitle="Des solutions data, IA et web conçues pour générer de la valeur métier."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      <section className="mt-16">
        <SectionHeader title="Réalisations récentes" />
        <div className="grid gap-4 md:grid-cols-3">
          {highlights.map((item) => (
            <article key={item.title} className="card">
              <h3 className="font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-3xl border border-indigo-100 bg-gradient-to-r from-indigo-50 to-pink-50 p-8 md:p-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Découvrir mes projets
            </h2>
            <p className="mt-2 max-w-xl text-slate-600">
              Data/IA, plateformes métier, CRM, automatisation WhatsApp et
              solutions IA appliquées.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 hover:bg-indigo-700 transition-colors"
          >
            Voir le portfolio
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
