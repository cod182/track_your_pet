'use client';
import React, { useEffect, useState } from 'react';
import { redirect, useRouter, useSearchParams } from 'next/navigation';
import { LoadingElement, PetProfile } from '@/components';
import { petProps } from '@/types';
import { useSession } from 'next-auth/react';

const page = () => {
  // The parameters from teh current url - Getting the PetID
  const params = useSearchParams();
  // The data from the current session
  const { data } = useSession();
  // Gets the petId from the params
  const petId = params.get('id');
  // Using the next router
  const router = useRouter();

  // Storing the pet data
  const [petData, setPetData] = useState<petProps>();

  useEffect(() => {
    const fetchPet = async () => {
      const res = await fetch(`/api/pets/pet/${petId}`);

      if (res.status === 200) {
        const data = await res.json();
        setPetData(data);
      } else {
        router.push('/');
      }
    };
    if (petId) {
      fetchPet();
    }
  }, []);

  if (!petId) {
    return redirect('/');
  }

  // Checks the petData is available, otherwise loading is displayed
  if (petData) {
    // Checks the current session userId matches the PetID, if not, redirected to home
    if (data?.user?.id === petData.ownerId) {
      return <PetProfile petData={petData} owner={true} />;
    } else {
      console.log('Not authorised to access this pet');
      redirect('/');
    }
  } else {
    return <LoadingElement />;
  }
};

export default page;
