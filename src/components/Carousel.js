
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styled from "styled-components";
import ArrayImg from "../components/ArrayImg"

const Image = styled.div `

@media (min-width: 376px) {
display: none;
}
`
const Text = styled.div `
@media (min-width: 373px) {
display: none;
}
`

const Carrousels = (props) => {

const src = props.image.find((picture) => ArrayImg.includes(picture));

    return (
        <div>
        <div style={{ display: "flex", justifyContent:"space-around", width: "100vw"}}>
          <div>
            <Carousel style={{width: "600px"}}> 
               {props.image.map((picture)=> (
                   picture === src ?(
                   <div style={{ width: "100vw", height:"545px"}}>
                      <img src ={ `https://trippy-konexio.herokuapp.com/${picture}`} style={{ width: "100%" }} alt="image"/>
                      <p className="legend">chambre</p>
                      </div>
               ) :
               (<div style={{ width: "100%", height:"545px"}}>
               <img src="https://trippy-konexio.herokuapp.com//img/hotels/10541730_61.jpg" style={{ width: "100%"}} alt="image"/>
               <p className="legend">chambre</p>
           </div>)
               ))}
              </Carousel>
          </div>
        </div>
      </div>
    )
}
export default Carrousels