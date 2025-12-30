import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'RydAiR BX Series - UL Listed Electrostatic Air Cleaners | Tarang Engineers',
  description: 'Professional UL-listed electrostatic air cleaners for commercial kitchens, factories, and industrial facilities. MERV 14 rated with up to 96% efficiency. RY2500BX, RY5000BX, RY7500BX, RY10000BX models available.',
  keywords: 'electrostatic air cleaner, UL listed, MERV 14, commercial kitchen, industrial air filtration, RydAiR BX, Tarang Engineers',
  authors: [{ name: 'Tarang Engineers' }],
  openGraph: {
    title: 'RydAiR BX Series - Professional Electrostatic Air Cleaners',
    description: 'UL-listed electrostatic air cleaners for commercial and industrial applications with up to 96% efficiency.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RydAiR BX Series - Professional Electrostatic Air Cleaners',
    description: 'UL-listed electrostatic air cleaners for commercial and industrial applications.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
