'use client';
import { TitleComp, ProvidersDisplay } from '@/components';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

const page = () => {
  const { status } = useSession();

  switch (status) {
    case 'unauthenticated':
      return (
        <div className="w-full h-full max-w-[738px] mx-auto">
          <TitleComp
            title="Sign In / Register with a provider below"
            size="calc(20px + 2.5vmin)"
            color="#21a7df"
            position="center"
          />
          <ProvidersDisplay />
        </div>
      );
    case 'loading':
      return (
        <div className="w-full h-full flex flex-col justify-center items-center">
          <p className="my-4">Checking login status</p>
        </div>
      );

    case 'authenticated':
      redirect('/my-account');

    default:
      redirect('/my-account');
  }
};

export default page;
