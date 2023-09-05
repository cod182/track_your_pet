'use client';
import { useSession } from 'next-auth/react';

import { TitleComp, DigitalDateTimeDisplay } from '@/components';

const UserWelcomeArea = () => {
  const session = useSession();

  return (
    <div className="flex flex-col sm:flex-row justify-between flex-wrap px-4">
      <div className="flex flex-row w-full sm:w-[80%] h-fit">
        <TitleComp
          position="start"
          title={`Welcome ${session.data?.user?.name}!`}
          size="calc(20px + 2.5vmin)"
          extraTextCss="text-transparent bg-clip-text bg-gradient-to-bl from-primary to-cyan-400 font-semibold"
        />
      </div>
      <div className="w-full sm:w-[20%]">
        <DigitalDateTimeDisplay />
      </div>
    </div>
  );
};

export default UserWelcomeArea;
