'use client';
import { PetForm } from '@/components';
import { petProps } from '@/types';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import { redirect, useRouter, useSearchParams } from 'next/navigation';

const page = () => {
  const { data: session } = useSession();
  const router = useRouter();
  // The parameters from teh current url - Getting the PetID
  const params = useSearchParams();
  // Gets the petId from the params
  const petId = params.get('id');

  const userId = (session?.user as { id: string })?.id;
  const userName = (session?.user as { name: string })?.name;

  useEffect(() => {
    const fetchPet = async () => {
      const res = await fetch(`/api/pets/pet/${petId}`);
      const data = await res.json();
      console.log(data);
      setPet(data);
    };
    if (petId) {
      fetchPet();
    }
  }, []);

  if (!petId) {
    return redirect('/');
  }

  const [pet, setPet] = useState<petProps>();

  const [submitting, setSubmitting] = useState(false);
  console.log(pet);

  const updatePet = async (e: any) => {
    e.preventDefault();
    console.log(pet);
    setSubmitting(true);

    try {
      const response = await fetch(`/api/pets/pet/${petId}`, {
        method: 'PATCH',
        body: JSON.stringify({
          ownerId: pet!.ownerId,
          ownerName: pet!.ownerName,
          petImage: pet!.petImage,
          petName: pet!.petName,
          dob: pet?.dob,
          breed: pet!.breed,
          color: pet!.color,
          homeAddress: pet?.homeAddress,
          what3words: pet?.what3words,
          message: pet?.message,
          petType: pet!.petType,
          contactNumber: pet?.contactNumber,
          contactEmail: pet?.contactEmail,
        }),
      });

      if (response.ok) {
        router.push(`/my-account/pets/pet?id=${petId}`);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };
  if (pet) {
    return (
      <PetForm
        formType="Update"
        handleSubmit={updatePet}
        submitting={submitting}
        pet={pet}
        setPet={setPet}
      />
    );
  } else {
    <div>Loading...</div>;
  }
};

export default page;
