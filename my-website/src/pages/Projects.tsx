import { useState } from 'react';
import type { Project } from '../types/project';
import ProjectFilters from '../components/ProjectFilters';
import ProjectNavItem from '../components/ProjectNavItem';
import ProjectGridItem from '../components/ProjectGridItem';
import FlexibleProjectDetailView from '../components/FlexibleProjectDetailView';

/**
 * Main Projects Page Component
 * 
 * Purpose: Orchestrates the entire projects interface
 * 
 * Architecture:
 * - Left sidebar: Filter buttons + project navigation list
 * - Right area: Grid view (default) or detailed project view
 * - State management for filtering and project selection
 * - Modular design using separate components for each UI piece
 * 
 * Implementation Details:
 * - Uses OR filtering logic (projects shown if ANY tag matches enabled filters)
 * - Reverse chronological sorting (newest first)
 * - Clean component composition with clear separation of concerns
 * - Enhanced project data with custom layouts and multiple images
 */

const projects: Project[] = [
  {
    id: 'no-name',
    title: 'No Name Hackathon',
    year: 2024,
    previewImage: '/project-images/no-name/noname2.png',
    previewDescription: 'A comprehensive shopping list application developed during the No Name Hackathon. This project showcases modern web development practices and user-centric design.',
    category: ['software'],
    links: [{ label: 'GitHub', url: 'https://github.com/JakobStrozberg/no-name-shopping-list' }],
    contentBlocks: [
      {
        type: 'text',
        content: 'A comprehensive shopping list application developed during the No Name Hackathon. This project showcases modern web development practices and user-centric design.',
        size: 'large'
      },
      {
        type: 'image',
        src: '/project-images/no-name/noname1.png',
        alt: 'App Screenshot',
        caption: 'Main shopping list interface'
      },
      {
        type: 'image',
        src: '/project-images/no-name/noname2.png',
        alt: 'App Screenshot',
        caption: 'Main shopping list interface'
      },
      {
        type: 'image',
        src: '/project-images/no-name/noname3.png',
        alt: 'App Screenshot',
        caption: 'Main shopping list interface'
      },
      {
        type: 'image',
        src: '/project-images/no-name/noname4.png',
        alt: 'App Screenshot',
        caption: 'Main shopping list interface'
      },
      {
        type: 'heading',
        content: 'Key Features',
        size: 'medium'
      },
      {
        type: 'text',
        content: '• Real-time collaborative shopping lists\n• Smart categorization of items\n• Cross-platform compatibility\n• Intuitive drag-and-drop interface'
      }
    ]
  },
  {
    id: 'formula-null',
    title: 'Third Place: Formula Null Hackathon',
    year: 2024,
    previewImage: '/project-images/formula-null/toaster_third.png',
    previewDescription: 'Hardware design project featuring advanced PCB design and embedded systems integration. Achieved third place in the competitive Formula Null Hackathon.',
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
        content: { 
          src: '/project-images/formula-null/toaster_third.png', 
          alt: 'Final PCB Design',
          caption: 'Final PCB design with component placement'
        },
        align: 'center'
      },
      {
        type: 'image',
        content: { 
          src: '/project-images/formula-null/toaster_lineup.webp', 
          alt: 'PCB Layout',
          caption: 'Detailed PCB routing and traces'
        },
        align: 'center'
      },
      {
        type: 'image',
        content: { 
          src: '/project-images/formula-null/trashmech_team.webp', 
          alt: 'PCB Layout',
          caption: 'Detailed PCB routing and traces'
        },
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
    id: 'pomodoro',
    title: 'Pomodoro Timer',
    year: 2024,
    previewImage: '/project-images/pomodoro/pomodoro.png',
    previewDescription: 'A productivity timer built on FPGA.',
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
        content: { 
          src: '/project-images/pomodoro/pomodoro.png', 
          alt: 'Pomodoro Timer',
          caption: 'Timer running on DE1-SoC board'
        }
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
        type: 'code',
        content: `// Main timer state machine in Verilog
always @(posedge clk) begin
    if (reset) begin
        timer_state <= IDLE;
        minutes <= 8'd25;  // Default 25 minutes
        seconds <= 8'd0;
    end else begin
        case (timer_state)
            IDLE: if (start_btn) timer_state <= RUNNING;
            RUNNING: begin
                if (seconds == 0) begin
                    if (minutes == 0) timer_state <= BREAK;
                    else begin
                        minutes <= minutes - 1;
                        seconds <= 8'd59;
                    end
                end else seconds <= seconds - 1;
            end
        endcase
    end
end`
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
    title: 'Third Place: Prime Pong - MakeUofT Hackathon',
    year: 2024,
    previewImage: '/project-images/prime-pong/primepongpaddle.png',
    previewDescription: 'Motion-controlled Pong game using ESP32.',
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
        content: { 
          src: '/project-images/prime-pong/primepongpaddle.png', 
          alt: 'Motion-controlled paddle',
          caption: 'Custom paddle with embedded ESP32 and accelerometer'
        },
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
    year: 2023,
    previewImage: '/project-images/snake/snake.png',
    previewDescription: 'DE1-SoC FPGA project using Verilog',
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
        content: { 
          src: '/project-images/snake/snake.png', 
          alt: 'Snake Game Gameplay',
          caption: 'Snake game running on VGA display'
        },
        align: 'center'
      },
      {
        type: 'image',
        content: { 
          src: '/project-images/snake/snake_block.png', 
          alt: 'Snake Game Gameplay',
          caption: 'Snake game running on VGA display'
        },
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
    year: 2023,
    previewImage: '/project-images/APS360/Debby.png',
    previewDescription: 'LSTM network using HURSAT dataset',
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
        content: { 
          src: '/project-images/APS360/Debby.png', 
          alt: 'Hurricane Debby Path Prediction',
          caption: 'Predicted vs actual path for Hurricane Debby'
        },
        align: 'center'
      },
      {
        type: 'image',
        content: { 
          src: '/project-images/APS360/Ernesto.png', 
          alt: 'Hurricane Debby Path Prediction',
          caption: 'Predicted vs actual path for Hurricane Debby'
        },
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
          // Using the new FlexibleProjectDetailView
          <FlexibleProjectDetailView
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
