import { PageFeaturedImage, InfoPane, About } from '@components/index';

import featuredImage from '@public/assets/images/featured-image.webp';

const page = () => {
  return (
    <>
      <div className="w-full max-h-[500px]">
        <PageFeaturedImage
          image={featuredImage}
          buttonText={'Get Started'}
          buttonLink={'/login'}
          overlayText="Know where your pet goes"
        />
      </div>
      <About />
      <InfoPane />
    </>
  );
};

export default page;
