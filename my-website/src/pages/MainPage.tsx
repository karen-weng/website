import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import type { Project } from '../types/project';
import ProjectFilters from '../components/ProjectFilters';
import ProjectNavItem from '../components/ProjectNavItem';
import ProjectGridItem from '../components/ProjectGridItem';
import FlexibleProjectDetailView from '../components/FlexibleProjectDetailView';
import { MapWithPins } from "../components/MapPins";
import { BucketList } from "../components/BucketList";

// Import the projects data
const projects: Project[] = [
  {
    id: 'no-name',
    title: 'No Name Hackathon',
    year: 2025,
    previewImage: '/project-images/no-name/noname2.png',
    techStack: ['React', 'TypeScript', 'Node.js'],
    category: ['software'],
    links: [{ label: 'GitHub', url: 'https://github.com/JakobStrozberg/no-name-shopping-list' }],
    contentBlocks: [
      {
        type: 'text',
        content: 'During Toronto Tech Week for 2025 I attended a NoName/ Loblaws Hackathon hosted with OpenSesame. We were given a problem statement to create a product that incorporates 3 main components:\n\n1. Social\n2. Loyalty\n3. Rewards \n\nWe thought about how we make the users shopping experience social and based off what we would actually use. We designed a smart mobile shopping list that you can collaborate with your family or friends. First you login with your email and can create/ join a family with a code.',
        size: 'large'
      },
      {
        type: 'image',
        src: '/project-images/no-name/noname1.png',
        alt: 'App Screenshot',
        caption: 'Main shopping list interface - large size',
        imageSize: 'small',
        align: 'center'
      },
      {
        type: 'text',
        content: 'You can collaborate on a list where anyone can add items, comments, and likes on each other. When you add item it gives you options that are available at loblaws stores. You also get smart suggestions for other items you might want based on your current list powered by chatgpt. In addition that is an in app chat in.',
        size: 'large'
      },
      {
        type: 'imageGrid',
        images: [
          {
            src: '/project-images/no-name/noname2.png',
            alt: 'App Interface 2',
            caption: 'Shopping list view'
          },
          {
            src: '/project-images/no-name/noname3.png',
            alt: 'App Interface 3',
            caption: 'Item management'
          }
        ],
        gridColumns: 2,
        imageSize: 'medium',
        align: 'center'
      },
      {
        type: 'text',
        content: 'Together as a family you earn rewards towards actual prized at lob laws such as the kitchenware set. ',
        size: 'large'
      },
      {
        type: 'image',
        src: '/project-images/no-name/noname4.png',
        alt: 'App Screenshot',
        caption: 'Extra small example - between thumbnail and small',
        imageSize: 'small',
        align: 'center'
      },
      {
        type: 'text',
        content: 'Your shopping list, chat history, family members, and rewards are saving the firebase database and you are able to export the list to share with other people. '
      }
    ]
  },
  {
    id: 'formula-null',
    title: '3rd Place: Formula Null Hackathon',
    year: 2025,
    previewImage: '/project-images/formula-null/toaster_third.png',
    techStack: ['PCB Design', 'Embedded C', 'KiCad'],
    category: ['hardware'],
    links: [{ label: 'GitHub', url: 'https://github.com/WhosMadeer/ece295' }],
    contentBlocks: [
      {
        type: 'text',
        content: 'Hardware design project featuring advanced PCB design and embedded systems integration. Achieved third place in the competitive Formula Null Hackathon.',
        size: 'large'
      },
      {
        type: 'image',
        src: '/project-images/formula-null/toaster_third.png',
        alt: 'Final PCB Design',
        caption: 'Final PCB design with component placement',
        align: 'center'
      },
      {
        type: 'image',
        src: '/project-images/formula-null/toaster_lineup.webp',
        alt: 'PCB Layout',
        caption: 'Detailed PCB routing and traces',
        align: 'center'
      },
      {
        type: 'image',
        src: '/project-images/formula-null/trashmech_team.webp',
        alt: 'Team Photo',
        caption: 'Team collaboration and development process',
        align: 'center'
      },
      {
        type: 'text',
        content: 'Download: 📁 PCB Design Files.zip',
        size: 'small'
      }
    ]
  },
  {
    id: 'ECE295',
    title: 'Software Defined Radio Receiver',
    year: 2025,
    previewImage: '/project-images/ECE295/pcb.png',
    techStack: ['FPGA', 'Verilog', 'Signal Processing'],
    category: ['hardware', 'software'],
    links: [
      { label: 'GitHub', url: 'https://github.com/karen-weng/Pomodoro' },
      { label: 'Demo', url: 'https://www.youtube.com/watch?v=0ngW_dFM08A' }
    ],
    contentBlocks: [
      {
        type: 'text',
        content: 'Software Defined Radio implementation on FPGA hardware. Features custom signal processing pipeline and real-time demodulation capabilities.',
        size: 'large'
      },
      {
        type: 'divider',
        style: 'dots'
      },
      {
        type: 'image',
        src: '/project-images/ECE295/pcb.png',
        alt: 'SDR PCB',
        caption: 'Custom PCB design for radio frequency processing'
      },
      {
        type: 'heading',
        content: 'Technical Implementation'
      },
      {
        type: 'text',
        content: 'This project implements a complete software-defined radio system with custom FPGA-based signal processing, digital filters, and real-time demodulation algorithms.'
      },
      {
        type: 'quote',
        content: 'Software-defined radio bridges the gap between digital signal processing and RF communication.',
        size: 'large'
      }
    ]
  },
  {
    id: 'pomodoro',
    title: 'Pomodoro Timer',
    year: 2025,
    previewImage: '/project-images/pomodoro/pomodoro.png',
    techStack: ['FPGA', 'RISC-V', 'Verilog'],
    category: ['hardware', 'software'],
    links: [
      { label: 'GitHub', url: 'https://github.com/karen-weng/Pomodoro' },
      { label: 'Demo', url: 'https://www.youtube.com/watch?v=0ngW_dFM08A' }
    ],
    contentBlocks: [
      {
        type: 'text',
        content: 'An FPGA-based productivity timer implementing the Pomodoro Technique. Features custom RISC-V processor implementation and real-time task management.',
        size: 'large'
      },
      {
        type: 'divider',
        style: 'dots'
      },
      {
        type: 'image',
        src: '/project-images/pomodoro/pomodoro.png',
        alt: 'Pomodoro Timer',
        caption: 'Timer running on DE1-SoC board'
      },
      {
        type: 'heading',
        content: 'Technical Implementation'
      },
      {
        type: 'text',
        content: 'This project implements a complete embedded system with custom RISC-V processor core, timer peripherals, and real-time display management.'
      },
      {
        type: 'quote',
        content: 'The beauty of FPGA development is having complete control over every clock cycle.',
        size: 'large'
      }
    ]
  },
    {
    id: 'prime-pong',
    title: '3rd Place: Prime Pong - MakeUofT Hackathon',
    year: 2025,
    previewImage: '/project-images/prime-pong/primepongpaddle.png',
    techStack: ['ESP32', 'C++', 'MPU6050'],
    category: ['hardware', 'software'],
    links: [
    { label: 'Devpost', url: 'https://devpost.com/software/primepong' },
      { label: 'GitHub', url: 'https://github.com/karen-weng/prime-pong' }
    ],
    contentBlocks: [
      {
        type: 'text',
        content: 'An innovative motion-controlled Pong game that won third place at MakeUofT. Uses ESP32 microcontroller and MPU6050 accelerometer for intuitive paddle control.',
        size: 'large'
      },
      {
        type: 'image',
        src: '/project-images/prime-pong/primepongpaddle.png',
        alt: 'Motion-controlled paddle',
        caption: 'Custom paddle with embedded ESP32 and accelerometer',
        align: 'center'
      },
      {
        type: 'text',
        content: 'The game uses real-time motion sensing to control paddles, creating an immersive gaming experience that bridges physical movement with digital gameplay.'
      },
      {
        type: 'text',
        content: 'Download: 📁 Source Code.zip',
        size: 'small'
      }
    ]
  },
  {
    id: 'snake',
    title: 'Snake Game',
    year: 2024,
    previewImage: '/project-images/snake/snake.png',
    techStack: ['Verilog', 'FPGA', 'VGA'],
    category: ['hardware'],
    links: [
      { label: 'GitHub', url: 'https://github.com/karen-weng/Snake-Game' },
      { label: 'Demo', url: 'https://youtu.be/aTkcDn0pBpA' }
    ],
    contentBlocks: [
      {
        type: 'text',
        content: 'Classic Snake game implementation on DE1-SoC FPGA board. Features VGA output, PS/2 keyboard input, and custom graphics pipeline written entirely in Verilog.',
        size: 'large'
      },
      {
        type: 'image',
        src: '/project-images/snake/snake.png',
        alt: 'Snake Game Gameplay',
        caption: 'Snake game running on VGA display',
        align: 'center'
      },
      {
        type: 'image',
        src: '/project-images/snake/snake_block.png',
        alt: 'Snake Game Architecture',
        caption: 'Hardware block diagram and system architecture',
        align: 'center'
      },
      {
        type: 'text',
        content: 'Built from scratch using pure Verilog HDL with custom VGA controller and PS/2 keyboard interface for real-time gameplay.'
      },
      {
        type: 'text',
        content: 'Download: 📁 Verilog HDL.zip',
        size: 'small'
      }
    ]
  },
  {
    id: 'APS360',
    title: 'Atlantic Hurricane Path Prediction',
    year: 2024,
    previewImage: '/project-images/APS360/Debby.png',
    techStack: ['Python', 'PyTorch', 'LSTM'],
    category: ['software'],
    links: [
      { label: 'GitHub', url: 'https://github.com/sovdeeth/asp-360-group-56' },
      { label: 'Demo', url: 'https://youtu.be/gwGoUBYasao' }
    ],
    contentBlocks: [
      {
        type: 'text',
        content: 'Machine learning project for predicting Atlantic hurricane paths using LSTM neural networks. Trained on HURSAT satellite dataset with custom preprocessing pipeline.',
        size: 'large'
      },
      {
        type: 'image',
        src: '/project-images/APS360/Debby.png',
        alt: 'Hurricane Debby Path Prediction',
        caption: 'Predicted vs actual path for Hurricane Debby',
        align: 'center'
      },
      {
        type: 'image',
        src: '/project-images/APS360/Ernesto.png',
        alt: 'Hurricane Ernesto Path Prediction',
        caption: 'Predicted vs actual path for Hurricane Ernesto',
        align: 'center'
      },
      {
        type: 'text',
        content: 'Deep learning approach to hurricane trajectory forecasting using historical satellite data and temporal sequence modeling.'
      },
      {
        type: 'text',
        content: 'Downloads: 📁 Research Paper.pdf | 📁 Dataset Analysis.ipynb',
        size: 'small'
      }
    ]
  }
];

