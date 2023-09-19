import { TitleComp, WeatherBar } from '@/components';
import FadeIn from 'react-fade-in';

const page = () => {
  return (
    <div className="w-full h-full">
      <TitleComp
        position="start"
        size="calc(15px + 2vmin)"
        extraTextCss="text-transparent bg-clip-text bg-gradient-to-br from-primary to-cyan-400 font-semibold"
        title="The weather in your area:"
      />
      <WeatherBar />
    </div>
  );
};

export default page;
