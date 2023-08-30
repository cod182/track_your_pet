import { PageFeaturedImage } from '@/components/index';

import featuredImage from '../public/assets/images/featured-image.webp';

const page = () => {
  return (
    <>
      <PageFeaturedImage
        image={featuredImage}
        buttonText={'Get Started'}
        buttonLink={'#'}
        overlayText="Know where your pet goes"
      />
    </>
  );
};

export default page;
