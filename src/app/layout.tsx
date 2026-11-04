import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { AppProviders } from "@/components/shared/app-providers";
import { metadata, viewport } from "@/config/metadata";

import "./globals.css";

export { metadata, viewport };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          className="bg-background text-foreground focus-visible:ring-ring sr-only z-50 rounded-md px-4 py-2 text-sm font-medium focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus-visible:ring-2"
          href="#main-content"
        >
          Skip to content
        </a>
        <AppProviders>
          <SiteHeader />
          <main className="flex grow flex-col" id="main-content">
            {children}
          </main>
          <SiteFooter />
        </AppProviders>
      </body>
    </html>
  );
}
