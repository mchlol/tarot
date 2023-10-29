import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';
import ShowCards from './ShowCards';

function App() {
  
  const [num, setNum] = useState(1);
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect( () => {

    console.log('use effect running')
    setLoading(true);

    axios.get(`https://tarot-api-3hv5.onrender.com/api/v1/cards/random?n=${num}`)
    .then ( res => {
      setCards(res.data.cards);
      console.log('Res: ', res.data.cards);
      setLoading(false);
    })
    .catch( err => {
      setError(err);
      console.log('err: ',err)
      setLoading(false);
    })

  },[num]);

  function handleClick(e) {
    if (e.target.textContent.toUpperCase() === 'ALL') {
      setNum(0);
    } else {
      setNum(e.target.textContent);
    }
  }


  return (
    <>
    {
      loading
      ? <p>Loading</p>
      :
        <main>
          <header>
            <h1>✨ Tarot ✨</h1>
            <h3>How many cards would you like?</h3>
            <div className="btn-container">
              <button onClick={handleClick}>1</button>
              <button onClick={handleClick}>3</button>
            </div>
          </header>

          <ShowCards num={num} cards={cards}/>

        </main>
    }
      
    </>
  )
}

export default App
