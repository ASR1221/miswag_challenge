import './globals.css';
import type { Metadata } from 'next';
import { Volkhov, Poppins } from 'next/font/google';

const volkhov = Volkhov({
  subsets: ['latin'],
  weight: ["400", "700"],
  variable: "--font-header",
  preload: true,
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["400", "700"],
  variable: "--font-body",
  preload: true,
});

export const metadata: Metadata = {
  title: 'Miswag Challenge',
  description: 'Web app for Miswag Jr. front end application',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en">
    <body className={`${volkhov.variable} ${poppins.variable}`}>{children}</body>
  </html>;
}
