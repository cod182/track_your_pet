'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';

import FadeIn from 'react-fade-in';

import { AddPetButton, PetSquare, TitleComp } from '@/components';

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
      <TitleComp
        position="start"
        size="calc(20px + 2.5vmin)"
        extraTextCss="text-transparent bg-clip-text bg-gradient-to-br from-primary to-cyan-400 font-semibold"
        title="Your Pets"
      />
      {/* PetSquare */}
      <FadeIn
        delay={100}
        transitionDuration={600}
        className="grid justify-center items-center grid-cols-1 xxs:grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2"
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
