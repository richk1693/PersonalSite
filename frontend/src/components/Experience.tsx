import { Briefcase, MapPin } from 'lucide-react';
import type { Experience as ExperienceType } from '../types/resume';

interface ExperienceProps {
  experiences: ExperienceType[];
}

export function Experience({ experiences }: ExperienceProps) {
  return (
    <section id="experience" className="py-20 bg-slate-950 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-2">Experience</h2>
        <div className="w-12 h-1 bg-blue-500 mb-12 rounded"></div>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-blue-400 font-medium mt-1">
                    <Briefcase size={15} />
                    {exp.company}
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-slate-300 text-sm font-medium">
                    {exp.startDate} — {exp.endDate ?? 'Present'}
                  </div>
                  <div className="flex items-center gap-1 text-slate-400 text-sm justify-end mt-1">
                    <MapPin size={13} />
                    {exp.location}
                  </div>
                </div>
              </div>
              <ul className="space-y-2">
                {exp.highlights.map((h, j) => (
                  <li key={j} className="flex items-start gap-3 text-slate-300">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
