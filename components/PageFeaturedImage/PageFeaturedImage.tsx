import Image from 'next/image';
import Link from 'next/link';

declare interface FeaturedProps {
  image: string;
  buttonText: string;
  buttonLink: string;
}

const PageFeaturedImage = ({
  image,
  buttonText,
  buttonLink,
}: FeaturedProps) => {
  return (
    <>
      <div className="w-full max-h-[400px] h-auto bg-transparent relative">
        {buttonText && (
          <div className="absolute right-[20px] bottom-[20px] md:right-[40px] md:bottom-[40px]">
            <Link
              href={buttonLink}
              className="hidden sm:flex w-auto h-auto py-2 px-4 font-normal bg-primary rounded-xl text-[15px] sm:text-md md:text-lg hover:bg-secondary shadow-xl hover:shadow-2xl transition-all ease-in-out duration-400"
            >
              {buttonText}
            </Link>
          </div>
        )}
        <Image
          src={image}
          alt="Featured Image"
          sizes="(max-width: 768px) 100vw"
          className="object-cover h-auto rounded-t-md"
        />
      </div>
      {buttonText && (
        <Link
          href={buttonLink}
          className="block sm:hidden my-2 mx-auto w-[90%] h-fit text-center font-semibold py-1 px-4 bg-primary rounded-xl text-[15px] sm:text-md md:text-lg hover:bg-secondary shadow-xl hover:shadow-2xl transition-all ease-in-out duration-400"
        >
          {buttonText}
        </Link>
      )}
    </>
  );
};

export default PageFeaturedImage;
