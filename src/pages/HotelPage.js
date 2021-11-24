import { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';
import { AiFillStar } from "react-icons/ai";

const HotelTitle = styled.div `
`
const HotelStars = styled.div `
display: flex;
justify-content: flex-start;
`


const DemoCarousel = props => {

const [ infoHotel, setInfoHotel ] = useState({})
  useEffect(() => {
    fetch(`https://trippy-konexio.herokuapp.com/api/hotels/${id}`)
    .then(response => response.json())
    .then(data => setInfoHotel(data))
  }
  )
 console.log(infoHotel);
  return (
   <>
   <section>
      <div>
        <HotelTitle>
          <h4>{infoHotel.name}</h4>
          <h2>{infoHotel.price}€</h2>
          <HotelStars>
              {[...Array(props.stars)].map((i) => 
                      <AiFillStar 
                          size={14}
                          color={"yellow"}
                      />
              )}
          </HotelStars>
        </HotelTitle>
        <div>
          <div style={{ display: "flex", justifyContent:"space-around"}}>
            <div>
              <Carousel>
                  <div style={{ width: "100%", height:"100%"}}>
                      <img src="https://trippy-konexio.herokuapp.com/img/hotels/10066892_18.jpg" style={{ width: "100%"}}/>
                      <p className="legend">chambre</p>
                  </div>
                  <div style={{ width: "100%", height:"100%"}}>
                      <img src="https://trippy-konexio.herokuapp.com//img/hotels/10541730_61.jpg" style={{ width: "100%"}}/>
                      <p className="legend">chambre</p>
                  </div>
                  <div style={{ width: "100%", height:"100%"}}>
                      <img src="https://trippy-konexio.herokuapp.com/img/hotels/10066892_31.jpg" style={{ width: "100%"}}/>
                      <p className="legend">view</p>
                  </div>
                  <div style={{ width: "100%", height:"100%"}}>
                      <img src="https://trippy-konexio.herokuapp.com/img/hotels/10319203_19.jpg" style={{ width: "100%"}}/>
                      <p className="legend">view</p>
                  </div>
                  <div style={{ width: "100%", height:"100%"}}>
                      <img src="https://trippy-konexio.herokuapp.com/img/hotels/10319203_2.jpg" style={{ width: "100%"}}/>
                      <p className="legend">view</p>
                  </div>
                </Carousel>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around"}}>
              <div style={{ width: "45%"}}>
                  <img src="https://trippy-konexio.herokuapp.com/img/hotels/10066892_18.jpg" style={{ width: "100%", height: "80%"}}/>
                  <p className="legend">chambre</p>
              </div>
              <div style={{ width: "45%"}}>
                  <img src="https://trippy-konexio.herokuapp.com//img/hotels/10541730_61.jpg" style={{ width: "100%", height: "80%"}}/>
                  <p className="legend">salle de bain</p>
              </div>
              <div style={{ width: "45%"}}>
                  <img src="https://trippy-konexio.herokuapp.com/img/hotels/10066892_31.jpg" style={{ width: "100%", height: "80%"}}/>
                  <p className="legend">view</p>
              </div>
              <div style={{ width: "45%"}}>
                  <img src="https://trippy-konexio.herokuapp.com/img/hotels/10319203_19.jpg" style={{ width: "100%", height: "80%"}}/>
                  <p className="legend">view</p>
              </div>
              <div style={{ width: "45%"}}>
                  <img src="https://trippy-konexio.herokuapp.com/img/hotels/10319203_2.jpg" style={{ width: "100%", height: "80%"}}/>
                  <p className="legend">view</p>
              </div>
            </div>
          </div>
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