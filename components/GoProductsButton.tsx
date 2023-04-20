"use client"

import { useRouter } from "next/navigation"

export default function GoProductsButton() {
  const router = useRouter()

  return (
    <button className="bg-blue-600" onClick={() => router.push("/products")}>
      제품 페이지로 이동
    </button>
  )
}
