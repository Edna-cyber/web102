import { useState } from 'react'
import mimosa from './assets/images/mimosa.png'
import './App.css'

const App = () => {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  const updateCount = () => setCount(count + multiplier);

  const buyDoubleStuffed = () => {
    if (count >= 10) {
      setCount(count - 10);
      setMultiplier(multiplier * 2);
    }
  };

  const buyPartyPack = () => {
    if (count >= 100) {
      setCount(count - 100);
      setMultiplier(multiplier * 5);
    }
  };

  const buyFullFeast = () => {
    if (count >= 1000) {
      setCount(count - 1000);
      setMultiplier(multiplier * 10);
    }
  };

  
  return (
    <div className="App">
        <div className="header">
            <h1>Mimosa Selector</h1>
            <h2>Count: {count}</h2>
            <img src={mimosa} className="mimosa" alt="mimosa icon" onClick={updateCount} />
        </div>
        <div className="container">
            <div className="upgrade">
                <h3>Double Stuffed 👯‍♀️</h3>
                <p>2x per click</p>
                <button onClick={buyDoubleStuffed}>10 mimosa</button>
            </div>
            <div className="upgrade">
                <h3>Party Pack 🎉</h3>
                <p>5x per click</p>
                <button onClick={buyPartyPack}>100 mimosa</button>
            </div>
            <div className="upgrade">
                <h3>Full Feast 👩🏽‍🍳</h3>
                <p>10x per click</p>
                <button onClick={buyFullFeast}>1000 mimosa</button>
            </div>
        </div>
    </div>
  )
}

export default App
