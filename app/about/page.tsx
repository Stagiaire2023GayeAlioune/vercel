import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { aboutContent, siteConfig } from "@/lib/data";

export default function AboutPage() {
  return (
    <>
      <SectionHeader
        title="À propos de moi"
        subtitle="Data Scientist, développeur full-stack et spécialiste IA & automatisation."
      />

      <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
        <div className="relative mx-auto aspect-square w-full max-w-[280px] overflow-hidden rounded-3xl border border-slate-200 shadow-lg lg:mx-0">
          <Image
            src={siteConfig.profileImage}
            alt={siteConfig.name}
            fill
            className="object-cover"
            sizes="280px"
          />
        </div>
        <div className="space-y-4 text-slate-600 leading-relaxed">
          {aboutContent.intro.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </div>
      </div>

      <section className="mt-14">
        <h2 className="section-title">Éducation</h2>
        <ul className="mt-4 space-y-3">
          {aboutContent.education.map((item) => (
            <li key={item} className="card text-sm text-slate-600">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14">
        <h2 className="section-title">{aboutContent.internship.title}</h2>
        <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-start">
          <Image
            src={aboutContent.internship.logo}
            alt="Institut Lumière Matière"
            width={180}
            height={80}
            className="rounded-xl border border-slate-200 bg-white p-3"
          />
          <ul className="space-y-3 text-sm leading-relaxed text-slate-600">
            {aboutContent.internship.items.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-14 grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="section-title">Domaines d'intervention</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            {aboutContent.domains.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-indigo-500">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="section-title">Compétences comportementales</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            {aboutContent.softSkills.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-indigo-500">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="section-title">Compétences techniques</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {aboutContent.techSkills.map((skill) => (
            <div key={skill.category} className="card">
              <h3 className="font-semibold text-slate-900">{skill.category}</h3>
              <p className="mt-2 text-sm text-slate-600">{skill.items}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14 grid gap-8 lg:grid-cols-3">
        <div>
          <h2 className="text-lg font-bold text-slate-900">Langages</h2>
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
          <h2 className="text-lg font-bold text-slate-900">Visualisation</h2>
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
          <h2 className="text-lg font-bold text-slate-900">Cloud & Collaboration</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            {aboutContent.tools.slice(2).map((t) => (
              <li key={t.group}>
                <span className="font-medium text-slate-800">{t.group} :</span>{" "}
                {t.items}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
