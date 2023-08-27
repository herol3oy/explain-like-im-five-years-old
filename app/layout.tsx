import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Explain like I&aposm five years old 👶',
  description:
    'A super smart app that explain topic and terms like we are 5 years old!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body
        className={`${inter.className} h-screen bg-gradient-to-r from-slate-900 to-gray-900`}
      >
        <div className="flex-1">{children}</div>
        <footer className="flex justify-center gap-6 py-12">
          <Link
            href="https://github.com/herol3oy/explain-like-im-five-years-old"
            target="_blank"
            className="cursor-pointer text-neutral-600 transition hover:-translate-y-1"
          >
            <FaGithub fontSize={26} />
          </Link>
        </footer>
      </body>
    </html>
  )
}
