import { PetsView, TitleComp } from '@/components';

const page = () => {
  return (
    <div className="w-full h-full">
      <TitleComp
        position="start"
        size="calc(20px + 2.5vmin)"
        extraTextCss="text-transparent bg-clip-text bg-gradient-to-br from-primary to-cyan-400 font-semibold"
        title="Your Pets"
      />
      {/* Pets view component to see all user pets */}
      <PetsView />
    </div>
  );
};

export default page;
