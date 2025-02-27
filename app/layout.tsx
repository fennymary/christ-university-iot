import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Advanced Research For Industrial IoT',
  description: 'Advanced Research For Industrial IoT',
  generator: 'christ-university-iot',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
