import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pristinix.in"),
  title: "Pristinix | Premium Doorstep Car Detailing & Wash in Hyderabad",
  description:
    "Top-rated doorstep car wash, Teflon, Ceramic, Graphene coating, and PPF services in Hyderabad. Book your premium car care today!",
  keywords: [
    "Pristinix",
    "doorstep car wash Hyderabad",
    "car detailing",
    "ceramic coating",
    "graphene coating",
    "Jiyaguda car wash",
    "car wash near me",
    "PPF Hyderabad",
  ],
  authors: [{ name: "Pristinix" }],
  creator: "Pristinix",
  publisher: "Pristinix",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Pristinix | Premium Doorstep Car Detailing & Wash in Hyderabad",
    description:
      "Top-rated doorstep car wash, Teflon, Ceramic, Graphene coating, and PPF services in Hyderabad. Book your premium car care today!",
    url: "https://pristinix.in",
    siteName: "Pristinix Doorstep Detailing",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Pristinix Doorstep Detailing Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pristinix | Premium Doorstep Car Detailing & Wash in Hyderabad",
    description:
      "Top-rated doorstep car wash, Teflon, Ceramic, Graphene coating, and PPF services in Hyderabad. Book your premium car care today!",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://pristinix.in",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-neutral-950 text-white">{children}</body>
    </html>
  );
}
