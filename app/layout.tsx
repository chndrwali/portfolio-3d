import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/NavBar';
import { Settings } from '@/components/settings';
import { ThemeProvider } from '@/provider/themeProviders';

export const metadata: Metadata = {
  title: 'Candra Wali Sanjaya | Portfolio',
  description: 'Candra Wali Sanjaya | Portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          <main className="mb-10 p-5 md:p-8">{children}</main>
          <Settings />
        </ThemeProvider>
      </body>
    </html>
  );
}
