"use client"

import { useState } from "react"

export default function Counter() {
  const [count, setCount] = useState<number>(0)
  return (
    <>
      <p>현재 카운트: {count}</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setCount((num) => num + 1)}
      >
        숫자 증가
      </button>
    </>
  )
}
