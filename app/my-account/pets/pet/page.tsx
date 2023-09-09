'use client';
import React, { useEffect, useState } from 'react';
import { redirect, useSearchParams } from 'next/navigation';
import { PetProfile } from '@/components';
import { petProps } from '@/types';
import { useSession } from 'next-auth/react';

const page = () => {
  // The parameters from teh current url - Getting the PetID
  const params = useSearchParams();
  // The data from the current session
  const { data } = useSession();
  // Gets the petId from the params
  const petId = params.get('id');

  // Storing the pet data
  const [petData, setPetData] = useState<petProps>();

  useEffect(() => {
    const fetchPet = async () => {
      const res = await fetch(`/api/pets/pet/${petId}`);
      const data = await res.json();
      setPetData(data);
    };
    if (petId) {
      fetchPet();
    }
  }, []);
  // Checks the petData is available, otherwise loading is displayed
  if (petData) {
    // Checks the current session userId matches the PetID, if not, redirected to home
    if (data?.user?.id === petData.ownerId) {
      return <PetProfile petData={petData} />;
    } else {
      console.log('Not authorised to access this pet');
      redirect('/');
    }
  } else {
    return (
      <p className="mx-auto w-full text-xl text-primary text-center">
        Loading...
      </p>
    );
  }
};

export default page;
