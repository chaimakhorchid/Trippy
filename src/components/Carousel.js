
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

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
                <img src="https://trippy-konexio.herokuapp.com/img/hotels/10066892_18.jpg" style={{ width: "100%", height: "80%"}}/>
                <p className="legend">chambre</p>
            </div>
            <div style={{ width: "45%", height : '50%'}}>
                <img src="https://trippy-konexio.herokuapp.com//img/hotels/10541730_61.jpg" style={{ width: "100%", height: "80%"}}/>
                <p className="legend">salle de bain</p>
            </div>
            <div style={{ width: "45%", height : '50%'}}>
                <img src="https://trippy-konexio.herokuapp.com/img/hotels/10066892_31.jpg" style={{ width: "100%", height: "80%"}}/>
                <p className="legend">view</p>
            </div>
            <div style={{ width: "45%", height : '50%'}}>
                <img src="https://trippy-konexio.herokuapp.com/img/hotels/10319203_2.jpg" style={{ width: "100%", height: "80%"}}/>
                <p className="legend">view</p>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Carrousels