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
  }: petProps = pet;

  return (
    <div className="w-full h-full flex flex-col justify-center items-center my-8">
      {/* Image / Name section */}
      <section className="w-full h-fit flex flex-col xs:flex-row justify-between items-center px-5">
        {/* Image Container */}
        <div className="w-[150px] xs:w-[200px] sm:w-[300px] h-auto relative aspect-square border-2 border-black rounded-full overflow-hidden shadow-xl">
          <Image
            src={petImage.image}
            alt={petName.text}
            fill
            sizes="w-full h-full"
            className="contain"
          />
        </div>
        <div className="relative w-fit">
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

      <hr className="w-full h-[2px] my-4" />

      {/* Address Section */}
      <section className="w-full h-fit flex flex-col justify-between items-center py-6 px-5 relative">
        {/* Home Address Section */}
        <div className="w-full relative mb-2">
          <p className="w-full">
            My Home address is:&nbsp;
            {homeAddress!.text ? homeAddress!.text : 'Not Provided'}
          </p>
          <div className="">
            <p className=" text-red-500 text-xs w-fit text-start">
              {homeAddress!.public
                ? 'Visible when scanned'
                : 'Not visible when scanned'}
            </p>
          </div>
        </div>
        <hr className="w-full h-[2px] my-4" />
        {/* What 3 Words Address Section */}
        <div className="w-full relative mt-2">
          <p className="w-full">
            My What3Words Address is:&nbsp;
            {what3words!.w3w ? what3words!.w3w : 'Not Provided'}
          </p>
          <div className="">
            <p className=" text-red-500 text-xs w-fit text-start">
              {what3words!.public
                ? 'Visible when scanned'
                : 'Not visible when scanned'}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PetProfile;
