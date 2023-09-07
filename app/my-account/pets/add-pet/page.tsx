'use client';
import { PetForm } from '@/components';
import { petProps } from '@/types';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const page = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const userId = (session?.user as { id: string })?.id;
  const userName = (session?.user as { name: string })?.name;
  let currentDate = new Date();
  const [pet, setPet] = useState<petProps>({
    ownerId: userId,
    ownerName: userName,
    petImage: { image: '', public: true },
    petName: { text: '', public: false },
    dob: { birthday: '', public: false },
    breed: { text: '', public: false },
    color: { text: '', public: false },
    homeAddress: { text: '', public: false },
    what3words: { text: '', public: false },
    message: { message: '', public: false },
    scanHistory: [
      {
        dateTime: currentDate.toString(),
        coordinates: '',
        message: 'Pet added to system',
        scannerName: 'Pet Creator',
      },
    ],
  });

  const [submitting, setSubmitting] = useState(false);
  console.log(pet);

  const addNewPet = async (e: any) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch('/api/pets/new', {
        method: 'POST',
        body: JSON.stringify({
          ownerId: pet.ownerId,
          ownerName: pet.ownerName,
          petImage: pet.petImage,
          petName: pet.petName,
          dob: pet?.dob,
          breed: pet.breed,
          color: pet.color,
          homeAddress: pet?.homeAddress,
          what3words: pet?.what3words,
          message: pet?.message,
          scanHistory: pet?.scanHistory,
        }),
      });

      if (response.ok) {
        router.push('/');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
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
