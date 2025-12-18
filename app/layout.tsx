import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AdCraze Advertising | ROI-Driven Growth",
  description:
    "AdCraze is the Ahmedabad digital agency engineering ROI through data-driven Google Ads, Meta Ads, and high-converting funnels."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
