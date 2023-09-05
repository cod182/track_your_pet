import { AddPetButton, PetSquare } from '@/components';

const page = () => {
  return (
    <div className="w-full h-full">
      <div className="grid justify-center items-center grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
        {/* PetSquare */}
        <PetSquare
          petName="Paulio"
          petImage="/assets/dog.png"
          petId="123"
          lastScan="22/03/23 at 22:42"
        />
        <AddPetButton />
      </div>
    </div>
  );
};

export default page;
