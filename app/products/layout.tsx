import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Next13 - Blog | Products",
  description: "using next.js 13 | Products",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <nav className="flex gap-2 p-4 border-2 border-red-400 mt-2">
        <Link href="/products/cap">모자</Link>
        <Link href="/products/top">상의</Link>
        <Link href="/products/pants">바지</Link>
      </nav>
      <section>{children}</section>
    </>
  )
}
