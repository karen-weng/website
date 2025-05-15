import ProjectCard from '../components/ProjectCard';
// import reactImg from '../assets/react.svg';
import pomodoroImg from '../assets/pomodoro.png';
import mixerImg from '../assets/295pcb.png';
import makeuoftImg from '../assets/primepongpaddle.png';



const projects = [
  {
    title: 'Radio Receiver',
    description: '295 project',
    techStack: ['Altium'],
    links: [{ label: 'GitHub', url: 'https://github.com/WhosMadeer/ece295' }],
    image: mixerImg 
  },
  {
    title: 'Pomodoro Timer',
    description: 'A productivity timer built on FPGA.',
    techStack: ['RISC-V', 'DE1-SoC', 'GDB', 'Powershell'],
    links: [
      { label: 'GitHub', url: 'https://github.com/karen-weng/Pomodoro' },
      { label: 'Demo', url: 'https://www.youtube.com/watch?v=0ngW_dFM08A' }
    ],
    image: pomodoroImg
  },

  {
    title: 'MakeUofT Hackathon Project',
    description: 'Built during XYZ Hackathon.',
    techStack: ['ESP32', 'MPU5060'],
    links: [
    { label: 'Devpost', url: 'https://devpost.com/software/primepong' },
      { label: 'GitHub', url: 'https://github.com/karen-weng/prime-pong' }
      
    ],
    image: makeuoftImg
  },

];

const Projects = () => (
  <div style={{ textAlign: 'center', padding: '2rem' }}>
    <h1>My Projects</h1>
    <p>Here are some cool projects I've worked on!</p>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', marginTop: '2rem' }}>
      {projects.map(project => (
        <ProjectCard 
            key={project.title} 
            title={project.title} 
            description={project.description} 
            techStack={project.techStack} 
            links={project.links} 
            image={project.image}  
        />
      ))}
    </div>
  </div>
);


export default Projects;
