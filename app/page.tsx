import { PageFeaturedImage, InfoPane } from '@/components/index';

import featuredImage from '../public/assets/images/featured-image.webp';


const page = () => {
  return (
    <>
      <div className="w-full max-h-[500px]">
        <PageFeaturedImage
          image={featuredImage}
          buttonText={'Get Started'}
          buttonLink={'#'}
          overlayText="Know where your pet goes"
        />
      </div>
      <InfoPane />
    </>
  );
};

export default page;
