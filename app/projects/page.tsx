import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { projectSections } from "@/lib/data";

export default function ProjectsPage() {
  return (
    <>
      <SectionHeader
        title="Mes projets"
        subtitle="Portfolio structuré : Data/IA, produits digitaux et plateformes métier."
      />

      {projectSections.map((section) => (
        <section key={section.id} className="mb-16 last:mb-0">
          <h2 className="mb-6 text-xl font-bold text-slate-900 md:text-2xl">
            {section.title}
          </h2>
          <div
            className={`grid gap-6 ${
              section.id === "crm"
                ? "grid-cols-1"
                : "sm:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {section.projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
