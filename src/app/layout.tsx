import "~/styles/globals.css";
import { ClerkProvider } from '@clerk/nextjs'

import { type Metadata } from "next";
import TopNav from "./_components/topnav";

export const metadata: Metadata = {
  title: "Coffee Time",
  description: "I learn NextJs while drinking coffee",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};



export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`font-sans flex-col gap-4`}>
          <TopNav/>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
