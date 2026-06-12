import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MediErge — Your Medical Concierge",
  description:
    "Premium online telehealth platform for Men's Health, Women's Health, Skincare, and Hair. Clinician-guided, personalized healthcare delivered 100% online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
