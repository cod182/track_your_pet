'use client';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { PetProfile } from '@/components';
import { petProps } from '@/types';

const page = () => {
  const params = useSearchParams();
  const petId = params.get('id');

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
  if (petData) {
    return <PetProfile petData={petData} />;
  } else {
    return (
      <p className="mx-auto w-full text-xl text-primary text-center">
        Loading...
      </p>
    );
  }
};

export default page;
