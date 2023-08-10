import Navbar from '@/components/navbar/navbar';
import './globals.css';
import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

const urbanist = Urbanist({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Store',
  description: 'Ecommerce app project',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <div>
          <Navbar />
          <Toaster />
          {children}
        </div>
      </body>
    </html>
  );
}
