import type { Metadata } from "next";
import { Dancing_Script, Inter } from "next/font/google";
import "./globals.css";

const dancing = Dancing_Script({ subsets: ["vietnamese"] });

export const metadata: Metadata = {
  title: "Bé Lê Hiền Diệu ( Bé Xí )",
  description: "Welcome to my life",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/images/avatar.png"
          sizes="any"
          style={{ borderRadius: 9999, overflow: "hidden" }}
        />
      </head>
      <body className={dancing.className}>{children}</body>
    </html>
  );
}
