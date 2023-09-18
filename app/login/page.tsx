import { TitleComp, ProvidersDisplay, AuthCheck } from '@/components';

const page = () => {
  return (
    <AuthCheck authRedirect authRedirectUrl="/my-account">
      <div className="w-full h-full max-w-[738px] mx-auto">
        <TitleComp
          title="Sign In / Register with a provider below"
          size="calc(20px + 2.5vmin)"
          color="#21a7df"
          position="center"
        />
        <ProvidersDisplay />
      </div>
    </AuthCheck>
  );
};

export default page;
