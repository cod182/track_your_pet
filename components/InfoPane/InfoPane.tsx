import { infoSquareProps } from '../../types';
import { infoSquaresData } from '../../constants/InfoPane';
import { InfoSquare } from '..';

const InfoPane = () => {
  return (
    <div className="grid justify-center items-center grid-cols-1 xxs:grid-cols-2 xs:grid-cols-3 gap-2 py-4 mx-auto w-full px-4">
      {infoSquaresData.map(({ id, icons, text }: infoSquareProps) => {
        return <InfoSquare id={id} icons={icons} text={text} />;
      })}
    </div>
  );
};

export default InfoPane;
