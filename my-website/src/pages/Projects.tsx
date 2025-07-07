import ProjectCard from '../components/ProjectCard';
// things i want to add:
// - tags for software/hardware have them colour coded (half half is both)
// - links to github/devpost/website
// - image of the project, have them chasole style so that you can swipe through them
// - have a navbar for projects on the side that only have the title
// - have a grid of projects images for the projects on the right, 
// if you hover over them they give the the title and tech stack
// - when you click on the project on the left you see more details and more pictures on the right

const projects = [
  {
    title: 'No Name Hackathon',
    description: '295 project',
    techStack: ['Altium'],
    links: [{ label: 'GitHub', url: 'https://github.com/WhosMadeer/ece295' }],
    image: '/project-images/295pcb.png'
  },
  {
    title: 'Third Place: Formula Null Hackathon',
    description: '295 project',
    techStack: ['Altium'],
    links: [{ label: 'GitHub', url: 'https://github.com/WhosMadeer/ece295' }],
    image: '/project-images/295pcb.png'
  },
  {
    title: 'Pomodoro Timer',
    description: 'A productivity timer built on FPGA.',
    techStack: ['RISC-V', 'DE1-SoC', 'GDB', 'Powershell'],
    links: [
      { label: 'GitHub', url: 'https://github.com/karen-weng/Pomodoro' },
      { label: 'Demo', url: 'https://www.youtube.com/watch?v=0ngW_dFM08A' }
    ],
    image: '/project-images/pomodoro.png'
  },
  {
    title: 'Third Place: Prime Pong - MakeUofT Hackathon Project',
    description: 'Built during XYZ Hackathon.',
    techStack: ['ESP32', 'MPU5060'],
    links: [
    { label: 'Devpost', url: 'https://devpost.com/software/primepong' },
      { label: 'GitHub', url: 'https://github.com/karen-weng/prime-pong' }
    ],
    image: '/project-images/primepongpaddle.png'
  },
  {
    title: 'Snake Game',
    description: 'Built during XYZ Hackathon.',
    techStack: ['ESP32', 'MPU5060'],
    links: [
    { label: 'Devpost', url: 'https://devpost.com/software/primepong' },
      { label: 'GitHub', url: 'https://github.com/karen-weng/prime-pong' }
    ],
    image: '/project-images/primepongpaddle.png'
  },
  {
    title: 'Atlantic Hurricane Path Prediction',
    description: 'LSTM network, HURSAT dataset',
    techStack: ['ESP32', 'MPU5060'],
    links: [
    { label: 'Devpost', url: 'https://devpost.com/software/primepong' },
      { label: 'GitHub', url: 'https://github.com/karen-weng/prime-pong' }
    ],
    image: '/project-images/primepongpaddle.png'
  },
  {
    title: 'InstaTeach - GenAI Genesis 2024 Hackathon ',
    description: 'Built during XYZ Hackathon.',
    techStack: ['ESP32', 'MPU5060'],
    links: [
    { label: 'Devpost', url: 'https://devpost.com/software/primepong' },
      { label: 'GitHub', url: 'https://github.com/karen-weng/prime-pong' }
    ],
    image: '/project-images/primepongpaddle.png'
  },
  {
    title: 'MakeUofT Hackathon Project',
    description: 'Built during XYZ Hackathon.',
    techStack: ['ESP32', 'MPU5060'],
    links: [
    { label: 'Devpost', url: 'https://devpost.com/software/primepong' },
      { label: 'GitHub', url: 'https://github.com/karen-weng/prime-pong' }
    ],
    image: '/project-images/primepongpaddle.png'
  },
  {
    title: 'Third Place: MakeUofT Hackathon Project',
    description: 'Built during XYZ Hackathon.',
    techStack: ['ESP32', 'MPU5060'],
    links: [
    { label: 'Devpost', url: 'https://devpost.com/software/primepong' },
      { label: 'GitHub', url: 'https://github.com/karen-weng/prime-pong' }
    ],
    image: '/project-images/primepongpaddle.png'
  },
  {
    title: 'Third Place: MakeUofT Hackathon Project',
    description: 'Built during XYZ Hackathon.',
    techStack: ['ESP32', 'MPU5060'],
    links: [
    { label: 'Devpost', url: 'https://devpost.com/software/primepong' },
      { label: 'GitHub', url: 'https://github.com/karen-weng/prime-pong' }
    ],
    image: '/project-images/primepongpaddle.png'
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
