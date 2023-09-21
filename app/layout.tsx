import { Metadata } from 'next';

import './styles/globals.css';
import { Footer, Nav, Provider } from '@/components';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'TrackYourPet',
  description: 'Community driven pet tracking',
  generator: 'Next.js',
  applicationName: 'TrackYourPet',
  referrer: 'origin-when-cross-origin',
  keywords: ['pet', 'dog', 'cat', 'tracking', 'tracker', 'safety'],
  authors: [
    { name: 'Codie Stephens-Evans', url: 'https://track-your-pet.vercel.app/' },
  ],
  creator: 'Codie Stephens-Evans',
  publisher: 'Codie Stephens-Evans',
  openGraph: {
    title: 'TrackYourPet',
    description: 'A subscription free way to keep track of you pet.',
    url: 'https://track-your-pet.vercel.app/',
    siteName: 'TrackYourPet',
    images: [
      {
        url: 'https://track-your-pet.vercel.app/assets/images/social-card.png',
        width: 600,
        height: 800,
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
};

const RootLayout = ({ children }: { children: any }) => (
  <html lang="en">
    <head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="apple-mobile-web-app-title" content="TrackYourPet" />
      <meta name="application-name" content="TrackYourPet" />
      <meta name="msapplication-TileColor" content="#00aba9" />
      <meta name="theme-color" content="#ffffff" />

      {/* Facebook Meta Tags */}
      <meta property="og:url" content="https://track-your-pet.vercel.app" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="TrackYourPet" />
      <meta
        property="og:description"
        content="A subscription free way to keep track of you pet."
      />
      <meta
        property="og:image"
        content="https://track-your-pet.vercel.app/assets/images/social-card.png"
      />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="codie.uk" />
      <meta
        property="twitter:url"
        content="https://track-your-pet.vercel.app"
      />
      <meta name="twitter:title" content="TrackYourPet" />
      <meta
        name="twitter:description"
        content="A subscription free way to keep track of you pet."
      />
      <meta
        name="twitter:image"
        content="https://track-your-pet.vercel.app/assets/images/social-card.png"
      />
    </head>
    <body className="max-w-[1280px] mx-auto h-auto bg-fixed">
      <Provider>
        <Nav />
        <main style={{ minHeight: 'calc(100vh - 218px' }}>{children}</main>
        <Footer />
      </Provider>
    </body>
  </html>
);

export default RootLayout;
