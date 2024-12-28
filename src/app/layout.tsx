import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from 'next/font/local'
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
        { children }
      </body>
    </html>
  );
}
