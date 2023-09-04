'use client';
import { signIn, useSession, getProviders } from 'next-auth/react';
import { useEffect, useState } from 'react';

import { BsGoogle } from 'react-icons/bs';

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
  return (
    <div>
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
};

export default ProvidersDisplay;
