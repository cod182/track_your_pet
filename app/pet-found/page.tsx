'use client';

import { InstantLoggingModal, LoadingElement, PetProfile } from '@/components';
import { redirect, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { petProps } from '@/types';
import { useSession } from 'next-auth/react';

const page = () => {
  // Get current session
  const { data } = useSession();


  // navigation router
  const router = useRouter();
  // get params
  const params = useSearchParams();
  // Gets the petId from the params
  const petId = params.get('id');

  const [petData, setPetData] = useState<petProps>();
  const [scanSubmitted, setScanSubmitted] = useState(false);

  // If no Id has been supplied in params, redirect to home
  if (!petId) {
    router.push('/');
  }

  useEffect(() => {
    const fetchPet = async (id: string) => {
      const res = await fetch(`/api/publicPet/${id}`);

      if (res.status === 200) {
        const foundPet = await res.json();
        setPetData(foundPet);
      } else {
        router.push('/');
      }
    };

    // If PetId exists, call fetch pet
    if (petId) {
      fetchPet(petId);
    } else {
      router.push('/');
    }
  }, []);

  if (petData) {
    if (data?.user?.id === petData.ownerId) {
      redirect(`my-account/pets/pet?id=${petData._id}`);
    } else {
      return (
        <>
          <InstantLoggingModal
            petId={petId}
            setScanSubmitted={setScanSubmitted}
            scanSubmitted={scanSubmitted}
          />
          <PetProfile petData={petData} owner={false} />;
        </>
      );
    }
  } else {
    return <LoadingElement />;
  }
};

export default page;
