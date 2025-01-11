import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
import localFont from 'next/font/local'
import StoreProvider from "./StoreProvider";
import { ToastContainer } from 'react-toastify';
const Poppins = localFont( {
  src: 'fonts/Poppins-SemiBold.ttf',
} )


export default function RootLayout ( {
  children,
}: Readonly<{
  children: React.ReactNode;
}> )
{
  return (
    <html className="scroll-smooth" lang="en" suppressHydrationWarning>
      <body
        className={ `${ Poppins.className } bg-white text-black` }
      >
        <ToastContainer autoClose={ 2000 } />
        <StoreProvider>

          { children }
        </StoreProvider>
      </body>
    </html>
  );
}
