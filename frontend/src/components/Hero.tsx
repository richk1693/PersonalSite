import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './SocialIcons';
import type { Resume } from '../types/resume';

interface HeroProps {
  resume: Resume;
}

export function Hero({ resume }: HeroProps) {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <div className="w-28 h-28 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mx-auto mb-6 text-4xl font-bold text-white shadow-2xl">
            {resume.name.split(' ').map((n) => n[0]).join('')}
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-3 tracking-tight">
            {resume.name}
          </h1>
          <p className="text-2xl text-blue-400 font-medium mb-4">{resume.title}</p>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            {resume.summary}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8 text-slate-400 text-sm">
          <a
            href={`mailto:${resume.email}`}
            className="flex items-center gap-2 hover:text-blue-400 transition-colors"
          >
            <Mail size={16} />
            {resume.email}
          </a>
          <span className="flex items-center gap-2">
            <Phone size={16} />
            {resume.phone}
          </span>
          <span className="flex items-center gap-2">
            <MapPin size={16} />
            {resume.location}
          </span>
        </div>

        <div className="flex justify-center gap-4">
          <a
            href={resume.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors shadow-lg"
          >
          <LinkedInIcon size={18} />
            LinkedIn
          </a>
          <a
            href={resume.gitHub}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition-colors shadow-lg"
          >
            <GitHubIcon size={18} />
            GitHub
          </a>
          <a
            href={`mailto:${resume.email}`}
            className="flex items-center gap-2 px-5 py-2.5 border border-slate-600 hover:border-blue-400 text-slate-300 hover:text-blue-400 rounded-lg font-medium transition-colors"
          >
            <Mail size={18} />
            Contact
          </a>
        </div>

        <div className="mt-16 animate-bounce">
          <ExternalLink size={20} className="text-slate-500 mx-auto rotate-90" />
        </div>
      </div>
    </section>
  );
}
