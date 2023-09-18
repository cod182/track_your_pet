import { TitleComp, ProvidersDisplay, AuthCheck } from '@/components';
import { useSession } from 'next-auth/react';

const page = () => {
  return (
    <>
      <div className="w-full h-full max-w-[738px] mx-auto">
        <ProvidersDisplay />
      </div>
    </>
  );
};

export default page;
