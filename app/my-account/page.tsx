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
      <p>Unsure of purpose at the moment</p>
    </div>
  );
};

export default page;
