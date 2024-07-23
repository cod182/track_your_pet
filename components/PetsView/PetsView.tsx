'use client';

import { AddPetButton, LoadingElement, PetSquare } from '@/components';
import { useEffect, useState } from 'react';

import FadeIn from 'react-fade-in';
import { fetchNotifications } from '@/utils/functions';
import { petProps } from '@/types';
import { useNotification } from '@/context/notificationContext'; // Adjust the path as needed
import { useSession } from 'next-auth/react';

const PetsView = () => {
  // Gets the user from the session
  const { data: session } = useSession();

  // Notifications count
  const { notifications, addNotification, removeNotification, getUnreadCountForPet, setNotifications } = useNotification();


  // Extracts the userId form teh sessions
  const userId = (session?.user as { id: string })?.id;

  // State ready for the users pets. TS pet props
  const [userPets, setUserPets] = useState<petProps[]>();

  // Func to get all pets with the owner id === to userId
  const fetchUsersPets = async () => {
    const response = await fetch(`/api/pets/${userId}`);

    const data = await response.json();

    setUserPets(data);
  };

  const fetchAllNotifications = async () => {
    try {
      const response = await fetchNotifications();

      setNotifications(response)

    } catch (error) {
      console.log(error)
    }

  }

  // Fetch all user pets on first load
  useEffect(() => {
    fetchUsersPets();
    fetchAllNotifications()
  }, []);

  // When user pets returned, even if empty, Fade in all pets* and the add pet button. Otherwise show loading element
  if (userPets) {
    return (
      <FadeIn
        delay={100}
        transitionDuration={600}
        className="grid justify-center items-center grid-cols-1 xxs:grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2"
      >
        {userPets.map(({ petName, petImage, _id }: any) => {
          return (
            // Pet Square
            <div key={_id}>
              <PetSquare
                petName={petName.text}
                petImage={petImage.image}
                petId={_id}
                notificationNumber={getUnreadCountForPet(_id)}
              />
            </div>
          );
        })
        }
        <AddPetButton />
      </FadeIn >
    );
  } else {
    return <LoadingElement />;
  }
};

export default PetsView;
