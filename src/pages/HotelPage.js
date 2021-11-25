import { useEffect, useState } from 'react'
import styled from 'styled-components';
import { useParams } from 'react-router';


import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { AiFillStar,  AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import HotelMap from '../components/HotelMap';
import ArrayImg from '../components/ArrayImg'

const HotelStars = styled.div `
display: flex;
justify-content: flex-start;
`

const HotelPage = (props) => {

  const [favIcon, setFavIcon] = useState(false) 
  const [ infoHotel, setInfoHotel ] = useState(null)
  const {id} = useParams()
  

useEffect(() => {
    fetch(`https://trippy-konexio.herokuapp.com/api/hotels/${id}`)
    .then(response => response.json())
    .then(data => {
        setInfoHotel(data.result)
        // console.log(data)
    })
}, [])

//  console.log(center)
    if (!infoHotel) {
        return <p>Chargement en cours</p>
    }

    return (
        <>
            <div>
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
                    <AiOutlineHeart size={24}/>
                    ) : (
                    <AiFillHeart size={24}/>
                    )}    
                </div>
            </div>
            <div>
                <div style={{ display: "flex", justifyContent:"space-around"}}>
                    <div>
                        <Carousel>
                            {infoHotel.pictures.map(photos => {
                                // console.log("images",infoHotel.pictures)
                                // console.log("photo", photos)
                                var src = ArrayImg.includes(photos)
                                // var src = infoHotel.pictures.find(picture => ArrayImg.includes(picture))
                                console.log("src", src)
                                if(src){
                                    src=`https://trippy-konexio.herokuapp.com/${photos}`
                                } else {
                                    src=`https://media.istockphoto.com/vectors/hotel-room-summer-poster-suitcases-by-the-sea-the-beginning-of-the-vector-id1140467460?k=20&m=1140467460&s=612x612&w=0&h=TUDy8shxRenclm1fqDcvA7E9cFqzTHG9yVKpjtRRlHE=`
                                }
                                    return (
                                    
                                            <div style={{ width: "100%", height:"100%", }}>
                                                <img src={src} style={{ height: "100%" }} alt={infoHotel.name} />
                                            </div>
                                        
                                    )
                            })}
                        </Carousel>
                    </div>
                </div>
                <HotelMap
                    hotels={[infoHotel]}
                    center={infoHotel.location}
                />
            </div>

        </>
     
 )
} 

export default HotelPage;
