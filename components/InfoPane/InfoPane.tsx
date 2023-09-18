import { infoSquareProps } from '../../types';
import { howItWorks, infoSquaresData } from '../../constants/InfoPane';
import { InfoSquare, TitleComp } from '..';

const InfoPane = () => {
  return (
    <>
      <div className="grid justify-center items-center grid-cols-1 xxs:grid-cols-2 xs:grid-cols-3 gap-2 py-4 mx-auto w-full px-4">
        {infoSquaresData.map(({ id, icons, text }: infoSquareProps) => {
          return <InfoSquare id={id} icons={icons} text={text} />;
        })}
      </div>
      <TitleComp
        title="How does it work?"
        size="max(6vmin, 20px)"
        color="rgb(50 147 235)"
        position="center"
      />
      <div className="grid justify-center items-center grid-cols-1 xxs:grid-cols-2 xs:grid-cols-3 gap-2 py-4 mx-auto w-full px-4">
        {howItWorks.map(({ id, icons, text }: infoSquareProps) => {
          return <InfoSquare id={id} icons={icons} text={text} />;
        })}
      </div>
    </>
  );
};

export default InfoPane;
