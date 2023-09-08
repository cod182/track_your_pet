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
      className="group aspect-square rounded-lg border-2 border-gray-200 shadow-md mx-auto max-w-[250px] w-full relative flex flex-col justify-evenly items-center p-2 bg-gradient-to-tl from-primary to-cyan-400 transition-all ease-in-out duration-400  hover:scale-110	 hover:z-[99] hover:border-2 hover:border-white"
    >
      {/* Top Area */}
      <div className="w-full flex flex-row justify-evenly items-center max-h-[100px]">
        <div className=" p-2 overflow-hidden group-hover:shadow-green-400  border-black border-2 rounded-full shadow-lg max-w-[100px] max-h-[100px] min-h-[80px] min-w-[80px]  relative">
          <Image src={petImage} alt={petName} fill className="object-contain" />
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
