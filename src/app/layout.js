import "./globals.css";

import { Inter } from "next/font/google";
import { PrismicPreview } from "@prismicio/next";
import clsx from "clsx";

import { repositoryName } from "@/prismicio";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

/**
 * @param {{ children: React.ReactNode }}
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={clsx(inter.className)}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"  
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Prata&family=Moon+Dance&family=Raleway:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="overflow-x-hidden antialiased">
        {children}
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
