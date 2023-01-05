import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [tours,setTours] = useState([])
  const [loading,setLoading] = useState(false)

  const removeTour = (id) => {
    const newTours= tours.filter((tour) => tour.id !== id)
    return setTours(newTours)
    
  }

  const fetchTours = async () => {
    setLoading(true)
  const res= await fetch(url)
  const tours = await res.json()
  setLoading(false)
  setTours(tours)
  }

  useEffect(() => {
    fetchTours()
  },[])

if(loading){
return <Loading />
}
if(tours.length === 0) {
  return(
    <main>
      <div className='title'>
        <h2>Görüntülenecek Tur Kalmadı</h2>
      <button className='btn' onClick={()=> fetchTours()}>Turları Görüntüle</button>
      </div>
     
    </main>
  )
 }
  
return(
  <div>
   
    <Tours tours={tours} removeTour={removeTour}/>
  </div>
)
   
  
}

export default App
