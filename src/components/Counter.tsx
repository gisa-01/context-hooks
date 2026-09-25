import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Count changed: ', count)
  }, [count]);

  return (
    <div className="flex flex-col pl-5 items-center">
      <p className="mb-5 bg-blue-100 p-2 rounded-xl font-semibold">
        {count}
      </p>
      <div className="flex gap-5">
        <button 
        className="px-5 bg-blue-500 text-white rounded-lg text-center"
        onClick={() => setCount(count+1)}>
        Add 1
      </button>

      <button 
        className="px-5 bg-blue-500 text-white rounded-lg text-center"
        onClick={() => setCount(count-1)}>
        Sub 1
      </button>

      <button 
        className="px-5 bg-blue-500 text-white rounded-lg text-center"
        onClick={() => setCount(0)}>
        Reset
      </button>
      </div>
    </div>
  )
}

export default Counter