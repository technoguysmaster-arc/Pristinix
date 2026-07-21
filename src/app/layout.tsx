import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pristinix – Premium Doorstep Car Detailing & Wash",
  description:
    "Experience luxury car care at your doorstep. Pristinix offers premium car wash and detailing services in Hyderabad. Book online via WhatsApp.",
  keywords:
    "car wash, car detailing, doorstep car wash, car cleaning, Pristinix, luxury car care, Hyderabad",
  openGraph: {
    title: "Pristinix – Premium Doorstep Car Detailing",
    description: "Experience luxury car care at your doorstep.",
    type: "website",
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
