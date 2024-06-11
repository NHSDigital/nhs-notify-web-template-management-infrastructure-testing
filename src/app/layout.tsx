import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './app.scss';
import { NHSNotifyHeader } from './components/molecules/header/header';
import { NHSNotifyContainer } from './components/container/container';
import { NHSNotifyFooter } from './components/molecules/footer/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Notify - Web template management',
  description: 'Template management',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <script src='lib/nhsuk-8.1.1.min.js' defer />
        <link
          rel='shortcut icon'
          href='lib/assets/favicons/favicon.ico'
          type='image/x-icon'
        />
        <link
          rel='apple-touch-icon'
          href='lib/assets/favicons/apple-touch-icon-180x180.png'
        />
        <link
          rel='mask-icon'
          href='lib/assets/favicons/favicon.svg'
          color='#005eb8'
        />
        <link
          rel='icon'
          sizes='192x192'
          href='lib/assets/favicons/favicon-192x192.png'
        />
        <meta
          name='msapplication-TileImage'
          content='lib/assets/favicons/mediumtile-144x144.png'
        />
        <meta name='msapplication-TileColor' content='#005eb8' />
        <meta
          name='msapplication-square70x70logo'
          content='lib/assets/favicons/smalltile-70x70.png'
        />
        <meta
          name='msapplication-square150x150logo'
          content='lib/assets/favicons/mediumtile-150x150.png'
        />
        <meta
          name='msapplication-wide310x150logo'
          content='lib/assets/favicons/widetile-310x150.png'
        />
        <meta
          name='msapplication-square310x310logo'
          content='lib/assets/favicons/largetile-310x310.png'
        />
      </head>
      <body suppressHydrationWarning={true}>
        <script
          type='text/javascript'
          src='lib/nhs-frontend-js-check.js'
          defer
        />
        <NHSNotifyHeader title={metadata.title?.toString()}></NHSNotifyHeader>
        <NHSNotifyContainer>{children}</NHSNotifyContainer>
        <NHSNotifyFooter></NHSNotifyFooter>
      </body>
    </html>
  );
}
