import { petProps } from '@/types';
import Image from 'next/image';
import React from 'react';

declare interface petProfileProps {
  petData: petProps;
}

const PetProfile = (petData: petProfileProps) => {
  const pet = petData.petData;

  const {
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
          <p
            className={`text-xs w-fit text-end ${
              petName!.public ? 'text-green-500' : 'text-red-500'
            }`}
          >
            {petName.public
              ? 'Visible when scanned'
              : 'Not visible when scanned'}
          </p>
        </div>
      </section>

      <hr className="w-full h-[2px] my-4" />

      {/* Message Section */}
      <section className="w-full h-fit flex flex-col justify-between items-center py-6 px-5 relative">
        {/* Home Address Section */}
        <div className="w-full relative mb-2">
          <h2 className="w-full h-fit py-2 font-semibold text-2xl">
            Message from owner
          </h2>
          <p className="w-full text-lg">
            {message!.message ? message!.message : 'Not Provided'}
          </p>
          <div className="">
            <p
              className={`text-xs w-fit text-start ${
                message!.public ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {message!.public
                ? 'Visible when scanned'
                : 'Not visible when scanned'}
            </p>
          </div>
        </div>
      </section>

      <hr className="w-full h-[2px] my-4" />

      {/* Info Table Section */}
      <section className="w-full h-fit flex flex-col justify-start items-center py-6 px-5 relative">
        <h2 className="w-full h-fit py-2 font-semibold text-2xl">Pet Info</h2>
        <table className="border-[1px] border-gray-400 w-full">
          {/* Date of Birth */}
          <tr className="border-[1px] border-gray-400">
            <td className="border-[1px] border-gray-400 w-fit h-fit text-center px-4 py-2">
              Date of Birth
            </td>
            <td className="border-[1px] border-gray-400 w-fit h-fit text-center px-4 py-2">
              {dob?.birthday ? dob?.birthday : 'N/A'}
            </td>
            <td
              className={`border-[1px] border-gray-400 w-fit h-fit text-center px-4 py-2 ${
                dob?.public ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {dob?.public ? 'Visible' : 'Not Visible'}
            </td>
          </tr>

          {/* Pet Type */}
          <tr className="border-[1px] border-gray-400">
            <td className="border-[1px] border-gray-400 w-fit h-fit text-center px-4 py-2">
              petType
            </td>
            <td className="border-[1px] border-gray-400 w-fit h-fit text-center px-4 py-2">
              {petType ? petType : 'N/A'}
            </td>
            <td
              className={`border-[1px] border-gray-400 w-fit h-fit text-center px-4 py-2 text-green-500`}
            >
              Visible
            </td>
          </tr>

          {/* Breed */}
          <tr className="border-[1px] border-gray-400">
            <td className="border-[1px] border-gray-400 w-fit h-fit text-center px-4 py-2">
              Breed
            </td>
            <td className="border-[1px] border-gray-400 w-fit h-fit text-center px-4 py-2">
              {breed?.text ? breed?.text : 'N/A'}
            </td>
            <td
              className={`border-[1px] border-gray-400 w-fit h-fit text-center px-4 py-2 ${
                breed?.public ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {breed?.public ? 'Visible' : 'Not Visible'}
            </td>
          </tr>

          {/* Color */}
          <tr className="border-[1px] border-gray-400">
            <td className="border-[1px] border-gray-400 w-fit h-fit text-center px-4 py-2">
              Colour
            </td>
            <td className="border-[1px] border-gray-400 w-fit h-fit text-center px-4 py-2">
              {color?.text ? color?.text : 'N/A'}
            </td>
            <td
              className={`border-[1px] border-gray-400 w-fit h-fit text-center px-4 py-2 ${
                color?.public ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {color?.public ? 'Visible' : 'Not Visible'}
            </td>
          </tr>
        </table>
      </section>

      <hr className="w-full h-[2px] my-4" />

      {/* Address Section */}
      <section className="w-full h-fit flex flex-col justify-between items-center py-6 px-5 relative">
        <h2 className="w-full h-fit py-2 font-semibold text-2xl">Address</h2>
        {/* Home Address Section */}
        <div className="w-full relative mb-2">
          <p className="w-full">
            My Home address is:&nbsp;
            {homeAddress!.text ? homeAddress!.text : 'Not Provided'}
          </p>
          <div className="">
            <p
              className={`text-xs w-fit text-start ${
                homeAddress!.public ? 'text-green-500' : 'text-red-500'
              }`}
            >
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
            <p
              className={`text-xs w-fit text-start ${
                what3words!.public ? 'text-green-500' : 'text-red-500'
              }`}
            >
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
