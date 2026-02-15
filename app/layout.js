import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dharma Web Services | Professional Website Development",
  description:
    "Affordable professional websites starting at ₹2499. Contact Dharma Web Services for premium web design.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen text-white bg-fixed bg-cover bg-center`}
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url('/bg.png')",
        }}
      >
        {children}
      </body>
    </html>
  );
}
