import Footer from '@/components/footer';
import './globals.css';
import { Urbanist } from 'next/font/google';
import Navbar from '@/components/navbar';
import ModalProvider from '@/providers/modal-provider';
import ToastProvider from '@/providers/toast-provider';

const font = Urbanist({ subsets: ['latin'] });

export const metadata = {
  title: 'Slicker - Online Shopping for everyone',
  description:
    'Unleash your shopping desires! Explore our online store for a wide range of products. From fashion to electronics, find what you need with ease. Shop now!',
  authors: [
    { name: 'Aditya Yaduvanshi', url: 'https://adityayads.vercel.app' },
  ],
  keywords: 'ecommerce,online shopping,shopping, shirts,shoes,women,men',
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
