import type { Metadata } from "next";
import { Dancing_Script, Inter } from "next/font/google";
import "./globals.css";
import { TITLE_OG } from "@/utils/common";

const dancing = Dancing_Script({ subsets: ["vietnamese"] });

export const metadata: Metadata = {
  title: `${TITLE_OG} ❤️`,
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
          href="/images/avatar.jpg"
          sizes="any"
          style={{ borderRadius: "9999px", overflow: "hidden" }}
        />
      </head>
      <body className={dancing.className}>{children}</body>
    </html>
  );
}
