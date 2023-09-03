'use client';
import { signIn, useSession, getProviders } from 'next-auth/react';
import { useEffect, useState } from 'react';

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
              className="w-full sm:w-[300px] h-fit px-4 py-2 bg-orange-400 hover:bg-orange-300 rounded"
            >
              Sign in
            </button>
          ))}
      </div>
    </div>
  );
};

export default ProvidersDisplay;
