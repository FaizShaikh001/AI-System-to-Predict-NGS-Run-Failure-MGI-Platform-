/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Dna, Menu, X } from 'lucide-react';
import { sections } from './data';
import { 
  ProblemContext, 
  PreQCParameters, 
  MLModelDesign, 
  RealTimeInference, 
  AlertWorkflow, 
  ValidationMonitoring, 
  ImplementationRoadmap 
} from './components/Sections';

export default function App() {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80; // offset for header if any
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(s => document.getElementById(s.id));
      const scrollPosition = window.scrollY + 120; // offset

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i];
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans flex flex-col md:flex-row">
      {/* Mobile Header */}
      <div className="md:hidden bg-white border-b border-slate-200 p-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center font-bold text-indigo-900">
          <Dna className="mr-2 text-indigo-600" />
          MGI Predict
        </div>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 text-slate-600">
          {isSidebarOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`
        fixed md:sticky top-0 left-0 z-40 h-screen w-72 bg-white border-r border-slate-200 shadow-sm
        transform transition-transform duration-300 ease-in-out flex flex-col
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="p-6 border-b border-slate-100 hidden md:flex items-center font-bold text-xl text-indigo-900">
          <Dna className="mr-3 text-indigo-600" size={28} />
          MGI Predict
        </div>
        <div className="p-6 flex-1 overflow-y-auto">
          <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Proposal Contents</h4>
          <nav className="space-y-1">
            {sections.map((section) => {
              const Icon = section.icon;
              const isActive = activeSection === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`
                    w-full flex items-center px-3 py-2.5 text-sm rounded-lg transition-colors text-left
                    ${isActive 
                      ? 'bg-indigo-50 text-indigo-700 font-medium' 
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}
                  `}
                >
                  <Icon className={`mr-3 ${isActive ? 'text-indigo-600' : 'text-slate-400'}`} size={18} />
                  {section.title}
                </button>
              );
            })}
          </nav>
        </div>
        <div className="p-6 border-t border-slate-100 bg-slate-50">
          <div className="text-xs text-slate-500">
            Confidential Technical Proposal<br/>
            Prepared for NGS Operations
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 px-4 sm:px-8 md:px-12 lg:px-24 py-8 md:py-16 max-w-5xl mx-auto w-full">
        <header className="mb-16">
          <div className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-4">
            Technical Proposal
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-6">
            AI/ML Predictive System for MGI DNBSEQ Run Failure Detection
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
            A comprehensive design for early failure detection before costly sequencing errors occur, leveraging pre-QC parameters and machine learning.
          </p>
        </header>

        <div className="space-y-0">
          <ProblemContext />
          <PreQCParameters />
          <MLModelDesign />
          <RealTimeInference />
          <AlertWorkflow />
          <ValidationMonitoring />
          <ImplementationRoadmap />
        </div>
      </main>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/20 z-30 md:hidden backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}
