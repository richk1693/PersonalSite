import { GraduationCap, MapPin } from 'lucide-react';
import type { Education as EducationType } from '../types/resume';

interface EducationProps {
  education: EducationType[];
}

export function Education({ education }: EducationProps) {
  return (
    <section id="education" className="py-20 bg-slate-900 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-2">Education</h2>
        <div className="w-12 h-1 bg-blue-500 mb-12 rounded"></div>

        <div className="space-y-6">
          {education.map((edu, i) => (
            <div
              key={i}
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-colors flex flex-col md:flex-row md:items-center gap-4"
            >
              <div className="p-3 bg-blue-600/20 rounded-lg w-fit">
                <GraduationCap size={28} className="text-blue-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white">{edu.institution}</h3>
                <p className="text-blue-400 font-medium">
                  {edu.degree} in {edu.field}
                </p>
                <div className="flex items-center gap-4 mt-1 text-slate-400 text-sm">
                  <span className="flex items-center gap-1">
                    <MapPin size={13} />
                    {edu.location}
                  </span>
                  <span>Class of {edu.graduationYear}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
