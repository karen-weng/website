// import React from 'react';

// const Personal = () => (
//   <div style={{ textAlign: 'center', padding: '2rem' }}>
//     <h1>Personal Stuff</h1>
//     <p>Here’s where I share my hobbies and interests.</p>
//   </div>
// );

// export default Personal;


// src/pages/Personal.tsx
// import React from "react";
import { BucketList } from "../components/BucketList";

const Personal = () => {
  return (
    <div style={{ padding: "16px" }}>
      <h1>Personal Section</h1>
      <BucketList />
    </div>
  );
};

export default Personal;
