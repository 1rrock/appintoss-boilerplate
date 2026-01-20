import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { AppProviders } from '@/client/shared/providers';
import { TabNavigation } from '@/client/shared/components/footer/tab-navigation';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Toss Mini App',
  description: 'Toss Mini App Boilerplate',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AppProviders>
          <div className="min-h-screen flex flex-col bg-[#f2f4f6]">
            <main
              className="flex-1"
              style={{ paddingBottom: 'calc(60px + env(safe-area-inset-bottom))' }}
            >
              {children}
            </main>
            <TabNavigation />
          </div>
        </AppProviders>
      </body>
    </html>
  );
}
