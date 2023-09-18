import { Metadata } from 'next';

import './styles/globals.css';
import { Nav } from '@/components';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'TrackYourPet',
  description: 'Community driven pet tracking',
  generator: 'Next.js',
  applicationName: 'Codie | Portfolio',
  referrer: 'origin-when-cross-origin',
  keywords: ['pet', 'dog', 'cat', 'tracking', 'tracker', 'safety'],
  authors: [{ name: 'Codie Stephens-Evans', url: 'https://codie.uk' }],
  creator: 'Codie Stephens-Evans',
  publisher: 'Codie Stephens-Evans',
  openGraph: {
    title: 'TrackYourPet',
    description: 'Community driven pet tracking',
    url: 'https://codie.uk',
    siteName: 'TrackYourPet',
    images: [
      {
        url: 'https://codie.uk/assets/images/social-card.png',
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
      {/* <link
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
      /> */}
      {/* <link rel="manifest" href="/site.webmanifest" /> */}
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ff9800" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
      <meta name="theme-color" content="#000000" />

      {/* Facebook Meta Tags */}
      <meta property="og:url" content="https://codie.uk" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Codie | Web Developer" />
      <meta property="og:description" content="React | Next | JS | TS" />
      <meta
        property="og:image"
        content="https://codie.uk/assets/images/social-card.png"
      />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="codie.uk" />
      <meta property="twitter:url" content="https://codie.uk" />
      <meta name="twitter:title" content="Codie | Web Developer" />
      <meta name="twitter:description" content="React | Next | JS | TS" />
      <meta
        name="twitter:image"
        content="https://codie.uk/assets/images/social-card.png"
      />
    </head>
    <body className="max-w-[1280px] mx-auto">
      <Nav />
      <main>{children}</main>
    </body>
  </html>
);

export default RootLayout;
