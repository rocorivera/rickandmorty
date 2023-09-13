import { useEffect, useRef, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import getRandomNumber from './utils/getRandomNumber'
import Locationinfo from './components/Locationinfo'
import Residentcard from './components/Residentcard'

function App() {

  const image= '/gif1.gif'
  const imgtitle='/rick and morty.png'

  const [inputValue, setInputValue] = useState(getRandomNumber(126))
  
  const url=`https://rickandmortyapi.com/api/location/${inputValue||'hola'}`
  const [location,getLocation,hasError]=useFetch(url)
 
  useEffect(()=>{
    getLocation()
  },[inputValue])
  
  const inputSearch =useRef()

  const handlesubmit=(e)=>{
    e.preventDefault()
    setInputValue(inputSearch.current.value.trim())
  }
  
  return (
    <div>
      <div className='RyM'>
      <div className='rym'>
      <img className='gif_rym' src={image} alt="" />
      
        <img className='title_rym' src={imgtitle} alt="" />
        </div>
        
          
      <form className='search' onSubmit={handlesubmit}>
        <input ref={inputSearch} type="text" />
        <button className='btn'> 🔍 Search</button>
      </form>
      {
        hasError
        ?<h2>❌ hey! you must provide an id from 1 to 126😥</h2>
        :(
        <>
      <Locationinfo 
      location={location}
      />
      
      <div className='cards'>
        {
          location?.residents.map(url=>(
            <Residentcard 
            key={url}
            url={url}
            />
          ))
        }
      </div>
      </>
        )
}
</div>
    </div>
  )
}

export default App
