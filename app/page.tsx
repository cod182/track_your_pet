import { PageFeaturedImage } from '@/components/index';

import featuredImage from '../public/assets/images/featured-image.webp';

const page = () => {
  return (
    <>
      <PageFeaturedImage image={featuredImage} />
    </>
  );
};

export default page;
