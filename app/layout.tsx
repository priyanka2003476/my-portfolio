import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Priyanka S | Full Stack .NET Developer",
  description:
    "Portfolio of Priyanka S - Full Stack .NET Developer specializing in ASP.NET Core, Blazor, SQL Server, REST APIs, JWT Authentication, Power BI, and modern web applications.",
  keywords: [
    "Priyanka S",
    ".NET Developer",
    "Full Stack Developer",
    "ASP.NET Core",
    "Blazor",
    "SQL Server",
    "REST API",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        className="
          min-h-full
          flex flex-col
          bg-[#020617]
          text-white
          overflow-x-hidden
        "
      >
        {children}
      </body>
    </html>
  );
}