import React from 'react';
import { LayersIcon, VideoCameraIcon, SpeakerWaveIcon } from './icons/IconComponents';

const workflowHighlights = [
  {
    tool: 'Adobe Premiere Pro',
    badge: 'Pr',
    badgeColor: 'text-[#EA77FF] bg-[#EA77FF]/15 border-[#EA77FF]/30',
    title: 'Timeline Editorial & Assembly',
    description: 'A-roll narrative trimming, multi-track pacing, dynamic cuts, high-retention audio sequencing, and broadcast-quality color balance.',
    features: [
      'Multi-track timeline cutting & pacing',
      'Audio leveling & background sound design',
      'Custom text styling & subtitles',
      'Export optimization for YouTube standards',
    ],
  },
  {
    tool: 'Adobe After Effects',
    badge: 'Ae',
    badgeColor: 'text-[#9999FF] bg-[#9999FF]/15 border-[#9999FF]/30',
    title: 'Motion Design & Visual FX',
    description: 'Kinetic typography, lower thirds, infographic charts, document callout animations, and custom 2D visual elements linked dynamically to the edit.',
    features: [
      'Kinetic titles & animated typography',
      'Infographics & animated data displays',
      'Archival document zoom & parchment motion',
      'Custom transitions & visual accents',
    ],
  },
];

const GearAndSetup: React.FC = () => {
  return (
    <section 
      id="software" 
      className="py-24 bg-secondary dark:bg-[#0C0E15] border-y border-border-default dark:border-white/5 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-cyan-400 block mb-2">
            Creative Technology
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-text-primary dark:text-white">
            Software &amp; Post-Production Environment
          </h2>
          <p className="mt-3 text-base text-text-secondary dark:text-slate-400 leading-relaxed font-normal">
            Specialized post-production suite centered around industry-standard Adobe Creative Cloud applications.
          </p>
        </div>

        {/* Software Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {workflowHighlights.map((app) => (
            <div
              key={app.tool}
              className="p-8 rounded-2xl bg-primary dark:bg-[#111420] border border-border-default dark:border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className={`w-10 h-10 rounded-xl font-mono font-bold text-sm flex items-center justify-center border ${app.badgeColor}`}>
                    {app.badge}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold font-display text-text-primary dark:text-white">
                      {app.tool}
                    </h3>
                    <span className="text-xs text-sky-600 dark:text-cyan-400 font-medium">
                      {app.title}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-text-secondary dark:text-slate-300 leading-relaxed font-normal mb-6">
                  {app.description}
                </p>

                <div className="space-y-2 pt-4 border-t border-border-default dark:border-white/5">
                  <div className="text-xs font-semibold text-text-primary dark:text-slate-300 mb-2">
                    Key capabilities:
                  </div>
                  {app.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-text-secondary dark:text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GearAndSetup;
