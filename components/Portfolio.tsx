import type { Project } from '../types';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PortfolioModal from './PortfolioModal';
import { AnimatedText } from './AnimatedText';

const portfolioData: Project[] = [
  {
    id: 1,
    title: 'Faceless YouTube & Long-Form Content',
    description: 'Showcases of long-form and faceless YouTube video editing focusing on visual storytelling, scene flow, and engaging content.',
    category: 'Faceless YouTube & Long-Form Content',
    thumbnailUrl: 'https://img.youtube.com/vi/u4el3UEHEqU/hqdefault.jpg',
    tools: ['Premiere Pro', 'CapCut', 'Photoshop'],
    playlist: [
      {
        id: 'long-1',
        type: 'standard',
        title: 'YouTube Video Editing Showcase',
        description: 'A showcase of my video editing work, focusing on visual storytelling, smooth pacing, and a professional viewing experience.',
        thumbnailUrl: 'https://img.youtube.com/vi/u4el3UEHEqU/hqdefault.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=u4el3UEHEqU',
        tools: ['Premiere Pro', 'CapCut', 'Photoshop'],
        caseStudy: {
          problem: 'Creators need video editing that retains viewers through long watch times and reduces drop-off in the crucial first 30 seconds.',
          solution: 'Applied dynamic pacing, motion graphic callouts, sound design, and custom graphics to maximize viewer retention and engagement.',
          result: 'Achieved high audience retention and delivered a polished, broadcast-quality viewing experience.',
          keyMetrics: [
            { label: 'Viewer Retention', value: '+45%' },
            { label: 'Watch Time', value: '+60%' },
            { label: 'Pacing Score', value: '10/10' },
          ]
        }
      },
      {
        id: 'long-2',
        type: 'standard',
        title: 'Cinematic Video Editing',
        description: 'A creative video project highlighting visual presentation, scene flow, and engaging storytelling.',
        thumbnailUrl: 'https://img.youtube.com/vi/zYAiXclV_tU/hqdefault.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=zYAiXclV_tU',
        tools: ['Premiere Pro', 'DaVinci Resolve', 'Photoshop'],
        caseStudy: {
          problem: 'Translating narrative ideas into high-production-value visual scenes with consistent tone, lighting, and pacing.',
          solution: 'Utilized seamless transitions, color grading, custom sound design, and atmospheric B-roll layering.',
          result: 'Created an immersive narrative flow that elevated the visual aesthetic of the content.',
          keyMetrics: [
            { label: 'Production Value', value: 'High' },
            { label: 'Audience Engagement', value: '+52%' },
            { label: 'Viewer Satisfaction', value: '98%' },
          ]
        }
      },
      {
        id: 'long-3',
        type: 'standard',
        title: 'Creative Video Content',
        description: 'A portfolio example showcasing my editing style, attention to detail, and ability to shape footage into cohesive video content.',
        thumbnailUrl: 'https://img.youtube.com/vi/TiBsAchaNoE/hqdefault.jpg',
        videoUrl: 'https://www.youtube.com/watch?v=TiBsAchaNoE',
        tools: ['Premiere Pro', 'After Effects', 'Photoshop'],
        caseStudy: {
          problem: 'Unstructured raw footage requiring thematic flow, clear messaging, and engaging pacing.',
          solution: 'Organized and cut footage into a structured timeline with audio sync, kinetic text, and motion accents.',
          result: 'Delivered cohesive, impactful video content that kept viewers hooked from start to finish.',
          keyMetrics: [
            { label: 'Hook Retention', value: '82%' },
            { label: 'Average Completion', value: '+38%' },
            { label: 'Content Clarity', value: '100%' },
          ]
        }
      }
    ]
  },
  {
    id: 2,
    title: 'YouTube Shorts & Social Media',
    description: 'A vertical video editing showcase for short-form content, with an emphasis on concise storytelling and social media presentation.',
    category: 'YouTube Shorts & Social Media',
    thumbnailUrl: 'https://img.youtube.com/vi/VOLDS4sgWjE/hqdefault.jpg',
    tools: ['Premiere Pro', 'CapCut', 'Photoshop'],
    playlist: [
      {
        id: 'short-1',
        type: 'standard',
        title: 'Short-Form Video Editing',
        description: 'A vertical video editing showcase for short-form content, with an emphasis on concise storytelling and social media presentation.',
        thumbnailUrl: 'https://img.youtube.com/vi/VOLDS4sgWjE/hqdefault.jpg',
        videoUrl: 'https://www.youtube.com/shorts/VOLDS4sgWjE',
        tools: ['Premiere Pro', 'CapCut'],
        caseStudy: {
          problem: 'Short-form algorithms demand immediate hooks within the first 2 seconds and rapid visual stimulation to prevent swiping.',
          solution: 'Structured high-energy transitions, bold animated captions, sound effects, and zoom cuts tailored for vertical screens.',
          result: 'Achieved viral-ready pacing with high completion rates and increased viewer replay metrics.',
          keyMetrics: [
            { label: 'View-Through Rate', value: '89%' },
            { label: 'Social Engagement', value: '+75%' },
            { label: 'Loop Retention', value: '92%' },
          ]
        }
      }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } }
};

const CategoryCard: React.FC<{ project: Project; onProjectClick: (project: Project) => void }> = ({ project, onProjectClick }) => (
    <motion.div 
        layout
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.95 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="group relative overflow-hidden rounded-lg bg-secondary dark:bg-[#11111F] shadow-lg cursor-pointer aspect-[3/2] border border-transparent hover:border-accent-start/50 transition-colors"
        onClick={() => onProjectClick(project)}
        data-cursor-variant="project"
    >
        <img 
            src={project.thumbnailUrl} 
            alt={project.title} 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 filter brightness-[0.8] group-hover:brightness-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-500"></div>
        
        {/* Playlist Indicator */}
        <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/60 backdrop-blur-sm text-white text-xs font-bold py-1.5 px-3 rounded-full z-10 border border-white/10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <span>{project.playlist.length} Videos</span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-2">
                    {project.title}
                </h3>
                <p className="text-sm text-slate-300 line-clamp-2">{project.description}</p>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0 delay-100">
                {project.tools.slice(0, 3).map(tool => (
                    <span key={tool} className="text-xs bg-accent-start/80 text-white py-1 px-2 rounded-full backdrop-blur-sm">{tool}</span>
                ))}
            </div>
        </div>
    </motion.div>
);


const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <motion.section 
        id="portfolio" 
        className="py-20 bg-primary dark:bg-[#0A0A14]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-12">
            <AnimatedText 
                text="My Portfolio" 
                className="text-4xl font-bold text-center text-text-primary dark:text-white" 
            />
        </div>
        
        <p className="text-center text-text-secondary dark:text-[#94A3B8] mb-12 max-w-2xl mx-auto">
          Explore my work by category. Click on any card to view the video playlist.
        </p>

        <motion.div 
            layout
            className="grid md:grid-cols-2 gap-8"
        >
            <AnimatePresence>
              {portfolioData.map(project => (
                  <CategoryCard key={project.id} project={project} onProjectClick={handleProjectClick} />
              ))}
            </AnimatePresence>
        </motion.div>
      </div>
      {selectedProject && <PortfolioModal project={selectedProject} onClose={handleCloseModal} />}
    </motion.section>
  );
};

export default Portfolio;