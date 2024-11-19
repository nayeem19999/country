
import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'
import Country from './Components/Country'

function App() {
  const [countries,setCountries]=useState([])

  const [singleCountry,setSingleCountry]=useState([])

  const [showImg,setShowImg]=useState([])
 useEffect(()=>{
  fetch('https://restcountries.com/v3.1/all')
  .then(res=>res.json())
  .then(data=>setCountries(data))
 },[])

function images(img){
  const next = [...showImg,img]
  setShowImg(next)
}

 function handleDetails(count){
  const next = [...singleCountry,count]
  setSingleCountry(next)
 }
  return (
   <div>
    <h2>{singleCountry.length}</h2>
    <div>
      {
        singleCountry.map(single=><h3>{single.name.common}</h3>)
      }
      <div>
        {
          showImg.map(show=>{
            <img height={'100px'} width={'100px'} src={show.flags.png}></img>
            
          })
        }
      </div>
    </div>
      <h1>ajk abr notun kore world tour dibo</h1>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'30px'}}>
        {
          countries.map(country=><Country images={images} handleDetails={handleDetails} key={country.cca3}  country={country}></Country>)
        }
      </div>
   </div>
  )
}

export default App
