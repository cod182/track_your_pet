'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';

import FadeIn from 'react-fade-in';

import { AddPetButton, LoadingElement, PetSquare } from '@/components';
import { petProps } from '@/types';

const PetsView = () => {
  const { data: session } = useSession();
  const userId = (session?.user as { id: string })?.id;

  const [userPets, setUserPets] = useState<petProps[]>();

  const fetchUsersPets = async () => {
    const response = await fetch(`/api/pets/${userId}`);

    const data = await response.json();

    setUserPets(data);
  };

  useEffect(() => {
    fetchUsersPets();
  }, []);
  console.log(userPets);
  if (userPets) {
    return (
      <FadeIn
        delay={100}
        transitionDuration={600}
        className="grid justify-center items-center grid-cols-1 xxs:grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2"
      >
        {userPets.map(({ petName, petImage, _id }: any) => {
          return (
            // Pet Square
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
    );
  } else {
    return <LoadingElement />;
  }
};

export default PetsView;
