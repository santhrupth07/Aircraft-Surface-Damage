import React from 'react';
import { GithubIcon, CodeIcon, MailIcon } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-slate-800 text-slate-300 py-8 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-white font-medium text-lg mb-3">
              Aircraft Deformation Detection System
            </h3>
            <p className="text-slate-400 text-sm">
              An advanced AI-powered system designed to detect structural
              anomalies in aircraft images using computer vision technology.
            </p>
          </div>
          <div>
            <h3 className="text-white font-medium text-lg mb-3">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-slate-700 text-sky-300 rounded-full text-xs">
                React
              </span>
              <span className="px-3 py-1 bg-slate-700 text-sky-300 rounded-full text-xs">
                REST API
              </span>
              <span className="px-3 py-1 bg-slate-700 text-sky-300 rounded-full text-xs">
                Computer Vision
              </span>
              <span className="px-3 py-1 bg-slate-700 text-sky-300 rounded-full text-xs">
                Tailwind CSS
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center md:justify-between items-center mt-8 pt-6 border-t border-slate-700">
          <p className="text-sm text-slate-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} Aircraft Deformation Detection System
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <GithubIcon size={20} />
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <CodeIcon size={20} />
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <MailIcon size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;