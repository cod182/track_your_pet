'use client';
import React from 'react';
import { about } from '../../constants/aboutInfo';



const About = () => {
  console.log(about.paragraphs);
  return (
    <div className="w-full h-fit px-5 mx-10">
      {about.paragraphs.map((paragraph) => (
        <p key={paragraph.id}>{paragraph.paragraph}</p>
      ))}
    </div>
  );
};

export default About;
