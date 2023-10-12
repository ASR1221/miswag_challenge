import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Miswag Challenge',
  description: 'Web app for Miswag Jr. front end application',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en">
    <body className={inter.className}>{children}</body>
  </html>;
}
