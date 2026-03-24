import { ExternalLink } from 'lucide-react';
import { GitHubIcon } from './SocialIcons';
import type { Project } from '../types/resume';

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="py-20 bg-slate-950 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-2">Projects</h2>
        <div className="w-12 h-1 bg-blue-500 mb-12 rounded"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-blue-500/50 transition-colors flex flex-col"
            >
              <h3 className="text-lg font-semibold text-white mb-2">{project.name}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.technologies.map((tech, j) => (
                  <span
                    key={j}
                    className="px-2 py-0.5 bg-blue-900/40 text-blue-300 border border-blue-800/50 rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                {project.gitHubUrl && (
                  <a
                    href={project.gitHubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    <GitHubIcon size={15} />
                    Code
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-slate-400 hover:text-blue-400 text-sm transition-colors"
                  >
                    <ExternalLink size={15} />
                    Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
