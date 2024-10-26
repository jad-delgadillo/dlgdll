import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/NavBar";
import SocialNavBar from "./components/SocialNavBar";
import Head from "next/head";
import { NavbarHeightProvider } from "./components/NavbarHeightContext";

  export const metadata: Metadata = {
    title: "alwaysjad",
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
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Alwaysjad",
      description: "Dangerously good creativity",
      images: [
        "https://res.cloudinary.com/dzepeibjw/image/upload/v1659152027/Metadata-image---alw_nrcnx6.png",
      ],
    },
  };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NavbarHeightProvider>
      <html lang="en">
        <head>
        </head>
        <body className="bg-white lg:max-w-[2000px] w-screen mx-auto">
          <NavBar />
          {children}
          <SocialNavBar />
        </body>
      </html>
    </NavbarHeightProvider>
  );
}
