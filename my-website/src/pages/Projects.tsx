import { useState } from 'react';
import type { Project } from '../types/project';
import ProjectFilters from '../components/ProjectFilters';
import ProjectNavItem from '../components/ProjectNavItem';
import ProjectGridItem from '../components/ProjectGridItem';
import ProjectDetailView from '../components/ProjectDetailView';

const projects: Project[] = [
  {
    id: 'no-name-hackathon',
    title: 'No Name Hackathon',
    year: 2024,
    description: '295 project',
    detailedDescription: 'A comprehensive shopping list application developed during the No Name Hackathon. This project showcases modern web development practices and user-centric design.',
    techStack: ['React', 'Node.js', 'MongoDB'],
    category: ['software'],
    links: [{ label: 'GitHub', url: 'https://github.com/JakobStrozberg/no-name-shopping-list' }],
    images: ['/project-images/noname2.png'],
    files: [{ name: 'Project Report.pdf', url: '/project-files/noname-report.pdf' }]
  },
  {
    id: 'formula-null',
    title: 'Third Place: Formula Null Hackathon',
    year: 2024,
    description: '295 project',
    detailedDescription: 'Hardware design project featuring advanced PCB design and embedded systems integration. Achieved third place in the competitive Formula Null Hackathon.',
    techStack: ['Altium', 'C++', 'Embedded Systems'],
    category: ['hardware'],
    links: [{ label: 'GitHub', url: 'https://github.com/WhosMadeer/ece295' }],
    images: ['/project-images/toaster_third.png'],
    files: [{ name: 'PCB Design Files.zip', url: '/project-files/formula-null-pcb.zip' }]
  },
  {
    id: 'pomodoro-timer',
    title: 'Pomodoro Timer',
    year: 2024,
    description: 'A productivity timer built on FPGA.',
    detailedDescription: 'An FPGA-based productivity timer implementing the Pomodoro Technique. Features custom RISC-V processor implementation and real-time task management.',
    techStack: ['RISC-V', 'DE1-SoC', 'GDB', 'PowerShell', 'Verilog'],
    category: ['hardware', 'software'],
    links: [
      { label: 'GitHub', url: 'https://github.com/karen-weng/Pomodoro' },
      { label: 'Demo', url: 'https://www.youtube.com/watch?v=0ngW_dFM08A' }
    ],
    images: ['/project-images/pomodoro.png'],
    files: [
      { name: 'Verilog Source.zip', url: '/project-files/pomodoro-verilog.zip' },
      { name: 'Demo Video.mp4', url: '/project-files/pomodoro-demo.mp4' }
    ]
  },
  {
    id: 'prime-pong',
    title: 'Third Place: Prime Pong - MakeUofT Hackathon',
    year: 2024,
    description: 'Motion-controlled Pong game using ESP32.',
    detailedDescription: 'An innovative motion-controlled Pong game that won third place at MakeUofT. Uses ESP32 microcontroller and MPU6050 accelerometer for intuitive paddle control.',
    techStack: ['ESP32', 'MPU6050', 'C++', 'Arduino IDE'],
    category: ['hardware', 'software'],
    links: [
      { label: 'Devpost', url: 'https://devpost.com/software/primepong' },
      { label: 'GitHub', url: 'https://github.com/karen-weng/prime-pong' }
    ],
    images: ['/project-images/primepongpaddle.png'],
    files: [{ name: 'Source Code.zip', url: '/project-files/prime-pong-source.zip' }]
  },
  {
    id: 'snake-game',
    title: 'Snake Game',
    year: 2023,
    description: 'DE1-SoC FPGA project using Verilog',
    detailedDescription: 'Classic Snake game implementation on DE1-SoC FPGA board. Features VGA output, PS/2 keyboard input, and custom graphics pipeline written entirely in Verilog.',
    techStack: ['Verilog', 'DE1-SoC', 'VGA', 'PS/2'],
    category: ['hardware'],
    links: [
      { label: 'GitHub', url: 'https://github.com/karen-weng/Snake-Game' },
      { label: 'Demo', url: 'https://youtu.be/aTkcDn0pBpA' }
    ],
    images: ['/project-images/snake.png'],
    files: [{ name: 'Verilog HDL.zip', url: '/project-files/snake-verilog.zip' }]
  },
  {
    id: 'hurricane-prediction',
    title: 'Atlantic Hurricane Path Prediction',
    year: 2023,
    description: 'LSTM network using HURSAT dataset',
    detailedDescription: 'Machine learning project for predicting Atlantic hurricane paths using LSTM neural networks. Trained on HURSAT satellite dataset with custom preprocessing pipeline.',
    techStack: ['Python', 'TensorFlow', 'LSTM', 'HURSAT', 'Jupyter'],
    category: ['software'],
    links: [
      { label: 'GitHub', url: 'https://github.com/sovdeeth/asp-360-group-56' },
      { label: 'Demo', url: 'https://youtu.be/gwGoUBYasao' }
    ],
    images: ['/project-images/Debby.png'],
    files: [
      { name: 'Research Paper.pdf', url: '/project-files/hurricane-paper.pdf' },
      { name: 'Dataset Analysis.ipynb', url: '/project-files/hurricane-analysis.ipynb' }
    ]
  }
];

const Projects = () => {
  // State management
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showHardware, setShowHardware] = useState(true);
  const [showSoftware, setShowSoftware] = useState(true);

  // Data processing
  const sortedProjects = [...projects].sort((a, b) => b.year - a.year);
  
  // Filtering logic: Show project if ANY of its categories match enabled filters
  const filteredProjects = sortedProjects.filter(project => {
    const hasHardware = project.category.includes('hardware');
    const hasSoftware = project.category.includes('software');
    
    const showForHardware = hasHardware && showHardware;
    const showForSoftware = hasSoftware && showSoftware;
    
    return showForHardware || showForSoftware;
  });

  return (
    <div style={{ display: 'flex', height: '100vh', padding: '1rem' }}>
      {/* Left Sidebar */}
      <div style={{ 
        width: '300px', 
        borderRight: '1px solid #e0e0e0', 
        paddingRight: '1rem',
        overflowY: 'auto'
      }}>
        {/* Filter Controls */}
        <ProjectFilters
          showHardware={showHardware}
          showSoftware={showSoftware}
          onToggleHardware={() => setShowHardware(!showHardware)}
          onToggleSoftware={() => setShowSoftware(!showSoftware)}
        />

        {/* Projects Navigation List */}
        <h2 style={{ marginBottom: '1rem', color: '#333' }}>Projects</h2>
        {filteredProjects.map(project => (
          <ProjectNavItem
            key={project.id}
            project={project}
            isSelected={selectedProject?.id === project.id}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {/* Right Content Area */}
      <div style={{ flex: 1, paddingLeft: '2rem' }}>
        {selectedProject ? (
          // Detailed Project View
          <ProjectDetailView
            project={selectedProject}
            onBack={() => setSelectedProject(null)}
          />
        ) : (
          // Grid View
          <div>
            <h1 style={{ marginBottom: '2rem', textAlign: 'center' }}>My Projects</h1>
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
              gap: '1.5rem' 
            }}>
              {filteredProjects.map(project => (
                <ProjectGridItem
                  key={project.id}
                  project={project}
                  onClick={() => setSelectedProject(project)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
