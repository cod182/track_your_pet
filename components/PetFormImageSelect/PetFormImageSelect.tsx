import Image from 'next/image';
import React from 'react';

declare interface PetImageOptionProps {
  imageLink: string;
  petType: string;
}

declare interface PetImageSelectProps {
  pet: any;
  setPet: any;
  imageOptions: PetImageOptionProps[];
}

const PetFormImageSelect = ({
  pet,
  setPet,
  imageOptions,
}: PetImageSelectProps) => {
  return (
    <div className="flex flex-col sm:flex-row justify-evenly items-center w-full h-fit bg-gray-100 sm:bg-white rounded sm:rounded-none p-2 sm:p-0 my-2">
      <p className="min-w-[fit-content] p-2">Pet Type:</p>

      <div className="w-full h-fit">
        <div className="flex flex-col xxs:flex-row justify-evenly items-center">
          {imageOptions.map(({ imageLink, petType }: PetImageOptionProps) => (
            <label key={petType} className="m-2 relative w-[100px] h-[100px]">
              <input
                checked={pet.petType === petType}
                required
                type="radio"
                name="selected-image"
                value={imageLink}
                className="peer absolute images top-10 left-10"
                onChange={(e) => {
                  setPet({
                    ...pet,
                    petImage: {
                      image: e.target.value,
                      public: pet?.petImage?.public || false,
                    },
                    petType: petType,
                  });
                }}
              />

              <Image
                src={imageLink}
                alt="Dog"
                fill
                sizes="w-full h-full"
                className="rounded-md cover peer-checked:drop-shadow-2xl peer-checked:blur-none blur-[1px] transition-all duration-400 ease-in "
              />
              <div className="bg-gray-100/50 absolute overflow-hidden h-[0px] peer-hover:h-full top-[0px] w-full transition-all duration-400 ease-in font-bold  flex flex-col justify-center items-center">
                <p className="text-lg capitalize">{petType}</p>
              </div>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PetFormImageSelect;
