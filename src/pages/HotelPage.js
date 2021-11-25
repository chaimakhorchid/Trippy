import { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styled from 'styled-components';
import { AiFillStar,  AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useParams } from 'react-router';
import GoogleMapReact from "google-map-react";
import HotelMap from '../components/HotelMap'

const HotelTitle = styled.div `
`
const HotelStars = styled.div `
display: flex;
justify-content: flex-start;
`


const HotelPage = (props) => {
  const [favIcon, setFavIcon] = useState(false) 
  const [ infoHotel, setInfoHotel ] = useState({})
  const id = useParams()



// console.log(id)

  useEffect(() => {
    fetch(`https://trippy-konexio.herokuapp.com/api/hotels/${id.id}`)
    .then(response => response.json())
    .then(data => {
      setInfoHotel(data.result)
      // console.log(data)
    })
  }, [id])

  return (

   <>
   <section>
      <div>
        
        <HotelTitle>
          <h4>{infoHotel.name}</h4>
          <p>{infoHotel.address}</p>
          <h2>{infoHotel.price}€</h2>
          <HotelStars>
              {[...Array(infoHotel.stars)].map((i) => 
                      <AiFillStar 
                          size={14}
                          color={"yellow"}
                      />
              )}
          </HotelStars>
          <div
                        onMouseEnter={() => {
                            setFavIcon(true)
                        }}
                        onMouseLeave={() => {
                            setFavIcon(false)
                        }}
                    > Favorites
                        {!favIcon ? (
                            <AiOutlineHeart
                                size={24}
                            />
                        ) : (
                            <AiFillHeart
                                size={24}
                            />
                        )}    
                    </div>
        </HotelTitle>
        <div>
          <div style={{ display: "flex", justifyContent:"space-around"}}>
            <div>
              <Carousel>
                  <div style={{ width: "100%", height:"100%"}}>
                      <img src="https://trippy-konexio.herokuapp.com/img/hotels/10066892_18.jpg" style={{ width: "100%"}} alt="image"/>
                      <p className="legend">chambre</p>
                  </div>
                  <div style={{ width: "100%", height:"100%"}}>
                      <img src="https://trippy-konexio.herokuapp.com//img/hotels/10541730_61.jpg" style={{ width: "100%"}} alt="image1"/>
                      <p className="legend">chambre</p>
                  </div>
                  <div style={{ width: "100%", height:"100%"}}>
                      <img src="https://trippy-konexio.herokuapp.com/img/hotels/10066892_31.jpg" style={{ width: "100%"}} alt="image2"/>
                      <p className="legend">view</p>
                  </div>
                  <div style={{ width: "100%", height:"100%"}}>
                      <img src="https://trippy-konexio.herokuapp.com/img/hotels/10319203_19.jpg" style={{ width: "100%"}} alt="image3"/>
                      <p className="legend">view</p>
                  </div>
                  <div style={{ width: "100%", height:"100%"}}>
                      <img src="https://trippy-konexio.herokuapp.com/img/hotels/10319203_2.jpg" style={{ width: "100%"}} alt="image6"/>
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
        </div>
        <HotelMap />
      </div>
   </section>

   </>
 ) 
} 

export default HotelPage;
