import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '../components/ui/toaster';
import Header from '../components/common/Header';

export const metadata: Metadata = {
  title: 'SVKFACTS - Interesting Facts Daily',
  description: 'Discover 500 interesting facts, one new fact each day, across various categories like finance, health, tech, and more. AdSense compliant content.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow flex flex-col">
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
