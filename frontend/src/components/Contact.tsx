import { Mail } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './SocialIcons';
import type { Resume } from '../types/resume';

interface ContactProps {
  resume: Resume;
}

export function Contact({ resume }: ContactProps) {
  return (
    <section id="contact" className="py-20 bg-slate-950 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-2">Get In Touch</h2>
        <div className="w-12 h-1 bg-blue-500 mb-6 rounded mx-auto"></div>
        <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10">
          I'm open to new opportunities in the Cleveland area and remote roles. Feel free to reach
          out!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`mailto:${resume.email}`}
            className="flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors shadow-lg"
          >
            <Mail size={18} />
            Send Email
          </a>
          <a
            href={resume.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition-colors"
          >
            <LinkedInIcon size={18} />
            Connect on LinkedIn
          </a>
          <a
            href={resume.gitHub}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-3 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white rounded-lg font-medium transition-colors"
          >
            <GitHubIcon size={18} />
            View GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
