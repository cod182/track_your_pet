import { AddPetButton, PetSquare } from '@/components';

import { pets } from '../../constants/test';

const page = () => {
  return (
    <div className="w-full h-full">
      <div className="grid justify-center items-center grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
        {/* PetSquare */}
        {pets.map(({ petName, scanHistory, petImage, id }: any) => {
          void console.log(scanHistory.slice(-1)[0].dateTime);
          return (
            <PetSquare
              petName={petName.text}
              petImage={petImage.image}
              petId={id}
              lastScan={scanHistory.slice(-1)[0].dateTime}
            />
          );
        })}
        <AddPetButton />
      </div>
    </div>
  );
};

export default page;
