import React from 'react';

import { TitleComp, RegistrationForm, ProvidersDisplay } from '@/components';

const page = () => {
  return (
    <div className="w-full h-full max-w-[738px] mx-auto">
      <TitleComp
        title="Register"
        size="calc(20px + 4vmin)"
        color="#21a7df"
        position="center"
      />
      <RegistrationForm />
      <TitleComp
        title="Or sign in with a provider below"
        size="calc(18px + 1.5vmin)"
        color="#21a7df"
        position="center"
      />
      <ProvidersDisplay />
    </div>
  );
};

export default page;
