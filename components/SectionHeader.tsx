export function SectionHeader({
  title,
  subtitle,
  id,
}: {
  title: string;
  subtitle?: string;
  id?: string;
}) {
  return (
    <div id={id} className="mb-6 scroll-mt-24 md:mb-8">
      <div className="flex items-center gap-3">
        <span className="h-8 w-1 rounded-full bg-indigo-600" aria-hidden />
        <h2 className="section-title">{title}</h2>
      </div>
      {subtitle && <p className="section-subtitle mt-2 pl-4">{subtitle}</p>}
    </div>
  );
}
