import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

declare interface PetSquareProps {
  petName: string;
  petImage: string;
  lastScan: string | undefined;
  petId: string;
}

const PetSquare = ({ petName, petImage, lastScan, petId }: PetSquareProps) => {
  return (
    <Link
      href={`/my-account/pets/${petId}`}
      className="aspect-square rounded-lg border-2 border-gray-200 shadow-md mx-auto max-w-[250px] w-full relative flex flex-col justify-evenly items-center p-2 bg-gradient-to-tl from-primary to-cyan-400 transition-all ease-in-out duration-400  hover:scale-110	 hover:z-[99] hover:border-2 hover:border-white"
    >
      {/* Top Area */}
      <div className="w-full flex flex-row justify-evenly items-center max-h-[100px]">
        <div className="w-[30%] p-2 overflow-hidden  border-black border-2 rounded-full shadow-lg">
          <Image
            src={petImage}
            alt={petName}
            width={100}
            height={100}
            className="object-contain"
          />
        </div>
        <div className="w-[60%] p-2 text-end ">
          <p className="w-full text-md xs:text-lg sm:text-xl font-semibold overflow-x-scroll max-h-[150px]">
            {petName}
          </p>
        </div>
      </div>
      {/* Middle Area */}
      <div className="w-full mt-4 text-start font-normal text-sm xxs:text-md xs:text-lg sm:text-xl">
        <span>Last Scan:&nbsp;</span>
        <p className="inline">{lastScan}</p>
      </div>
    </Link>
  );
};

export default PetSquare;
