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
    <div className="w-full h-full flex flex-col justify-center items-center my-8">
      {/* Image / Name section */}
      <section className="w-full h-fit flex flex-col xs:flex-row justify-between items-center px-5">
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
        <div className="relative">
          <h2
            className="font-bold text-center xs:text-end w-fit"
            style={{ fontSize: 'calc(20px + 6vmin)' }}
          >
            {petName.text}
          </h2>
          <p className="absolute w-fit h-fit text-red-500 top-0 right-0 text-xs">
            {petName.public
              ? 'Visible when scanned'
              : 'Not visible when scanned'}
          </p>
        </div>
      </section>

      {/* Address Section */}
      <section className="w-full h-fit flex flex-col justify-between items-center py-6 px-5 relative">
        {homeAddress!.public ? (
          <p className="w-full">My Home address is: {homeAddress!.text}</p>
        ) : null}
        {homeAddress?.text !== '' && homeAddress!.public ? (
          <p className="absolute text-red-500 text-xs left-5 top-1 w-fit text-center">
            Visible when scanned
          </p>
        ) : (
          <p className="absolute text-red-500 text-xs left-5 top-1 w-fit text-start">
            Not visible when scanned
          </p>
        )}
      </section>
    </div>
  );
};

export default PetProfile;
