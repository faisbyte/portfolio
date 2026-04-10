import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Mono } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${jakarta.variable} ${dmMono.variable} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: "/pic2.png", sizes: "any" },
    ],
    shortcut: "/pic2.png",
    apple: "/pic2.png",
  },
};
