import React from 'react';
import { useState } from 'react';
import { Github, Instagram, Mail, Sun, Moon, Terminal, Code, Database, Globe } from 'lucide-react';

interface DeveloperThemeProps {
  onToggleMode: () => void;
}

const DeveloperTheme: React.FC<DeveloperThemeProps> = ({ onToggleMode }) => {
  const [activeTab, setActiveTab] = useState('about');
  const [activeDesktopSection, setActiveDesktopSection] = useState('terminal');
  const [isTyping, setIsTyping] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState([
    '$ whoami',
    'hashir-hassan',
    '$ cat about.txt',
    'BSCS Student & Full-Stack Developer',
    'Specializing in modern web technologies and vintage design aesthetics',
    '$ ls skills/',
    'frontend/  backend/  design/  tools/',
    '$ _'
  ]);

 const projects = [
  {
    id: 1,
    name: "f1-website-redesign",
    description: "Modern Formula 1 website with 3D models",
    tech: ["React", "TypeScript", "Spline", "Three.js"],
    status: "deployed",
    url: "https://formula1-webpage.vercel.app/"
  },
  {
    id: 2,
    name: "jarvis-io",
    description: "Futuristic AI interface with interactive elements",
    tech: ["React", "Spline", "CSS3", "JavaScript"],
    status: "deployed",
    url: "https://jarvisio-webpage.vercel.app/"
  },
  {
    id: 3,
    name: "vintage-portfolio",
    description: "Clean vintage-style portfolio website",
    tech: ["React", "TypeScript", "Tailwind"],
    status: "deployed",
    url: "https://hashir500.github.io/Base-Portfolio/"
  },
  {
    id: 4,
    name: "chatgpt-redesign",
    description: "Modern ChatGPT interface redesign",
    tech: ["Framer", "Rive", "3D Models"],
    status: "deployed",
    url: "https://chatgpt-redesign.framer.website/"
  },
  {
    id: 5,
    name: "nothing-website-redesign",
    description: "Sleek redesign of Nothing's website using minimalist UI principles",
    tech: ["Framer", "No Code", "Minimalist Design", "UI/UX"],
    status: "deployed",
    url: "https://nothing-redesign.framer.website/"
  },
  {
    id: 6,
    name: "arborlink-client-website",
    description: "Client website built using Wix with a clean and minimal UX/UI focus",
    tech: ["Wix", "No Code", "UI/UX", "Minimalist"],
    status: "deployed",
    url: "http://arborlinkapp.com"
  },
  {
    id: 7,
    name: "nothing-website-clone",
    description: "Clone of Nothing's official website using React and minimalist design",
    tech: ["No Code", "React", "UI/UX", "Minimalist"],
    status: "deployed",
    url: "https://nothing-website-clone.vercel.app/"
  },
  {
    id: 8,
    name: "finance-blogging-site",
    description: "Responsive finance-focused blogging website built using modern web technologies",
    tech: ["HTML", "CSS", "Astro", "React"],
    status: "deployed",
    url: "https://hashir-hassan-portfolio.vercel.app/"
  }
];




  const skills = {
    frontend: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Next.js"],
    tools: ["Git", "Docker", "Figma", "VS Code", "Webpack", "Vite"],
    design: ["UI/UX", "Responsive Design", "Prototyping", "3D Design", "Motion Graphics"]
  };

  const executeCommand = (command: string) => {
    setIsTyping(true);
    setTimeout(() => {
      const newOutput = [...terminalOutput];
      newOutput.push(`$ ${command}`);
      
      switch (command.toLowerCase()) {
        case 'help':
          newOutput.push('Available commands:', 'about, skills, projects, contact, clear');
          break;
        case 'about':
          newOutput.push('Muhammad Hashir Hassan', 'BSCS Student & Web Developer', 'Passionate about creating digital experiences');
          break;
        case 'skills':
          newOutput.push('Technical Skills:', '- Frontend: React, TypeScript, JavaScript', '- Backend: Node.js, Express', '- Design: UI/UX, Figma, 3D Design');
          break;
        case 'projects':
          newOutput.push('Recent Projects:', '1. F1 Website Redesign', '2. Jarvis.io Interface', '3. Vintage Portfolio', '4. ChatGPT Redesign');
          break;
        case 'contact':
          newOutput.push('Contact Information:', 'Email: hashirhassan2424@gmail.com', 'GitHub: github.com/hashir500', 'Instagram: @iamhashir_hassan');
          break;
        case 'clear':
          setTerminalOutput(['$ _']);
          setIsTyping(false);
          return;
        default:
          newOutput.push(`Command not found: ${command}`, 'Type "help" for available commands');
      }
      
      newOutput.push('$ _');
      setTerminalOutput(newOutput);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="h-screen bg-gray-900 text-green-400 p-4 flex flex-col overflow-hidden font-mono">
      {/* Terminal Header */}
      <header className="pb-4 flex-shrink-0">
        <nav className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Terminal size={20} className="text-green-400" />
            <span className="text-lg text-green-400">hashir@portfolio:~$</span>
          </div>
          
          <div className="flex items-center gap-3">
            {/* Designer Toggle Button */}
            <button
              onClick={onToggleMode}
              className="px-3 py-1 bg-green-500 text-black text-xs uppercase tracking-wider transition-all duration-300 hover:bg-green-400"
              aria-label="Switch to designer mode"
            >
              Designer
            </button>
            
            {/* Terminal Controls */}
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full" />
              <div className="w-3 h-3 bg-yellow-500 rounded-full" />
              <div className="w-3 h-3 bg-green-500 rounded-full" />
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 h-full">
          {/* Desktop Filter Buttons */}
          <div className="col-span-3 flex gap-2 mb-4">
            {['terminal', 'projects', 'skills', 'about', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveDesktopSection(section)}
                className={`px-3 py-1 text-xs uppercase tracking-wider transition-all ${
                  activeDesktopSection === section
                    ? 'bg-green-500 text-black'
                    : 'text-green-400 hover:bg-gray-800'
                }`}
              >
                {section}
              </button>
            ))}
          </div>

          {/* Desktop Content Sections */}
          {activeDesktopSection === 'terminal' && (
            <div className="col-span-3 grid grid-cols-3 gap-8 h-full">
              {/* Terminal Window */}
              <div className="overflow-hidden">
                <div className="flex items-center gap-2 mb-4 text-green-400">
                  <Terminal size={16} />
                  <span className="text-sm">Terminal</span>
                </div>
                <div className="h-64 overflow-y-auto space-y-1 text-sm custom-scrollbar mb-4">
                  {terminalOutput.map((line, index) => (
                    <div key={index} className={line.startsWith('$') ? 'text-green-400' : 'text-gray-300'}>
                      {line}
                    </div>
                  ))}
                  {isTyping && <div className="text-yellow-400">Processing...</div>}
                </div>
                <div className="pt-2 border-t border-gray-700">
                  <input
                    type="text"
                    placeholder="Type a command..."
                    className="w-full bg-transparent text-green-400 outline-none border-b border-green-400 pb-1"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        executeCommand(e.currentTarget.value);
                        e.currentTarget.value = '';
                      }
                    }}
                  />
                </div>
              </div>

              {/* Code Editor Window */}
              <div className="overflow-hidden">
                <div className="flex items-center gap-2 mb-4 text-green-400">
                  <Code size={16} />
                  <span className="text-sm">portfolio.js</span>
                </div>
                <div className="text-xs space-y-1 overflow-y-auto h-72 custom-scrollbar">
                  <div className="text-purple-400">const</div>
                  <div className="text-blue-400 ml-2">developer = {`{`}</div>
                  <div className="text-gray-300 ml-4">name: <span className="text-yellow-400">"Hashir Hassan"</span>,</div>
                  <div className="text-gray-300 ml-4">role: <span className="text-yellow-400">"Full-Stack Developer"</span>,</div>
                  <div className="text-gray-300 ml-4">skills: [</div>
                  <div className="text-yellow-400 ml-6">"React", "TypeScript", "Node.js"</div>
                  <div className="text-gray-300 ml-4">],</div>
                  <div className="text-gray-300 ml-4">passion: <span className="text-yellow-400">"Creating digital experiences"</span></div>
                  <div className="text-blue-400 ml-2">{`}`};</div>
                  <div className="mt-4 text-purple-400">export default</div>
                  <div className="text-blue-400 ml-2">developer;</div>
                </div>
              </div>

              {/* System Info */}
              <div className="overflow-hidden">
                <div className="flex items-center gap-2 mb-4 text-green-400">
                  <Database size={16} />
                  <span className="text-sm">system.info</span>
                </div>
                <div className="space-y-3 text-sm h-72 overflow-y-auto custom-scrollbar">
                  <div>
                    <div className="text-green-400">OS:</div>
                    <div className="text-gray-300 ml-2">Ubuntu 22.04 LTS</div>
                  </div>
                  <div>
                    <div className="text-green-400">Shell:</div>
                    <div className="text-gray-300 ml-2">zsh 5.8.1</div>
                  </div>
                  <div>
                    <div className="text-green-400">Editor:</div>
                    <div className="text-gray-300 ml-2">VS Code</div>
                  </div>
                  <div>
                    <div className="text-green-400">Runtime:</div>
                    <div className="text-gray-300 ml-2">Node.js v18.17.0</div>
                  </div>
                  <div>
                    <div className="text-green-400">Package Manager:</div>
                    <div className="text-gray-300 ml-2">npm 9.6.7</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeDesktopSection === 'projects' && (
            <div className="col-span-3 h-full overflow-y-auto custom-scrollbar">
              <div className="flex items-center gap-2 mb-6 text-green-400">
                <Globe size={16} />
                <span className="text-sm">~/projects</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                  <div key={project.id} className="hover:bg-gray-800 p-4 transition-colors cursor-pointer"
                       onClick={() => project.url && window.open(project.url, '_blank')}>
                    <div className="flex items-center gap-2 mb-3">
                      <div className={`w-2 h-2 rounded-full ${project.status === 'deployed' ? 'bg-green-500' : 'bg-yellow-500'}`} />
                      <span className="text-green-400 text-lg font-semibold">{project.name}</span>
                    </div>
                    <p className="text-gray-300 text-sm mb-3 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, index) => (
                        <span key={index} className="text-xs text-green-300 px-2 py-1">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeDesktopSection === 'skills' && (
            <div className="col-span-3 h-full overflow-y-auto custom-scrollbar">
              <div className="flex items-center gap-2 mb-6 text-green-400">
                <Code size={16} />
                <span className="text-sm">~/skills</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category}>
                    <h3 className="text-green-400 text-lg font-semibold mb-4 capitalize">{category}</h3>
                    <div className="space-y-2">
                      {skillList.map((skill, index) => (
                        <div key={index} className="text-gray-300 text-sm">
                          <span className="text-green-400">→</span> {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeDesktopSection === 'about' && (
            <div className="col-span-3 h-full overflow-y-auto custom-scrollbar">
              <div className="flex items-center gap-2 mb-6 text-green-400">
                <Terminal size={16} />
                <span className="text-sm">~/about</span>
              </div>
              <div className="space-y-6 text-gray-300">
                <div>
                  <h3 className="text-green-400 text-xl font-semibold mb-3">Muhammad Hashir Hassan</h3>
                  <p className="text-sm leading-relaxed mb-4">
                    Hi, I'm Muhammad Hashir Hassan, a BSCS student with a strong passion for designing engaging and functional web experiences. Over the past 2 years, I've been building and refining websites—both code-based and no-code—crafting everything from interactive landing pages to responsive user interfaces.
                  </p>
                  <p className="text-sm leading-relaxed">
                    I specialize in merging clean aesthetics with intuitive design, whether it's through custom development or modern design tools. Whether you're looking for pixel-perfect front-end development or a sleek no-code solution, I bring both creativity and technical precision to the table.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-green-400 text-lg font-semibold mb-3">Professional Experience</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start">
                      <span className="text-green-400 mr-2">→</span>
                      <span>Over the past 2 years, I've gained practical experience working on a variety of web design projects—ranging from freelance client work to personal and collaborative projects.</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-400 mr-2">→</span>
                      <span>Designed and developed landing pages, portfolios, product showcases, and interactive websites using both code and no-code tools.</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-400 mr-2">→</span>
                      <span>Experience includes working with HTML, CSS, JavaScript, React, as well as platforms like Webflow, Framer, and Figma.</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-400 mr-2">→</span>
                      <span>Built a strong foundation in responsive design, UI/UX principles, and real-world problem-solving for web development.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeDesktopSection === 'contact' && (
            <div className="col-span-3 h-full overflow-y-auto custom-scrollbar">
              <div className="flex items-center gap-2 mb-6 text-green-400">
                <Mail size={16} />
                <span className="text-sm">~/contact</span>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-green-400 text-xl font-semibold mb-4">Let's Connect</h3>
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    Always excited to discuss design, vintage aesthetics, or potential collaborations.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail size={18} className="text-green-400" />
                    <a href="mailto:hashirhassan2424@gmail.com" className="text-gray-300 hover:text-green-400 transition-colors">
                      hashirhassan2424@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Github size={18} className="text-green-400" />
                    <a href="https://github.com/hashir500" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-400 transition-colors">
                      github.com/hashir500
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Instagram size={18} className="text-green-400" />
                    <a href="https://www.instagram.com/iamhashir_hassan/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-400 transition-colors">
                      @iamhashir_hassan
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-4 h-full overflow-y-auto">
          {/* Tab Navigation */}
          <div className="flex gap-2 mb-4">
            {['terminal', 'projects', 'skills'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1 text-xs uppercase tracking-wider transition-all ${
                  activeTab === tab
                    ? 'bg-green-500 text-black'
                    : 'text-green-400'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === 'terminal' && (
            <div className="overflow-hidden">
              <div className="flex items-center gap-2 mb-4 text-green-400">
                <Terminal size={16} />
                <span className="text-sm">Terminal</span>
              </div>
              <div className="space-y-1 text-sm mb-4 max-h-32 overflow-y-auto custom-scrollbar">
                {terminalOutput.slice(-10).map((line, index) => (
                  <div key={index} className={line.startsWith('$') ? 'text-green-400' : 'text-gray-300'}>
                    {line}
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-700 pt-2">
                <input
                  type="text"
                  placeholder="Type a command..."
                  className="w-full bg-transparent text-green-400 outline-none border-b border-green-400 pb-1"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      executeCommand(e.currentTarget.value);
                      e.currentTarget.value = '';
                    }
                  }}
                />
              </div>
            </div>
          )}

          {activeTab === 'projects' && (
            <div className="space-y-3">
              {projects.map((project) => (
                <div key={project.id} className="hover:bg-gray-800 p-3 transition-colors cursor-pointer"
                     onClick={() => project.url && window.open(project.url, '_blank')}>
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-2 h-2 rounded-full ${project.status === 'deployed' ? 'bg-green-500' : 'bg-yellow-500'}`} />
                    <span className="text-green-400 text-sm font-semibold">{project.name}</span>
                  </div>
                  <p className="text-gray-300 text-xs mb-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech, index) => (
                      <span key={index} className="text-xs text-green-300 px-1">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="space-y-4">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className="p-3">
                  <h3 className="text-green-400 text-sm font-semibold mb-2 capitalize">{category}</h3>
                  <div className="flex flex-wrap gap-1">
                    {skillList.map((skill, index) => (
                      <span key={index} className="text-xs text-green-300 px-2 py-1">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Contact Section */}
          <div className="p-4">
            <h3 className="text-green-400 text-sm font-semibold mb-3">Contact</h3>
            <div className="flex gap-4">
              <a href="mailto:hashirhassan2424@gmail.com" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition-colors">
                <Mail size={20} />
              </a>
              <a href="https://www.instagram.com/iamhashir_hassan/" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://github.com/hashir500" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperTheme;