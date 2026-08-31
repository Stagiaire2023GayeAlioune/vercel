import {
  BarChart3,
  Brain,
  Building2,
  Cloud,
  Cog,
  Database,
  GraduationCap,
  Layout,
  Puzzle,
  Server,
  Wrench,
} from "lucide-react";

const icons: Record<string, React.ReactNode> = {
  chart: <BarChart3 className="text-indigo-600" size={20} />,
  brain: <Brain className="text-indigo-600" size={20} />,
  cog: <Cog className="text-indigo-600" size={20} />,
  server: <Server className="text-indigo-600" size={20} />,
  layout: <Layout className="text-indigo-600" size={20} />,
  puzzle: <Puzzle className="text-indigo-600" size={20} />,
  dashboard: <BarChart3 className="text-indigo-600" size={20} />,
  database: <Database className="text-indigo-600" size={20} />,
  graduation: <GraduationCap className="text-indigo-600" size={20} />,
  building: <Building2 className="text-indigo-600" size={20} />,
  cloud: <Cloud className="text-indigo-600" size={20} />,
  tool: <Wrench className="text-indigo-600" size={20} />,
};

type ServiceCardProps = {
  icon: string;
  title: string;
  description: string;
};

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <article className="card group h-full p-5">
      <div className="mb-3 flex items-start gap-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-50 transition-colors group-hover:bg-indigo-100">
          {icons[icon] ?? icons.cog}
        </div>
        <h3 className="pt-0.5 text-base font-semibold leading-snug text-slate-900">
          {title}
        </h3>
      </div>
      <p className="line-clamp-3 text-sm leading-relaxed text-slate-600">
        {description}
      </p>
    </article>
  );
}
