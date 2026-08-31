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
  chart: <BarChart3 className="text-indigo-600" size={22} />,
  brain: <Brain className="text-indigo-600" size={22} />,
  cog: <Cog className="text-indigo-600" size={22} />,
  server: <Server className="text-indigo-600" size={22} />,
  layout: <Layout className="text-indigo-600" size={22} />,
  puzzle: <Puzzle className="text-indigo-600" size={22} />,
  dashboard: <BarChart3 className="text-indigo-600" size={22} />,
  database: <Database className="text-indigo-600" size={22} />,
  graduation: <GraduationCap className="text-indigo-600" size={22} />,
  building: <Building2 className="text-indigo-600" size={22} />,
  cloud: <Cloud className="text-indigo-600" size={22} />,
  tool: <Wrench className="text-indigo-600" size={22} />,
};

type ServiceCardProps = {
  icon: string;
  title: string;
  description: string;
};

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <article className="card h-full">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50">
        {icons[icon] ?? icons.cog}
      </div>
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{description}</p>
    </article>
  );
}
