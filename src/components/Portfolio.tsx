import React from 'react';
import { useState } from 'react';
import { Github, Instagram, Mail, Sun, Moon } from 'lucide-react';
import DeveloperTheme from './DeveloperTheme';

const Portfolio = () => {
  const [activeSkillCategory, setActiveSkillCategory] = useState('design');
  const [isWorkModalOpen, setIsWorkModalOpen] = useState(false);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isThemeModalOpen, setIsThemeModalOpen] = useState(false);
  const [projectFilter, setProjectFilter] = useState('all');
  const [isModalClosing, setIsModalClosing] = useState(false);
  const [isAboutModalClosing, setIsAboutModalClosing] = useState(false);
  const [isThemeModalClosing, setIsThemeModalClosing] = useState(false);
  const [primaryColor, setPrimaryColor] = useState('#d4c4a8'); // warm beige from image
  const [secondaryColor, setSecondaryColor] = useState('#4a5d3a'); // dark forest green from image

  
  const [isDeveloperMode, setIsDeveloperMode] = useState(false);

  // Handle theme switching with animation
  if (isDeveloperMode) {
    return (
      <div className="theme-enter">
        <DeveloperTheme onToggleMode={() => setIsDeveloperMode(false)} />
      </div>
    );
  }

  // Create dynamic CSS variables for theme colors
  const themeStyles = {
    '--primary-color': primaryColor,
    '--secondary-color': secondaryColor,
  } as React.CSSProperties;

  const handleOpenThemeModal = () => {
    setIsThemeModalOpen(true);
  };

  const handleCloseThemeModal = () => {
    setIsThemeModalClosing(true);
    setTimeout(() => {
      setIsThemeModalOpen(false);
      setIsThemeModalClosing(false);
    }, 400);
  };

  const skillCategories = {
    design: {
      Design: {
        skills: [
          'UI Design (User Interface Design)',
          'UX Design (User Experience Design)',
          'Wireframing & Prototyping',
          'Visual Design',
          'Interaction Design',
          'Responsive Design',
          'Motion Design',
          'Color Theory'
        ],
        levels: [
          { name: 'UI/UX Design', level: 98 },
          { name: 'Prototyping', level: 95 },
          { name: 'Visual Design', level: 97 },
          { name: 'Motion Design', level: 88 },
          { name: 'Color Theory', level: 92 }
        ]
      }
    },
    technical: {
      Technical: {
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
        levels: [
          { name: 'HTML/CSS', level: 95 },
          { name: 'JavaScript', level: 90 },
          { name: 'React', level: 93 },
          { name: 'Tailwind CSS', level: 96 },
          { name: 'TypeScript', level: 85 }
        ]
      }
    },
    tools: {
      Tools: {
        skills: ['Figma', 'Framer', 'Wix', 'Wordpress', 'Adobe Photoshop', 'Spline', 'Rive'],
        levels: [
          { name: 'Figma', level: 98 },
          { name: 'Adobe Photoshop', level: 92 },
          { name: 'Framer', level: 88 },
          { name: 'WordPress', level: 90 },
          { name: 'Spline', level: 80 }
        ]
      }
    },
    power: {
      'Power Skills': {
        skills: ['3D Design', 'Generative Design', 'Animation Principles', 'Frontend Frameworks', 'No-code Tools'],
        levels: [
          { name: '3D Design', level: 82 },
          { name: 'Generative Design', level: 78 },
          { name: 'Animation', level: 88 },
          { name: 'Frameworks', level: 92 },
          { name: 'No-code Tools', level: 95 }
        ]
      }
    },
    all: {
      Technical: {
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
        levels: []
      },
      Design: {
        skills: ['UI/UX Design', 'Figma & Adobe XD', 'Responsive Design'],
        levels: []
      }
    }
  };

  const projects = [
  {
    id: 1,
    title: "F1 Website Redesign with 3D Model",
    description: "Modern Formula 1 website redesign featuring interactive 3D car models using Spline integration",
    image: "https://i.ibb.co/tpkGRzXk/Screenshot-2025-07-12-183152.png",
    tags: ["Spline", "3D Models", "TypeScript", "Web Design"],
    type: "code",
    link: "https://formula1-webpage.vercel.app/"
  },
  {
    id: 2,
    title: "Jarvis.io",
    description: "A website that features a futuristic robot with modern design and interactive elements",
    image: "https://i.ibb.co/mVkcRq7G/Screenshot-2025-07-12-183613.png",
    tags: ["Spline", "3D Models", "TypeScript", "Web Design"],
    type: "code",
    link: "https://jarvisio-webpage.vercel.app/"
  },
  {
    id: 3,
    title: "Vintage Portfolio Base",
    description: "A clean and elegant vintage-style portfolio website built with React and modern web technologies",
    image: "https://i.ibb.co/1GqMYJ4L/Screenshot-2025-07-12-201932.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "Web Design"],
    type: "code",
    link: "https://hashir500.github.io/Base-Portfolio/"
  },
  {
    id: 4,
    title: "ChatGPT Website Redesign",
    description: "A modern redesign of ChatGPT's website featuring interactive 3D elements, smooth animations, and enhanced user experience",
    image: "https://i.ibb.co/nqHSX7Rz/Screenshot-2025-07-12-204204.png",
    tags: ["3D Model", "Rive", "Framer", "No Code", "React"],
    type: "nocode",
    link: "https://chatgpt-redesign.framer.website/"
  },
  {
    id: 5,
    title: "Nothing Webpage Redesign",
    description: "A sleek and modern redesign of Nothing's website featuring minimalist design principles and clean aesthetics",
    image: "https://i.ibb.co/5XCZttwn/Screenshot-2025-07-12-231027.png",
    tags: ["Framer", "No Code", "Minimalist Design", "UI/UX"],
    type: "nocode",
    link: "https://nothing-redesign.framer.website/"
  },
  {
    id: 6,
    title: "ArborLink Client Website",
    description: "A professional and minimalistic website created for a client using Wix, focused on clean UI/UX and usability.",
    image: "https://i.ibb.co/x8sQ05dy/Screenshot-2025-07-13-111945.png",
    tags: ["No Code", "Wix", "UI/UX", "Minimalistic"],
    type: "nocode",
    link: "http://arborlinkapp.com"
  }
];


  const filteredProjects = projectFilter === 'all' 
    ? projects 
    : projects.filter(project => project.type === projectFilter);

  const handleCloseModal = () => {
    setIsModalClosing(true);
    setTimeout(() => {
      setIsWorkModalOpen(false);
      setIsModalClosing(false);
    }, 400);
  };

  const handleOpenModal = () => {
    setIsWorkModalOpen(true);
  };

  const handleOpenAboutModal = () => {
    setIsAboutModalOpen(true);
  };

  const handleCloseAboutModal = () => {
    setIsAboutModalClosing(true);
    setTimeout(() => {
      setIsAboutModalOpen(false);
      setIsAboutModalClosing(false);
    }, 400);
  };

  return (
    <div className="h-screen text-slate-800 p-2 lg:p-3 xl:p-4 flex items-center justify-center overflow-hidden" style={{...themeStyles, backgroundColor: 'var(--secondary-color)'}}>
      <div className="w-full max-w-[95vw] h-full max-h-[95vh] rounded-2xl shadow-2xl border-2 overflow-hidden flex flex-col border-vintage-border" style={{backgroundColor: 'var(--primary-color)', borderColor: 'var(--primary-color)'}}>
        {/* Header */}
       <header className="px-4 py-3 lg:px-6 lg:py-4 border-b flex-shrink-0 border-vintage-border"
  style={{ backgroundColor: 'var(--primary-color)', borderColor: 'var(--primary-color)' }}
>
  <nav className="flex justify-between items-center">
    <div className="text-lg lg:text-xl font-serif" style={{ color: 'var(--secondary-color)' }}>
      My Portfolio
    </div>

    <div className="flex items-center gap-3">
      <button
        onClick={() => setIsDeveloperMode(!isDeveloperMode)}
        className="px-3 py-1 rounded-full text-xs uppercase tracking-wider transition-all duration-300 hover:scale-105 border"
        style={{ borderColor: 'var(--secondary-color)', color: 'var(--secondary-color)' }}
        aria-label="Switch to developer mode"
      >
        Developer
      </button>

      {/* Theme Toggle Button */}
      <button
        onClick={handleOpenThemeModal}
        className="p-2 rounded-full transition-all duration-300 hover:scale-110"
        style={{backgroundColor: 'var(--secondary-color)', color: 'var(--primary-color)'}}
        aria-label="Toggle theme"
      >
        <Moon size={18} className="transition-transform duration-300" />
      </button>
    </div>
            
          </nav>
        </header>

        {/* Main Content */}
        <div className="p-4 flex-1 overflow-hidden">
          {/* Desktop Grid Layout - Exact match to image */}
          <div className="hidden lg:grid lg:grid-cols-9 lg:grid-rows-6 gap-3 h-full">
            {/* Hero Card - Large Left (spans 6 cols, 5 rows) */}
            <div className="col-span-4 row-span-4 rounded-xl p-6 flex flex-col justify-center animate-fade-in-delay-2s" style={{backgroundColor: 'var(--secondary-color)'}}>
              <h1 className="text-3xl font-serif leading-tight" style={{color: 'var(--primary-color)'}}>
                Reviving the spirit of <span className="italic" style={{color: 'var(--primary-color)', opacity: 0.8}}>vintage</span> through timeless design.
              </h1>
            </div>

            {/* Profile Card - Top Right (spans 3 cols, 5 rows) */}
            <div className="col-span-2 row-span-4 rounded-xl p-6 flex flex-col justify-center items-center animate-fade-in-first border-2" style={{backgroundColor: 'var(--primary-color)', borderColor: 'var(--secondary-color)'}}>
              <div className="w-32 h-32 rounded-full mb-4 flex items-center justify-center border-2" style={{backgroundColor: 'var(--secondary-color)', borderColor: 'var(--primary-color)'}}>
                <span className="text-4xl font-serif" style={{color: 'var(--primary-color)'}}>HH</span>
              </div>
              <h3 className="font-serif text-lg text-center" style={{color: 'var(--secondary-color)'}}>Designer & Developer</h3>
            </div>

            {/* Featured Project - Top Far Right (spans full column height) */}
            <div className="col-span-3 row-span-6 rounded-xl overflow-hidden animate-fade-in-delay-3s" style={{backgroundColor: 'var(--secondary-color)'}}>
              <div className="h-full p-6 flex flex-col justify-center">
                <h3 className="font-serif text-xl font-bold mb-6" style={{color: 'var(--primary-color)'}}>Skills</h3>
                
                {/* Filter Buttons */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <button
                    onClick={() => setActiveSkillCategory('design')}
                    className={`px-3 py-1 rounded-full text-xs uppercase tracking-wider transition-all ${
                      activeSkillCategory === 'design'
                        ? ''
                        : 'border'
                    }`}
                    style={activeSkillCategory === 'design' 
                      ? {backgroundColor: 'var(--primary-color)', color: 'var(--secondary-color)'} 
                      : {borderColor: 'var(--primary-color)', color: 'var(--primary-color)'}}
                  >
                    Design Skills
                  </button>
                  <button
                    onClick={() => setActiveSkillCategory('technical')}
                    className={`px-3 py-1 rounded-full text-xs uppercase tracking-wider transition-all ${
                      activeSkillCategory === 'technical'
                        ? ''
                        : 'border'
                    }`}
                    style={activeSkillCategory === 'technical' 
                      ? {backgroundColor: 'var(--primary-color)', color: 'var(--secondary-color)'} 
                      : {borderColor: 'var(--primary-color)', color: 'var(--primary-color)'}}
                  >
                    Technical Skills
                  </button>
                  <button
                    onClick={() => setActiveSkillCategory('tools')}
                    className={`px-3 py-1 rounded-full text-xs uppercase tracking-wider transition-all ${
                      activeSkillCategory === 'tools'
                        ? ''
                        : 'border'
                    }`}
                    style={activeSkillCategory === 'tools' 
                      ? {backgroundColor: 'var(--primary-color)', color: 'var(--secondary-color)'} 
                      : {borderColor: 'var(--primary-color)', color: 'var(--primary-color)'}}
                  >
                    Tools
                  </button>
                  <button
                    onClick={() => setActiveSkillCategory('power')}
                    className={`px-3 py-1 rounded-full text-xs uppercase tracking-wider transition-all ${
                      activeSkillCategory === 'power'
                        ? ''
                        : 'border'
                    }`}
                    style={activeSkillCategory === 'power' 
                      ? {backgroundColor: 'var(--primary-color)', color: 'var(--secondary-color)'} 
                      : {borderColor: 'var(--primary-color)', color: 'var(--primary-color)'}}
                  >
                    Power Skills
                  </button>
                </div>

                {/* Skills Display */}
                <div className="space-y-6">
                  {Object.entries(skillCategories[activeSkillCategory]).map(([category, skills]) => (
                    <div key={category}>
                      <h4 className="font-semibold text-sm mb-2" style={{color: 'var(--primary-color)', opacity: 0.8}}>{category}</h4>
                      
                      {/* Skill Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {skills.skills.map((skill, index) => (
                          <button
                            key={index}
                            onClick={() => window.open(`https://www.google.com/search?q=${encodeURIComponent(skill)}`, '_blank')}
                            className="px-3 py-1 rounded text-xs font-medium transition-colors cursor-pointer hover:scale-105 transform"
                            style={{backgroundColor: 'var(--primary-color)', color: 'var(--secondary-color)'}}
                          >
                            {skill}
                          </button>
                        ))}
                      </div>
                      
                      {/* Skill Level Graph */}
                      {skills.levels && skills.levels.length > 0 && (
                        <div className="mt-3">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-medium" style={{color: 'var(--primary-color)'}}>Proficiency:</span>
                            <div className="flex-1 rounded-full h-2 overflow-hidden bg-gray-300">
                              <div 
                                className="h-full rounded-full transition-all duration-1000 ease-out bg-green-600"
                                style={{ 
                                  width: `${skills.levels.reduce((sum, s) => sum + s.level, 0) / skills.levels.length}%`
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* About Card - Bottom Left */}
            <div className="col-span-2 row-span-2 rounded-xl p-4 flex flex-col justify-center animate-fade-in-delay-4s" style={{backgroundColor: 'var(--secondary-color)'}}>
              <h2 className="font-serif text-lg mb-3" style={{color: 'var(--primary-color)'}}>About Me</h2>
              <button 
                onClick={handleOpenAboutModal}
                className="border px-4 py-2 rounded-full text-xs uppercase tracking-wider transition-all w-fit hover:opacity-80"
                style={{borderColor: 'var(--primary-color)', color: 'var(--primary-color)'}}
              >
                Learn More
              </button>
            </div>

            {/* Contact Card - Bottom Center */}
            <div className="col-span-2 row-span-2 rounded-xl p-4 flex flex-col justify-center animate-fade-in-delay-5s border-2" style={{backgroundColor: 'var(--primary-color)', borderColor: 'var(--secondary-color)'}}>
              <h2 className="font-serif text-xl mb-2 italic" style={{color: 'var(--secondary-color)'}}>
                Contact me
              </h2>
              <p className="text-sm leading-relaxed mb-3" style={{color: 'var(--secondary-color)'}}>
                Let's work together.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="mailto:iamhashirhassan24@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:opacity-70"
                  style={{ color: 'var(--secondary-color)' }}
                >
                  <Mail size={20} />
                </a>
                <a href="https://www.instagram.com/iamhashir_hassan/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:opacity-70" style={{color: 'var(--secondary-color)'}}>
                  <Instagram size={20} />
                </a>
                <a href="https://github.com/hashir500" target="_blank" rel="noopener noreferrer" className="transition-colors hover:opacity-70" style={{color: 'var(--secondary-color)'}}>
                  <Github size={20} />
                </a>
              </div>
            </div>

            {/* Work Projects Card - Bottom Right */}
            <div className="col-span-2 row-span-2 rounded-xl p-4 flex flex-col justify-center animate-fade-in-delay-6s" style={{backgroundColor: 'var(--secondary-color)'}}>
              <h2 className="font-serif text-lg mb-3" style={{color: 'var(--primary-color)'}}>My Projects</h2>
              <button 
                onClick={handleOpenModal}
                className="border px-4 py-2 rounded-full text-xs uppercase tracking-wider transition-all w-fit hover:opacity-80"
                style={{borderColor: 'var(--primary-color)', color: 'var(--primary-color)'}}
              >
                View Projects
              </button>
            </div>
          </div>

          {/* Tablet Layout */}
          <div className="hidden md:grid lg:hidden md:grid-cols-2 gap-4 h-full">
            {/* Hero Section */}
            <div className="rounded-xl p-4 flex flex-col justify-center" style={{backgroundColor: 'var(--secondary-color)'}}>
              <h1 className="text-xl font-serif leading-tight" style={{color: 'var(--primary-color)'}}>
                Reviving the spirit of <span className="italic" style={{color: 'var(--primary-color)', opacity: 0.8}}>vintage</span> through timeless design.
              </h1>
            </div>

            {/* Profile Section */}
            <div className="rounded-xl p-4 flex flex-col justify-center items-center border-2" style={{backgroundColor: 'var(--primary-color)', borderColor: 'var(--secondary-color)'}}>
              <div className="text-center">
                <div className="w-24 h-24 rounded-full mx-auto mb-3 flex items-center justify-center border-2" style={{backgroundColor: 'var(--secondary-color)', borderColor: 'var(--primary-color)'}}>
                  <span className="text-2xl font-serif" style={{color: 'var(--primary-color)'}}>HH</span>
                </div>
                <h3 className="font-serif text-base" style={{color: 'var(--secondary-color)'}}>Designer & Developer</h3>
              </div>
            </div>

            {/* About */}
            <div className="rounded-xl p-4 flex flex-col justify-center" style={{backgroundColor: 'var(--secondary-color)'}}>
              <h2 className="font-serif text-base mb-2" style={{color: 'var(--primary-color)', opacity: 0.8}}>About Me</h2>
              <p className="text-xs leading-relaxed mb-4" style={{color: 'var(--primary-color)'}}>
                Passionate about vintage aesthetics and timeless design principles.
              </p>
              <button 
                onClick={handleOpenAboutModal}
                className="border px-3 py-1 rounded-full text-xs uppercase tracking-wider transition-all w-fit hover:opacity-80"
                style={{borderColor: 'var(--primary-color)', color: 'var(--primary-color)'}}
              >
                Learn More
              </button>
            </div>

            {/* Contact */}
            <div className="rounded-xl p-4 flex flex-col justify-center border-2" style={{backgroundColor: 'var(--primary-color)', borderColor: 'var(--secondary-color)'}}>
              <h2 className="font-serif text-lg mb-2 italic" style={{color: 'var(--secondary-color)'}}>
                Contact me
              </h2>
              <p className="text-xs leading-relaxed mb-4" style={{color: 'var(--secondary-color)'}}>
                Let's work together.
              </p>
              <div className="flex items-center gap-3">
             <button
  onClick={() =>
    window.open(
      'https://mail.google.com/mail/?view=cm&fs=1&to=iamhashirhassan24@gmail.com',
      '_blank'
    )
  }
  className="transition-colors hover:opacity-70"
  style={{ color: 'var(--secondary-color)' }}
>
  <Mail size={20} />
</button>






                <a href="https://www.instagram.com/iamhashir_hassan/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:opacity-70" style={{color: 'var(--secondary-color)'}}>
                  <Instagram size={20} />
                </a>
                <a href="https://github.com/hashir500" target="_blank" rel="noopener noreferrer" className="transition-colors hover:opacity-70" style={{color: 'var(--secondary-color)'}}>
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden space-y-4 h-full overflow-y-auto">
            {/* Hero */}
            <div className="rounded-xl p-4" style={{backgroundColor: 'var(--secondary-color)'}}>
              <h1 className="text-lg font-serif leading-tight" style={{color: 'var(--primary-color)'}}>
                Reviving the spirit of <span className="italic" style={{color: 'var(--primary-color)', opacity: 0.8}}>vintage</span> through timeless design.
              </h1>
            </div>

            {/* Profile */}
            <div className="rounded-xl p-4 border-2" style={{backgroundColor: 'var(--primary-color)', borderColor: 'var(--secondary-color)'}}>
              <div className="text-center">
                <div className="w-20 h-20 rounded-full mx-auto mb-3 flex items-center justify-center border-2" style={{backgroundColor: 'var(--secondary-color)', borderColor: 'var(--primary-color)'}}>
                  <span className="text-lg font-serif" style={{color: 'var(--primary-color)'}}>HH</span>
                </div>
                <h3 className="font-serif text-base" style={{color: 'var(--secondary-color)'}}>Designer & Developer</h3>
              </div>
            </div>

            {/* About */}
            <div className="rounded-xl p-4" style={{backgroundColor: 'var(--secondary-color)'}}>
              <h2 className="font-serif text-lg mb-2" style={{color: 'var(--primary-color)', opacity: 0.8}}>About Me</h2>
              <p className="text-sm leading-relaxed mb-4" style={{color: 'var(--primary-color)'}}>
                Designer with a passion for vintage aesthetics and timeless design principles.
              </p>
              <button 
                onClick={handleOpenAboutModal}
                className="border px-3 py-1 rounded-full text-xs uppercase tracking-wider transition-all hover:opacity-80"
                style={{borderColor: 'var(--primary-color)', color: 'var(--primary-color)'}}
              >
                Learn More
              </button>
            </div>

            {/* Contact */}
            <div className="rounded-xl p-4 border-2" style={{backgroundColor: 'var(--primary-color)', borderColor: 'var(--secondary-color)'}}>
              <h2 className="font-serif text-xl mb-2 italic" style={{color: 'var(--secondary-color)'}}>
                Contact me
              </h2>
              <p className="text-sm leading-relaxed mb-4" style={{color: 'var(--secondary-color)'}}>
                Interested in working together?
              </p>
              <div className="flex gap-3">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=iamhashirhassan24@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:opacity-70"
                  style={{ color: 'var(--secondary-color)' }}
                >
                  <Mail size={20} />
                </a>
                <a href="https://www.instagram.com/iamhashir_hassan/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:opacity-70" style={{color: 'var(--secondary-color)'}}>
                  <Instagram size={20} />
                </a>
                <a href="https://github.com/hashir500" target="_blank" rel="noopener noreferrer" className="transition-colors hover:opacity-70" style={{color: 'var(--secondary-color)'}}>
                  <Github size={20} />
                </a>
              </div>
            </div>

            {/* Skills */}
            <div className="rounded-xl p-4" style={{backgroundColor: 'var(--secondary-color)'}}>
              <h3 className="font-serif text-lg font-bold mb-4" style={{color: 'var(--primary-color)'}}>Skills</h3>
              
              {/* Filter Buttons */}
              <div className="flex flex-wrap gap-2 mb-4">
                <button
                  onClick={() => setActiveSkillCategory('design')}
                  className={`px-3 py-1 rounded-full text-xs uppercase tracking-wider transition-all ${
                    activeSkillCategory === 'design'
                      ? ''
                      : 'border'
                  }`}
                  style={activeSkillCategory === 'design' 
                    ? {backgroundColor: 'var(--primary-color)', color: 'var(--secondary-color)'} 
                    : {borderColor: 'var(--primary-color)', color: 'var(--primary-color)'}}
                >
                  Design
                </button>
                <button
                  onClick={() => setActiveSkillCategory('technical')}
                  className={`px-3 py-1 rounded-full text-xs uppercase tracking-wider transition-all ${
                    activeSkillCategory === 'technical'
                      ? ''
                      : 'border'
                  }`}
                  style={activeSkillCategory === 'technical' 
                    ? {backgroundColor: 'var(--primary-color)', color: 'var(--secondary-color)'} 
                    : {borderColor: 'var(--primary-color)', color: 'var(--primary-color)'}}
                >
                  Technical
                </button>
                <button
                  onClick={() => setActiveSkillCategory('tools')}
                  className={`px-3 py-1 rounded-full text-xs uppercase tracking-wider transition-all ${
                    activeSkillCategory === 'tools'
                      ? ''
                      : 'border'
                  }`}
                  style={activeSkillCategory === 'tools' 
                    ? {backgroundColor: 'var(--primary-color)', color: 'var(--secondary-color)'} 
                    : {borderColor: 'var(--primary-color)', color: 'var(--primary-color)'}}
                >
                  Tools
                </button>
              </div>

              {/* Skills Display */}
              <div className="space-y-4">
                {Object.entries(skillCategories[activeSkillCategory]).map(([category, skills]) => (
                  <div key={category}>
                    <h4 className="font-semibold text-sm mb-2" style={{color: 'var(--primary-color)', opacity: 0.8}}>{category}</h4>
                    
                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {skills.skills.slice(0, 4).map((skill, index) => (
                        <button
                          key={index}
                          onClick={() => window.open(`https://www.google.com/search?q=${encodeURIComponent(skill)}`, '_blank')}
                          className="px-2 py-1 rounded text-xs font-medium transition-colors cursor-pointer hover:scale-105 transform"
                          style={{backgroundColor: 'var(--primary-color)', color: 'var(--secondary-color)'}}
                        >
                          {skill}
                        </button>
                      ))}
                    </div>
                    
                    {/* Skill Level Graph */}
                    {skills.levels && skills.levels.length > 0 && (
                      <div className="mt-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-medium" style={{color: 'var(--primary-color)'}}>Proficiency:</span>
                          <div className="flex-1 bg-gray-300 rounded-full h-2 overflow-hidden">
                            <div 
                              className="h-full bg-green-600 rounded-full transition-all duration-1000 ease-out"
                              style={{ 
                                width: `${skills.levels.reduce((sum, s) => sum + s.level, 0) / skills.levels.length}%`
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div className="rounded-xl p-4 border-2" style={{backgroundColor: 'var(--primary-color)', borderColor: 'var(--secondary-color)'}}>
              <h2 className="font-serif text-lg mb-3" style={{color: 'var(--secondary-color)'}}>My Projects</h2>
              <p className="text-sm mb-4" style={{color: 'var(--secondary-color)', opacity: 0.8}}>
                Check out my latest work and projects
              </p>
              <button 
                onClick={handleOpenModal}
                className="border px-4 py-2 rounded-full text-xs uppercase tracking-wider transition-all w-fit hover:opacity-80"
                style={{borderColor: 'var(--secondary-color)', color: 'var(--secondary-color)'}}
              >
                View Projects
              </button>
            </div>
          </div>
        </div>

      {/* Mac-style Work Modal */}
      {isWorkModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50" style={themeStyles}>
          {/* Backdrop */}
          <div 
            className={`absolute inset-0 backdrop-blur-sm transition-opacity duration-300 ${
              isModalClosing ? 'opacity-0' : 'opacity-100 animate-fade-in'
            }`}
            onClick={handleCloseModal}
          />
          
          {/* Modal Window */}
          <div className={`relative w-full max-w-4xl h-[80vh] bg-black rounded-xl shadow-2xl border border-vintage-cream overflow-hidden transition-all duration-300 ${
            isModalClosing 
              ? 'animate-genie-minimize' 
              : 'animate-genie-appear'
          }`} style={{backgroundColor: 'var(--secondary-color)', borderColor: 'var(--primary-color)'}}>
            {/* Mac-style Header */}
            <div className="px-4 py-3 border-b flex items-center justify-between" style={{backgroundColor: 'var(--secondary-color)', borderColor: 'var(--primary-color)'}}>
              <div className="flex items-center gap-2">
                <div className="flex gap-2">
                  <button 
                    onClick={handleCloseModal}
                    className="w-3 h-3 bg-red-400 rounded-full hover:bg-red-500 transition-colors"
                  />
                  <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                  <div className="w-3 h-3 bg-green-400 rounded-full" />
                </div>
                <span className="font-serif text-sm ml-4" style={{color: 'var(--primary-color)'}}>My Work & Projects</span>
              </div>
            </div>
            
            {/* Modal Content */}
            <div className="p-6 h-full overflow-y-auto custom-scrollbar">
              <div className="mb-6">
                <h2 className="text-2xl font-serif mb-2" style={{color: 'var(--primary-color)'}}>Featured Projects</h2>
                <p className="text-sm mb-4" style={{color: 'var(--primary-color)', opacity: 0.8}}>A collection of my recent work showcasing both code and no-code solutions</p>
                
                {/* Filter Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => setProjectFilter('code')}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      projectFilter === 'code'
                        ? ''
                        : 'border'
                    }`}
                    style={projectFilter === 'code' 
                      ? {backgroundColor: 'var(--primary-color)', color: 'var(--secondary-color)'} 
                      : {borderColor: 'var(--primary-color)', color: 'var(--primary-color)'}}
                  >
                    Code-Based
                  </button>
                  <button
                    onClick={() => setProjectFilter('nocode')}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      projectFilter === 'nocode'
                        ? ''
                        : 'border'
                    }`}
                    style={projectFilter === 'nocode' 
                      ? {backgroundColor: 'var(--primary-color)', color: 'var(--secondary-color)'} 
                      : {borderColor: 'var(--primary-color)', color: 'var(--primary-color)'}}
                  >
                    No-Code
                  </button>
                </div>
              </div>
              
              {/* Projects Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project, index) => (
                  <div 
                    key={project.id}
                    className="rounded-lg overflow-hidden shadow-lg border hover:shadow-xl transition-all duration-300 animate-fade-in-delay-1 cursor-pointer"
                    style={{backgroundColor: 'var(--primary-color)', borderColor: 'var(--secondary-color)', animationDelay: `${index * 0.1}s`}}
                    onClick={() => project.link && window.open(project.link, '_blank')}
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 pointer-events-none"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-serif text-lg mb-2" style={{color: 'var(--secondary-color)'}}>{project.title}</h3>
                      <p className="text-sm mb-3 leading-relaxed" style={{color: 'var(--secondary-color)', opacity: 0.8}}>{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className="px-2 py-1 rounded text-xs font-medium"
                            style={{backgroundColor: 'var(--secondary-color)', color: 'var(--primary-color)'}}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Additional Content */}
              <div className="mt-8 p-6 border rounded-lg" style={{backgroundColor: 'var(--primary-color)', borderColor: 'var(--secondary-color)'}}>
                <h3 className="font-serif text-xl mb-3" style={{color: 'var(--secondary-color)'}}>Let's Work Together</h3>
                <p className="mb-4" style={{color: 'var(--secondary-color)', opacity: 0.8}}>
                  Interested in collaborating on a project? I'd love to hear about your vision and how we can bring it to life with timeless design.
                </p>
                <button
                  onClick={() =>
                    window.open(
                      'https://mail.google.com/mail/?view=cm&fs=1&to=iamhashirhassan24@gmail.com',
                      '_blank'
                    )
                  }
                  className="px-6 py-2 rounded-full text-sm uppercase tracking-wider transition-all hover:opacity-80"
                  style={{ backgroundColor: 'var(--secondary-color)', color: 'var(--primary-color)' }}
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* About Me Modal */}
      {isAboutModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50" style={themeStyles}>
          {/* Backdrop */}
          <div 
            className={`absolute inset-0 backdrop-blur-sm transition-opacity duration-300 ${
              isAboutModalClosing ? 'opacity-0' : 'opacity-100 animate-fade-in'
            }`}
            onClick={handleCloseAboutModal}
          />
          
          {/* Modal Window */}
          <div className={`relative w-full max-w-4xl h-[80vh] bg-black rounded-xl shadow-2xl border border-vintage-cream overflow-hidden transition-all duration-300 ${
            isAboutModalClosing 
              ? 'animate-genie-minimize' 
              : 'animate-genie-appear'
          }`} style={{backgroundColor: 'var(--secondary-color)', borderColor: 'var(--primary-color)'}}>
            {/* Mac-style Header */}
            <div className="px-4 py-3 border-b flex items-center justify-between" style={{backgroundColor: 'var(--secondary-color)', borderColor: 'var(--primary-color)'}}>
              <div className="flex items-center gap-2">
                <div className="flex gap-2">
                  <button 
                    onClick={handleCloseAboutModal}
                    className="w-3 h-3 bg-red-400 rounded-full hover:bg-red-500 transition-colors"
                  />
                  <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                  <div className="w-3 h-3 bg-green-400 rounded-full" />
                </div>
                <span className="font-serif text-sm ml-4" style={{color: 'var(--primary-color)'}}>About Hashir Hassan</span>
              </div>
            </div>
            
            {/* Modal Content */}
            <div className="p-6 h-full overflow-y-auto custom-scrollbar">
              {/* Profile Header */}
              <div className="text-center mb-8">
                <div className="w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center border-2" style={{backgroundColor: 'var(--primary-color)', borderColor: 'var(--secondary-color)'}}>
                  <span className="text-4xl font-serif" style={{color: 'var(--secondary-color)'}}>MHH</span>
                </div>
                <h2 className="text-3xl font-serif mb-2" style={{color: 'var(--primary-color)'}}>Muhammad Hashir Hassan</h2>
                <p className="text-lg mb-4" style={{color: 'var(--primary-color)', opacity: 0.8}}>BSCS Student & Web Developer</p>
                <p className="max-w-2xl mx-auto leading-relaxed mb-4" style={{color: 'var(--primary-color)'}}>
                  Hi, I'm Muhammad Hashir Hassan, a BSCS student with a strong passion for designing engaging and functional web experiences. Over the past 2 years, I've been building and refining websites—both code-based and no-code—crafting everything from interactive landing pages to responsive user interfaces.
                </p>
                <p className="max-w-2xl mx-auto leading-relaxed" style={{color: 'var(--primary-color)'}}>
                  I specialize in merging clean aesthetics with intuitive design, whether it's through custom development or modern design tools. Whether you're looking for pixel-perfect front-end development or a sleek no-code solution, I bring both creativity and technical precision to the table.
                </p>
              </div>

              {/* Work Experience Section */}
              <div className="mb-8">
                <h3 className="text-xl font-serif mb-4" style={{color: 'var(--primary-color)'}}>Professional Experience</h3>
                <ul className="space-y-3 leading-relaxed" style={{color: 'var(--primary-color)'}}>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{backgroundColor: 'var(--primary-color)'}}></span>
                    Over the past 2 years, I've gained practical experience working on a variety of web design projects—ranging from freelance client work to personal and collaborative projects.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{backgroundColor: 'var(--primary-color)'}}></span>
                    Designed and developed landing pages, portfolios, product showcases, and interactive websites using both code and no-code tools.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{backgroundColor: 'var(--primary-color)'}}></span>
                    Experience includes working with HTML, CSS, JavaScript, React, as well as platforms like Webflow, Framer, and Figma.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{backgroundColor: 'var(--primary-color)'}}></span>
                    Built a strong foundation in responsive design, UI/UX principles, and real-world problem-solving for web development.
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0" style={{backgroundColor: 'var(--primary-color)'}}></span>
                    Constantly learning and evolving, always aiming to create digital experiences that are both beautiful and functional.
                  </li>
                </ul>
              </div>

              {/* Contact Section */}
              <div className="text-center p-6 border rounded-lg" style={{backgroundColor: 'var(--primary-color)', borderColor: 'var(--secondary-color)'}}>
                <h3 className="font-serif text-xl mb-3" style={{color: 'var(--secondary-color)'}}>Let's Connect</h3>
                <p className="mb-4" style={{color: 'var(--secondary-color)', opacity: 0.8}}>
                  Always excited to discuss design, vintage aesthetics, or potential collaborations.
                </p>
                <div className="flex justify-center items-center gap-4">
                 <button
  onClick={() =>
    window.open(
      'https://mail.google.com/mail/?view=cm&fs=1&to=iamhashirhassan24@gmail.com',
      '_blank'
    )
  }
  className="transition-colors hover:opacity-70"
  style={{ color: 'var(--secondary-color)' }}
>
  <Mail size={20} />
</button>

                  <a href="https://www.instagram.com/iamhashir_hassan/" target="_blank" rel="noopener noreferrer" className="transition-colors hover:opacity-70" style={{color: 'var(--secondary-color)'}}>
                    <Instagram size={24} />
                  </a>
                  <a href="https://github.com/hashir500" target="_blank" rel="noopener noreferrer" className="transition-colors hover:opacity-70" style={{color: 'var(--secondary-color)'}}>
                    <Github size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Theme Customization Modal */}
      {isThemeModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          {/* Backdrop */}
          <div 
            className={`absolute inset-0 backdrop-blur-sm transition-opacity duration-300 ${
              isThemeModalClosing ? 'opacity-0' : 'opacity-100 animate-fade-in'
            }`}
            onClick={handleCloseThemeModal}
          />
          
          {/* Modal Window */}
          <div className={`relative w-full max-w-2xl h-[70vh] bg-vintage-darkbrown rounded-xl shadow-2xl border border-vintage-cream overflow-hidden transition-all duration-300 ${
            isThemeModalClosing 
              ? 'animate-genie-minimize' 
              : 'animate-genie-appear'
          }`}>
            {/* Mac-style Header */}
            <div className="bg-vintage-darkbrown px-4 py-3 border-b border-vintage-cream flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex gap-2">
                  <button 
                    onClick={handleCloseThemeModal}
                    className="w-3 h-3 bg-red-400 rounded-full hover:bg-red-500 transition-colors"
                  />
                  <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                  <div className="w-3 h-3 bg-green-400 rounded-full" />
                </div>
                <span className="text-vintage-cream font-serif text-sm ml-4">Theme Customization</span>
              </div>
            </div>
            
            {/* Modal Content */}
            <div className="p-8 h-full overflow-y-auto custom-scrollbar">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-serif text-vintage-cream mb-2">Theme</h2>
                <p className="text-vintage-beige text-sm">Customize your portfolio colors</p>
              </div>
              
              {/* Color Customization */}
              <div className="space-y-8">
                {/* Primary Color Slider */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="text-vintage-cream font-medium text-lg">Primary Color</label>
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-8 h-8 rounded-full border-2 border-vintage-cream"
                        style={{ backgroundColor: primaryColor }}
                      />
                      <span className="text-vintage-beige text-sm font-mono">{primaryColor}</span>
                    </div>
                  </div>
                  <input
                    type="color"
                    value={primaryColor}
                    onChange={(e) => setPrimaryColor(e.target.value)}
                    className="w-full h-12 rounded-lg border-2 border-vintage-cream cursor-pointer"
                  />
                </div>

                {/* Secondary Color Slider */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <label className="text-vintage-cream font-medium text-lg">Secondary Color</label>
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-8 h-8 rounded-full border-2 border-vintage-cream"
                        style={{ backgroundColor: secondaryColor }}
                      />
                      <span className="text-vintage-beige text-sm font-mono">{secondaryColor}</span>
                    </div>
                  </div>
                  <input
                    type="color"
                    value={secondaryColor}
                    onChange={(e) => setSecondaryColor(e.target.value)}
                    className="w-full h-12 rounded-lg border-2 border-vintage-cream cursor-pointer"
                  />
                </div>

                {/* Color Preview */}
                <div className="bg-vintage-brown rounded-lg p-6 border border-vintage-cream">
                  <h3 className="text-vintage-cream font-serif text-lg mb-4">Color Preview</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div 
                        className="w-full h-16 rounded-lg border-2 border-vintage-cream mb-2"
                        style={{ backgroundColor: primaryColor }}
                      />
                      <span className="text-vintage-cream text-sm">Primary</span>
                    </div>
                    <div className="text-center">
                      <div 
                        className="w-full h-16 rounded-lg border-2 border-vintage-cream mb-2"
                        style={{ backgroundColor: secondaryColor }}
                      />
                      <span className="text-vintage-cream text-sm">Secondary</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <button 
                    onClick={() => {
                      setPrimaryColor('#d4c4a8'); // warm beige from image
                      setSecondaryColor('#4a5d3a'); // dark forest green from image
                    }}
                    className="flex-1 border border-vintage-cream text-vintage-cream hover:bg-vintage-cream hover:text-vintage-darkbrown px-6 py-3 rounded-full text-sm uppercase tracking-wider transition-all"
                  >
                    Reset to Default
                  </button>
                  <button 
                    onClick={handleCloseThemeModal}
                    className="flex-1 bg-vintage-cream text-vintage-darkbrown hover:bg-vintage-beige px-6 py-3 rounded-full text-sm uppercase tracking-wider transition-all"
                  >
                    Apply Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default Portfolio;