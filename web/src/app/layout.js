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
  title: 'OcculoCommand - Hands-Free Computer Control with Eyes & Voice',
  description: 'Control your computer with just your eyes and voice. An accessibility-focused tool for individuals with mobility limitations, healthcare professionals, and researchers.',
  keywords: 'eye tracking, voice control, accessibility, hands-free computing, assistive technology',
  openGraph: {
    title: 'OcculoCommand - Hands-Free Computer Control',
    description: 'Control your computer with just your eyes and voice.',
    url: 'https://devorious.com',
    siteName: 'OcculoCommand',
    images: [
      {
        url: 'https://devorious.com/logo.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/seo/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/seo/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: '48x48', type: 'image/x-icon' },
    ],
    apple: [
      { url: '/seo/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/seo/safari-pinned-tab.svg',
        color: '#5bbad5',
      },
    ],
  },
  themeColor: '#ffffff',
  manifest: '/seo/site.webmanifest',
  other: {
    'msapplication-TileColor': '#ffffff',
    'msapplication-config': '/seo/browserconfig.xml',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
