'use client';
import { LoadingElement, PetForm } from '@/components';
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

  useEffect(() => {
    const fetchPet = async () => {
      const res = await fetch(`/api/pets/pet/${petId}`);
      if (res.status === 200) {
        const data = await res.json();
        setPet(data);
      } else {
        router.push('/');
      }
    };
    // If petId is present the fetchPet func is called
    if (petId) {
      fetchPet();
    }
  }, []);

  if (!petId) {
    return redirect('/');
  }

  const [pet, setPet] = useState<petProps>();

  const [submitting, setSubmitting] = useState(false);

  const updatePet = async (e: any) => {
    e.preventDefault();
    console.log(pet);
    setSubmitting(true);

    try {
      const response = await fetch(`/api/pets/pet/${petId}`, {
        method: 'PATCH',
        body: JSON.stringify({
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
    if (userId === pet.ownerId) {
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
      console.log('Not authorised to access this pet');
      redirect('/');
    }
  } else {
    <LoadingElement />;
  }
};

export default page;
