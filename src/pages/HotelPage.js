import { useEffect, useState } from 'react'

const HotelPage = () => {
  const [ infoHotels, setInfoHotels ] = useState([])

  // useEffect(() => {
  //   fetch(`https://trippy-konexio.herokuapp.com/api/hotels/${id}`)
  //   .then(res => res.json)
  //   .then(data => 
  //     setInfoHotels(data)
  //   )
  // })
 
  // console.log(infoHotels)

  return (
   <>
   <section>
      <div>
        <p>Slider</p>
      </div>

      <div>
        <h1>Hotel name</h1>
        <div>
          <div>
            <i>Star</i>
            <i>Star</i>
            <i>Star</i>
            <i>Star</i>
            <i>Star</i>
          </div>
          <i>Heart</i>
        </div>
      </div>

      <div>
        <p>Address : hotel's address </p>
        
      </div>
   </section>

   </>
 )
}

export default HotelPage