import Image, { StaticImageData } from 'next/image';

declare interface FeaturedProps {
  image: string;
}

const PageFeaturedImage = ({ image }: FeaturedProps) => {
  return (
    <div className="w-full h-[400px] bg-transparent">
      <Image
        src={image}
        alt="Featured Image"
        sizes="(max-width: 768px) 100vw"
        height={400}
        objectFit="fill"
      />
    </div>
  );
};

export default PageFeaturedImage;
