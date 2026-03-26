import { useResume } from './hooks/useResume';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';

function App() {
  const { resume, loading, error } = useResume();

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-400">Loading...</p>
        </div>
      </div>
    );
  }

  if (error || !resume) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center text-slate-400">
          <p className="text-xl font-semibold mb-2">Unable to load resume data</p>
          <p className="text-sm">{error ?? 'Unknown error'}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="font-sans antialiased">
      <Navbar />
      <Hero resume={resume} />
      <Experience experiences={resume.experience} />
      <Skills skills={resume.skills} />
      <Projects projects={resume.projects} />
      <Education education={resume.education} />
      <Contact resume={resume} />
      <footer className="bg-slate-950 py-6 text-center text-slate-500 text-sm border-t border-slate-800">
        <p>
          © {new Date().getFullYear()} {resume.name} · Built with C# & React ·{' '}
          <a
            href="https://github.com/richk1693/PersonalSite"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-300 transition-colors"
          >
            Source
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
