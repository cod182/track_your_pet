import React from 'react';
import { about } from '../../constants/aboutInfo';

const About = () => {
  return (
    <div className="w-full h-fit p-5 mb-4 mt-2 sm:mt-0 rounded-b-xl bg-gradient-to-tr from-cyan-200 to-blue-300">
      {about.paragraphs.map((paragraph) => (
        <p className="text-[2vmin] my-4" key={paragraph.id}>
          {paragraph.paragraph}
        </p>
      ))}
    </div>
  );
};

export default About;
