'use client';
import { PetForm } from '@/components';
import { petProps } from '@/types';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const page = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const userId = (session?.user as { id: string })?.id;
  const userName = (session?.user as { name: string })?.name;
  const [pet, setPet] = useState<petProps>({
    ownerId: userId,
    ownerName: userName,
    petImage: { image: '', public: true },
    petName: { text: '', public: false },
    dob: { birthday: '', public: false },
    breed: { text: '', public: false },
    color: { text: '', public: false },
    homeAddress: { text: '', public: false },
    what3words: { w3w: '', public: false },
    message: { message: '', public: false },
    petType: '',
    contactNumber: { phone: '', public: false },
    contactEmail: { email: '', public: false },
  });

  const [submitting, setSubmitting] = useState(false);

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
          petType: pet.petType,
          contactNumber: pet?.contactNumber,
          contactEmail: pet?.contactEmail,
        }),
      });

      if (response.ok) {
        router.push('/my-account/pets');
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
