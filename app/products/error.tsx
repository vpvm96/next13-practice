"use client"

import { useEffect } from "react"

type Props = {
  error: Error
  reset: () => void
}

export default function ProductsError({ error, reset }: Props) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="text-6xl">
      <p>에러가 발생했습니다.</p>
      <button onClick={() => reset()}>다시 시도</button>
    </div>
  )
}
