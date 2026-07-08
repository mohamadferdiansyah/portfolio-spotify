import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Topbar from "@/components/layout/topbar";
import SpotifySidebar from "@/components/layout/spotify-sidebar";
import NowPlayingBar from "@/components/layout/now-playing-bar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Portfolio Spotify UI",
  description: "Personal portfolio with Spotify-inspired UI",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans bg-black text-white antialiased overflow-hidden`}>
        <div className="h-screen w-screen bg-black p-2">
          {/* FULL TOPBAR */}
          <div className="h-16">
            <Topbar />
          </div>

          {/* MIDDLE: SIDEBAR + MAIN */}
          <div className="mt-2 flex h-[calc(100%-64px-8px-88px)] gap-2">
            <SpotifySidebar />

            <main className="flex-1 overflow-hidden rounded-xl bg-[#121212]">
              <div className="h-full overflow-y-auto no-scrollbar">{children}</div>
            </main>
          </div>

          {/* FULL NOW PLAYING */}
          <div className="mt-2 h-[88px]">
            <NowPlayingBar />
          </div>
        </div>
      </body>
    </html>
  );
}