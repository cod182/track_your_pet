import { FaBell } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

declare interface PetSquareProps {
  petName: string;
  petImage: string;
  petId: string;
  notificationNumber?: number;
}

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#2AA6E9" offset="20%" />
      <stop stop-color="#085C89" offset="50%" />
      <stop stop-color="#A8E0FD" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#A8E0FD" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);



const PetSquare = ({ petName, petImage, petId, notificationNumber }: PetSquareProps) => {
  console.log('notifications:', notificationNumber);
  return (
    <Link
      href={`/my-account/pets/pet?id=${petId}`}
      className="group aspect-square rounded-lg border-2 border-gray-200 shadow-md mx-auto max-w-[200px] w-full relative flex flex-col justify-center items-center p-2 bg-gradient-to-tl from-primary to-cyan-400 transition-all ease-in-out duration-400  hover:scale-110	 hover:z-[99] hover:border-2 hover:border-white"
    >
      <div className={`overflow-hidden absolute top-[10px] right-[10px] ${notificationNumber && notificationNumber > 0 ? '' : 'hidden'}`}>
        <div className="relative aspect-square flex flex-col justify-center items-center">
          <FaBell className="text-red-500 text-4xl" />
          <span className="text-white absolute top-[10px] text-xs">
            {notificationNumber && notificationNumber > 10 ? '10+' : notificationNumber}
          </span>
        </div>

      </div>

      {/* Top Area */}
      <div className=" p-2 overflow-hidden group-hover:shadow-green-400  border-black border-2 rounded-full shadow-lg max-w-[100px] max-h-[100px] min-h-[80px] min-w-[80px] relative">


        <Image
          src={petImage}
          alt={petName}
          fill
          className="object-contain"
          placeholder={`data:image/svg+xml;base64,${toBase64(
            shimmer(700, 475)
          )}`}
        />
      </div>
      <div className="w-full p-2 text-center ">
        <p className="w-full text-md xs:text-lg sm:text-xl font-semibold overflow-x-scroll max-h-[150px]">
          {petName}
        </p>
      </div>
    </Link>
  );
};

export default PetSquare;
