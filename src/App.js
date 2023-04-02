import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(20);

  useEffect(()=> {
    if (count !== 0 && count < 3)  {
      setAge(age + 1)
    }
  }, [count])

  const addCount = () => {
    setCount(count + 1)
    console.log(count);
  }

  return (
    <div className="App">
      <div>안녕하십니까 전 {age}살 입니다.</div>
      <button onClick={addCount}>누르면 1살 먹기</button>
    </div>
  );
}

export default App;
