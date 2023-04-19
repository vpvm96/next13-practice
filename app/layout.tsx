import { Metadata } from "next"
import Link from "next/link"
import "./globals.css"
import { Open_Sans, Nanum_Gothic } from "next/font/google"

const openSans = Open_Sans({ subsets: ["latin"] })
const nanumGothic = Nanum_Gothic({
  weight: "700",
  subsets: ["latin"],
})

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
    <html lang="en" style={openSans.style}>
      <body>
        <header className="flex items-center justify-between p-6 border-b-2 border-blue-700">
          <h1 className="text-4xl" style={nanumGothic.style}>
            Practice Note
          </h1>
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
