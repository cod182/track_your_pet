import { Orbit } from '@uiball/loaders';

const LoadingElement = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Orbit size={100} color="#2096fe" />
    </div>
  );
};

export default LoadingElement;
