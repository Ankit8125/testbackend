import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

// from server.js

function App() {
  const [jokes, setJokes] = useState([]) // initially empty array

  useEffect(()=>{
    axios.get('/api/jokes') // here api will automatically get appended 
    .then((response)=>{
      setJokes(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  })
  return (
    <>
      <h1>Ankit Verma</h1>
      <p>JOKES: {jokes.length}</p>
      {
        jokes.map((joke,index)=>(
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        )) // if we use '{}' then we have to return something, that's why it was not loading before
      }
    </>
  )
}

export default App
