import { petProps } from '@/types';
import Image from 'next/image';
import React from 'react';

declare interface petProfileProps {
  petData: petProps;
}

const PetProfile = (petData: petProfileProps) => {
  const pet = petData.petData;

  const {
    ownerId,
    ownerName,
    petName,
    petImage,
    dob,
    breed,
    color,
    homeAddress,
    what3words,
    message,
    petType,
    scanHistory,
  } = pet;

  return (
    <div className="w-full h-full flex flex-col justify-center items-center my-8 relative">
      {/* Top Section */}
      <div className="w-full h-fit flex flex-col xs:flex-row justify-between items-center px-5">
        {/* Image Container */}
        <div className="w-[150px] xs:w-[200px] sm:w-[300px] h-auto relative aspect-square border-2 border-black rounded-full overflow-hidden ">
          <Image
            src={petImage.image}
            alt={petName.text}
            fill
            sizes="w-full h-full"
            className="contain"
          />
        </div>
        <div>
          <h2
            className="font-bold text-center xs:text-end"
            style={{ fontSize: 'calc(20px + 6wmin)' }}
          >
            {petName.text}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default PetProfile;
