'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';

import FadeIn from 'react-fade-in';

import { AddPetButton, PetSquare } from '@/components';

const page = () => {
  const { data: session } = useSession();
  const userId = (session?.user as { id: string })?.id;

  const [userPets, setUserPets] = useState([]);

  const fetchUsersPets = async () => {
    const response = await fetch(`/api/pets/${userId}`);

    const data = await response.json();

    setUserPets(data);
  };

  useEffect(() => {
    fetchUsersPets();
  }, []);

  return (
    <div className="w-full h-full">
      {/* PetSquare */}
      <FadeIn
        delay={100}
        transitionDuration={600}
        className="grid justify-center items-center grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2"
      >
        {userPets.map(({ petName, petImage, _id }: any) => {
          return (
            <div key={_id}>
              <PetSquare
                petName={petName.text}
                petImage={petImage.image}
                petId={_id}
              />
            </div>
          );
        })}
        <AddPetButton />
      </FadeIn>
    </div>
  );
};

export default page;
