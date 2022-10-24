import { useState, useEffect } from "react"

const Counter = () => {
  const [count, setCount] = useState(0)
  let id = 0

  const startCounting = () => {
    id = setInterval(() => {
      console.log("현재 카운트", count)

      // 현재 카운트가 계속 0으로 출력 됨

      setCount(count + 1)
    }, 1000)
  }

  useEffect(() => {
    if (id) {
      window.clearInterval(id)
    }
    startCounting()

    return () => window.clearInterval(id)
  }, [])

  return (
    <div>
      <h1>Counter</h1>
      <div>Current count: {count}</div>
    </div>
  )
}

export default Counter
