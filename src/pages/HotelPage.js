import { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



const DemoCarousel = () => {
 
  return (
   <>
   <section>
      <div>
        <h1>Hotel name</h1>
        <div>
        <Carousel>
                <div>
                    <img src="https://trippy-konexio.herokuapp.com/img/hotels/10066892_18.jpg" />
                    <p className="legend">chambre</p>
                </div>
                <div>
                    <img src="assets/2.jpeg" />
                    <p className="legend">salle de bain</p>
                </div>
                <div>
                    <img src="assets/3.jpeg" />
                    <p className="legend">view</p>
                </div>
            </Carousel>
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

export default DemoCarousel