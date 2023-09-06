'use client';
import { PetForm } from '@/components';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';

const page = () => {
  const { data: session } = useSession();
  const userId = (session?.user as { id: string })?.id;
  const userName = (session?.user as { name: string })?.name;

  const [pet, setPet] = useState({});
  const [submitting, setSubmitting] = useState(false);
  console.log(pet);

  // Pet Image here only temporary
  useEffect(() => {
    setPet({
      owner: userId,
      ownerName: userName,
      petImage: { image: '/assets/dog.png', public: true },
    });
  }, []);

  const addNewPet = async (e: any) => {
    e.preventDefault();
  };

  return (
    <PetForm
      formType="Add"
      handleSubmit={addNewPet}
      submitting={submitting}
      pet={pet}
      setPet={setPet}
    />
  );
};

export default page;
