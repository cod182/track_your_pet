'use client';
import { LoadingElement, PetProfile } from '@/components';
import { petProps } from '@/types';
import { redirect, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const page = () => {
  // navigation router
  const router = useRouter();
  // get params
  const params = useSearchParams();
  // Gets the petId from the params
  const petId = params.get('id');

  const [petData, setPetData] = useState<petProps>();

  // If no Id has been supplied in params, redirect to home
  if (!petId) {
    router.push('/');
  }

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
    // If PetId exists, call fetch pet
    if (petId) {
      fetchPet();
    }
  }, []);

  if (petData) {
    return <PetProfile petData={petData} owner={false} />;
  } else {
    return <LoadingElement />;
  }
};

export default page;
