import Image from 'next/image';
import Link from 'next/link';

declare interface FeaturedProps {
  image: string;
  buttonText?: string;
  buttonLink?: string;
  overlayText?: string;
}

const PageFeaturedImage = ({
  image,
  buttonText,
  buttonLink,
  overlayText,
}: FeaturedProps) => {
  return (
    <>
      <div className="w-full h-full bg-transparent relative">
        {buttonText && (
          <div className="absolute right-[20px] bottom-[20px] md:right-[40px] md:bottom-[40px]">
            <Link
              href={buttonLink !== undefined ? buttonLink : '#'}
              className="hidden sm:flex w-auto h-auto py-2 px-4 font-normal bg-primary rounded-xl text-[15px] sm:text-md md:text-lg hover:bg-secondary shadow-xl hover:shadow-2xl transition-all ease-in-out duration-400"
            >
              {buttonText}
            </Link>
          </div>
        )}
        {overlayText && (
          <div className="absolute w-auto sm:w-[50%] top-[50%] left-[5px] sm:top-[5em] sm:left-[2em]">
            <p
              className="text-md sm:text-[2rem] text-white drop-shadow-xl"
              style={{ textSizeAdjust: 'auto' }}
            >
              {overlayText}
            </p>
          </div>
        )}
        <Image
          src={image}
          alt="Featured Image"
          sizes="(max-width: 768px) 100vw"
          className="object-cover h-auto rounded-t-md shadow-md"
        />
      </div>
      {buttonText && (
        <Link
          href={buttonLink !== undefined ? buttonLink : '#'}
          className="block sm:hidden mx-auto w-[99%] h-fit text-center font-semibold py-1 px-4 bg-primary rounded-b-xl text-[15px] sm:text-md md:text-lg hover:bg-secondary shadow-xl hover:shadow-2xl transition-all ease-in-out duration-400"
        >
          {buttonText}
        </Link>
      )}
    </>
  );
};

export default PageFeaturedImage;
