import Head from 'next/head';

import ThemeProvider from '@/providers/ThemeProvider';

import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

import './globals.css';

export const metadata = {
  title: 'Sweet Dreams',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <html lang="uk">
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <div className="page page__container">
            <Header />
            {children}
            <Footer />
          </div>
        </body>
      </html>
    </ThemeProvider>
  );
}
