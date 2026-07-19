import type { Metadata } from "next";
import "./globals.css";

import { AuthProvider } from "@/contexts/AuthContext";
import { ThemeProvider } from "@/providers";

export const metadata: Metadata = {
  title: "TNPSC MASTER AI",
  description: "Complete TNPSC Preparation Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>

        <ThemeProvider>

          <AuthProvider>

            {children}

          </AuthProvider>

        </ThemeProvider>

      </body>
    </html>
  );
}