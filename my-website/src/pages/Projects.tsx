// import React, { useState } from 'react';

// const Projects = () => {
//   const [projects] = useState(['Portfolio Website', 'Weather App', 'Chat Bot']);
//   const [selected, setSelected] = useState<string | null>(null);

//   return (
//     <div style={{ textAlign: 'center', padding: '2rem' }}>
//       <h1>My Projects</h1>
//       <ul style={{ listStyle: 'none', padding: 0 }}>
//         {projects.map((project) => (
//           <li key={project}>
//             <button
//               onClick={() => setSelected(project)}
//               style={{
//                 padding: '10px 20px',
//                 margin: '0.5rem',
//                 backgroundColor: '#10b981',
//                 color: 'white',
//                 border: 'none',
//                 borderRadius: '8px',
//                 cursor: 'pointer'
//               }}
//             >
//               {project}
//             </button>
//           </li>
//         ))}
//       </ul>
//       {selected && <p>You selected: <strong>{selected}</strong></p>}
//     </div>
//   );
// };

// export default Projects;


import React from 'react';

const Projects = () => (
  <div style={{ textAlign: 'center', padding: '2rem' }}>
    <h1>My Projects</h1>
    <p>Here are some cool projects I've worked on!</p>
  </div>
);

export default Projects;
