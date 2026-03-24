import type { Skill } from '../types/resume';

interface SkillsProps {
  skills: Skill[];
}

export function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills" className="py-20 bg-slate-900 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-2">Skills</h2>
        <div className="w-12 h-1 bg-blue-500 mb-12 rounded"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="bg-slate-800/50 rounded-xl p-5 border border-slate-700 hover:border-blue-500/50 transition-colors"
            >
              <h3 className="text-blue-400 font-semibold text-sm uppercase tracking-wider mb-3">
                {skill.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, j) => (
                  <span
                    key={j}
                    className="px-3 py-1 bg-slate-700 text-slate-200 rounded-full text-sm font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
