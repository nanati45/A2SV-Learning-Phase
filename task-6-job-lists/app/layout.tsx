import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Job Listing App",
  description: "Developed by",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Epilogue:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className="font-epilogue">{children}</body>
    </html>
  );
}
