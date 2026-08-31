import { Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/lib/data";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="text-sm font-semibold text-slate-900">Mes contacts</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-700 hover:border-indigo-300 hover:text-indigo-700 transition-colors"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-700 hover:border-indigo-300 hover:text-indigo-700 transition-colors"
            >
              <Mail size={16} />
              {siteConfig.email}
            </a>
          </div>
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} {siteConfig.tagline} — {siteConfig.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
