import { Metadata } from "next"
import Link from "next/link"
import "./globals.css"

export const metadata: Metadata = {
  title: "Next13 - Blog",
  description: "using next.js 13",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header className="flex items-center justify-between p-6 border-b-2 border-blue-700">
          <h1 className="text-4xl">Blog</h1>
          <nav className="flex justify-between gap-3">
            <Link href="/products">Products</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}
