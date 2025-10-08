import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Jyothir Ayush Mission Trust',
  description: 'Empowering communities through education, healthcare, and social welfare.',
  keywords: ['charity', 'trust', 'non-profit', 'education', 'healthcare', 'Jyothi Rayush Mission'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-800">{children}</body>
    </html>
  )
}
