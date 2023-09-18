'use client';
import { signIn, useSession, getProviders } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';

import { BsGoogle } from 'react-icons/bs';
import { LoadingElement, TitleComp } from '@components/index';

const ProvidersDisplay = () => {
  const [providers, setProviders] = useState<any>();

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      if (typeof response === 'object') {
        setProviders(response);
      }
    };

    setUpProviders();
  }, []);

  const { status } = useSession();
  if (status === 'unauthenticated') {
    return (
      <div>
        <TitleComp
          title="Sign In / Register with a provider below"
          size="calc(20px + 2.5vmin)"
          color="#21a7df"
          position="center"
        />
        <div className="w-full h-full flex flex-row justify-center items-center">
          {providers &&
            Object.values(providers).map((provider: any) => (
              <button
                type="button"
                key={provider.name}
                onClick={() => {
                  signIn(provider.id);
                }}
                className="w-full sm:w-[300px] h-fit flex flex-row justify-center items-center px-4 py-2 bg-white hover:bg-gray-300 rounded border-[1px] border-gray-500 transition-all ease-in duration-300"
              >
                <BsGoogle />
                <span className="ml-2">Google</span>
              </button>
            ))}
        </div>
      </div>
    );
  } else if (status === 'authenticated') {
    redirect('/my-account');
  } else {
    return <LoadingElement />;
  }
};

export default ProvidersDisplay;
