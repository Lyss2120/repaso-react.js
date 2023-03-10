import React, { useState } from 'react'

const Lifecycle = () => {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);

    useEffect(() => {
      console.log('useEffect no  dependency');
    
    })
    

  return (
    <div>
        <h1>Clicks counter1 {counter1}</h1>
        <h1>Clicks counter2 {counter2}</h1>
        <button onClick={() => setCounter1(counter1+1)}>increment counter1</button>
        <button onClick={() => setCounter2(counter2+1)}>increment counter2</button>
    </div>
  )
}

export default Lifecycle