import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local'
import StoreProvider from "./StoreProvider";
import { ToastContainer } from 'react-toastify';
const myFont = localFont( {
  src: 'fonts/Epilogue-Regular.ttf',
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
        className={ `${ myFont.className }` }
      >
        <ToastContainer autoClose={ 2000 } />
        <StoreProvider>

          { children }
        </StoreProvider>
      </body>
    </html>
  );
}
