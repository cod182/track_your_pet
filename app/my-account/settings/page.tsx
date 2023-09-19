import { DeleteButton, RemoveAccount, TitleComp } from '@/components';

const page = () => {
  return (
    <div className="flex flex-col ">
      <TitleComp
        position="start"
        size="calc(20px + 2.5vmin)"
        extraTextCss="text-transparent bg-clip-text bg-gradient-to-br from-primary to-cyan-400 font-semibold"
        title="Your Settings"
      />
      <section>
        <RemoveAccount />
      </section>
    </div>
  );
};

export default page;