const MainPage = () => {
  // URL routing hooks
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  
  // State management
  const [showHardware, setShowHardware] = useState(true);
  const [showSoftware, setShowSoftware] = useState(true);

  // Data processing
  const sortedProjects = [...projects].sort((a, b) => b.year - a.year);
  
  // Find selected project based on URL parameter
  const selectedProject = projectId ? projects.find(p => p.id === projectId) || null : null;
  
  // Filtering logic: Show project if ANY of its categories match enabled filters
  const filteredProjects = sortedProjects.filter(project => {
    const hasHardware = project.category.includes('hardware');
    const hasSoftware = project.category.includes('software');
    
    const showForHardware = hasHardware && showHardware;
    const showForSoftware = hasSoftware && showSoftware;
    
    return showForHardware || showForSoftware;
  });

  // Navigation functions
  const handleProjectSelect = (project: Project) => {
    navigate(`/projects/${project.id}`);
  };

  const handleBackToGrid = () => {
    navigate('/');
    // Scroll to projects section after navigation
    setTimeout(() => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // Scroll to section function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Projects Section */}
      <section id="projects" style={{ minHeight: '100vh', padding: '1rem', position: 'relative' }}>
        <div style={{ display: 'flex', minHeight: '100vh' }}>
          {/* Left Sidebar */}
          <div style={{ 
            width: '300px', 
            borderRight: '1px solid #e0e0e0', 
            paddingRight: '1rem',
            overflowY: 'auto', maxHeight: '100vh', position: 'sticky', top: '0'
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
                onClick={() => handleProjectSelect(project)}
              />
            ))}
          </div>

          {/* Right Content Area */}
          <div style={{ flex: 1, paddingLeft: '2rem', overflowY: 'auto', maxHeight: '100vh' }}>
            {selectedProject ? (
              // Using the new FlexibleProjectDetailView
              <FlexibleProjectDetailView
                project={selectedProject}
                onBack={handleBackToGrid}
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
                      onClick={() => handleProjectSelect(project)}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        
      </section>

      {/* Section Divider */}
      <div style={{
        height: '4px',
        background: 'linear-gradient(90deg, transparent, #e0e0e0, transparent)',
        margin: '0'
      }}></div>

      {/* Personal Section */}
      <section id="personal" style={{ minHeight: '100vh', padding: '2rem', backgroundColor: '#f8f9fa' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ textAlign: 'center', marginBottom: '2rem', color: '#333' }}>Personal Section</h1>
          <MapWithPins />
          <BucketList />
        </div>
      </section>

      {/* Section Divider */}
      <div style={{
        height: '4px',
        background: 'linear-gradient(90deg, transparent, #e0e0e0, transparent)',
        margin: '0'
      }}></div>

      {/* Contact Section */}
      <section id="contact" style={{ minHeight: '100vh', padding: '4rem 2rem', backgroundColor: '#f5f5f5' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#222' }}>Let's Connect!</h2>
          <p style={{ fontSize: '1rem', color: '#555', marginBottom: '2rem' }}>
            Feel free to reach out for collaborations, project discussions, or just to say hi!
          </p>
          <div>
            <a 
              href="mailto:karen.wengxt@gmail.com" 
              style={linkButtonStyle}>
              Email Me
            </a>
            <a 
              href="https://www.linkedin.com/in/karen-weng-402bab295/" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={linkButtonStyle}>
              LinkedIn
            </a>
            <a 
              href="https://github.com/karen-weng" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={linkButtonStyle}>
              GitHub
            </a>
            <a 
              href="/Karen_Weng_Resume.pdf"
              target="_blank" 
              rel="noopener noreferrer" 
              style={linkButtonStyle}
              download="Karen_Weng_Resume.pdf"
              >
              Download Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

const linkButtonStyle = {
  display: 'inline-block',
  margin: '8px',
  padding: '12px 24px',
  backgroundColor: '#333',
  color: '#fff',
  borderRadius: '8px',
  textDecoration: 'none',
  cursor: 'pointer',
  transition: 'transform 0.2s ease, background-color 0.3s ease',
  fontSize: '1rem'
};

export default MainPage; 