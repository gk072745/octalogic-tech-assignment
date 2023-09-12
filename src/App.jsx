import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-blue-500 text-white p-4">
      <h1 className="text-3xl">Hello, Tailwind CSS!</h1>
    </div>
  )
}

export default App
