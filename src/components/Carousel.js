
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styled from "styled-components";

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

const Carrousels = () => {
    return (
        <div>
        <div style={{ display: "flex", justifyContent:"space-around"}}>
          <div>
            <Carousel>
                <div style={{ width: "100%", height:"545px"}}>
                    <img src="https://trippy-konexio.herokuapp.com/img/hotels/10066892_18.jpg" style={{ width: "100%"}} alt="image"/>
                    <p className="legend">chambre</p>
                </div>
                <div style={{ width: "100%", height:"545px"}}>
                    <img src="https://trippy-konexio.herokuapp.com//img/hotels/10541730_61.jpg" style={{ width: "100%"}} alt="image1"/>
                    <p className="legend">chambre</p>
                </div>
                <div style={{ width: "100%", height:"545px"}}>
                    <img src="https://trippy-konexio.herokuapp.com/img/hotels/10066892_31.jpg" style={{ width: "100%"}} alt="image2"/>
                    <p className="legend">view</p>
                </div>
                <div style={{ width: "100%", height:"545px"}}>
                    <img src="https://trippy-konexio.herokuapp.com/img/hotels/10319203_2.jpg" style={{ width: "100%"}} alt="image6"/>
                    <p className="legend">view</p>
                </div>
              </Carousel>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around"}}>
            <div style={{ width: "45%", height : '50%'}}>
                <Image src="https://trippy-konexio.herokuapp.com/img/hotels/10066892_18.jpg" style={{ width: "100%", height: "80%"}}/>
            </div>
            <div style={{ width: "45%", height : '50%'}}>
                <Image src="https://trippy-konexio.herokuapp.com//img/hotels/10541730_61.jpg" style={{ width: "100%", height: "80%"}}/>
            </div>
            <div style={{ width: "45%", height : '50%'}}>
                <Image src="https://trippy-konexio.herokuapp.com/img/hotels/10066892_31.jpg" style={{ width: "100%", height: "80%"}}/>
            </div>
            <div style={{ width: "45%", height : '50%'}}>
                <Image src="https://trippy-konexio.herokuapp.com/img/hotels/10319203_2.jpg" style={{ width: "100%", height: "80%"}}/>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Carrousels