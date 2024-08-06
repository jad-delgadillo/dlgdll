import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/NavBar";
import SocialNavBar from "./components/SocialNavBar";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Jorge Delgadillo",
  description: "Dangerously good creativity",
  metadataBase: new URL("https://about.alwaysjad.dev"),
  icons: {
    icon: "/favicon.ico?v=2",
  },
  openGraph: {
    title: "Alwaysjad",
    description: "Dangerously good creativity",
    url: "https://about.alwaysjad.dev",
    siteName: "Alwaysjad",
    images: {
      url: "https://res.cloudinary.com/dzepeibjw/image/upload/v1659152027/Metadata-image---alw_nrcnx6.png",
      width: 1820,
      height: 904,
      alt: "Website link image banner",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
      <meta name="google-site-verification" content="rFEuud0-eTZWn0mT2VFWfTafqMz38kXCa_ZdFOAcLa4" />
      </Head>
      <body className="bg-white">
        <NavBar />
        {children}
        <SocialNavBar />
      </body>
    </html>
  );
}
