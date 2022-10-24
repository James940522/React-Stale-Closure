import { useEffect } from "react"

const Counter = () => {
  useEffect(() => {
    console.log("counter 컴포넌트")
  }, [])

  return <div>counter</div>
}

export default Counter
