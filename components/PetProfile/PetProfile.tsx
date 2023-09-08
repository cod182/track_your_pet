import { petProps } from '@/types';
import React from 'react';

declare interface petProfileProps {
  petData: petProps;
}

const PetProfile = (petData: petProfileProps) => {
  const pet = petData.petData;

  const {
    ownerId,
    ownerName,
    petName,
    petImage,
    dob,
    breed,
    color,
    homeAddress,
    what3words,
    message,
    petType,
    scanHistory,
  } = pet;

  return <div>{petName.text}</div>;
};

export default PetProfile;
