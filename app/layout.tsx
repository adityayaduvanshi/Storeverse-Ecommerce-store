import Footer from '@/components/footer';
import './globals.css';
import { Urbanist, Inter } from 'next/font/google';
import Navbar from '@/components/navbar';
import ModalProvider from '@/providers/modal-provider';
import ToastProvider from '@/providers/toast-provider';

const font = Urbanist({ subsets: ['latin'] });

export const metadata = {
  title: 'Storeverse - Store',
  description: 'Buy online',
};
export const revalidate = 0;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider />
        <ToastProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
