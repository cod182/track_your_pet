'use client';
import { DeleteButton } from '@/components';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const RemoveAccount = () => {
  const router = useRouter();
  const { data: session } = useSession();

  // Deleting the user account and all pets
  const deleteAccountAndPets = async () => {
    try {
      // Deletes ALL pets associated with user
      let deletePetsRes = await fetch(`/api/pets/${session?.user?.id}`, {
        method: 'DELETE',
      });
      // Deletes User
      let deleteUser = await fetch(`/api/user/${session?.user?.id}`, {
        method: 'DELETE',
      });
      if (deletePetsRes.status === 200 && deleteUser.status === 200) {
        router.push('/');
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-row justify-around items-center w-fit mx-auto">
      <p className="mx-4">Delete Your Account & all pets:</p>
      <DeleteButton
        confirmButtonText="Confirm"
        buttonText="Remove Account"
        deleteFunc={deleteAccountAndPets}
      />
    </div>
  );
};

export default RemoveAccount;
