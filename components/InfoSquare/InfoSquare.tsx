import { infoIcons, infoSquareProps, infoText } from '@/types';
import Image from 'next/image';
import React from 'react';

const InfoSquare = ({ id, icons, text }: infoSquareProps) => {
  return (
    <div
      key={id}
      className="flex flex-col py-4 sm:py-10 mx-auto sm:p-5 w-full h-full bg-gradient-to-b from-cyan-500 to-blue-500 rounded-xl shadow-xl select-none transition-all ease-in duration-400"
    >
      {/* Icons Container */}
      <div className="w-full h-auto mx-auto flex flex-row justify-center items-center gap-2 mb-2 ">
        {icons.map(({ id, title, icon }: infoIcons) => {
          return (
            <div
              key={id}
              className="w-[40px] md:w-[60px] lg:w-[80px] h-[40px] md:h-[60px] lg:h-[80px] relative select-none"
            >
              <Image
                src={icon}
                alt={title}
                placeholder="blur"
                blurDataURL={`data:${icon}`}
                className="cover"
                fill
              />
            </div>
          );
        })}
      </div>
      {/* Text Container */}
      <div className="w-fit mx-auto h-fit flex flex-col items-center justify-start px-6 text-[15px] sm:text-[2.5vmin]">
        {text.map(({ id, line }: infoText) => {
          return (
            <p key={id} className="text-center w-full mx-auto">
              {line}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default InfoSquare;
