import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import ArrayImg from "../components/ArrayImg";


const Carrousels = (props) => {
  const src = props.image.find((picture) => ArrayImg.includes(picture));

  return (
    <CarouselProvider
      naturalSlideWidth={125}
      naturalSlideHeight={100}
      totalSlides={props.image.length}
    >
      <Slider>
        {props.image.map((picture, index) =>
          picture === src ? (
            <Slide index={index}>
              <img
                src={`https://trippy-konexio.herokuapp.com/${picture}`}
                alt={picture}
              />
            </Slide>
          ) : (
            <Slide index={index}>
              <img
                src="https://trippy-konexio.herokuapp.com//img/hotels/10541730_61.jpg"
                alt="imagepardefault"
              />
            </Slide>
          )
        )}
      </Slider>
      <ButtonBack style={{borderRadius: "10px", border: "solid 2px #b7094c", background: "#b7094c", padding: "7px 20px", marginRight: "7px", color:"white"}}>Back</ButtonBack>
      <ButtonNext style={{borderRadius: "10px", border: "solid 2px #b7094c", background: "#b7094c", padding: "7px 20px", color:"white"}}>Next</ButtonNext>
    </CarouselProvider>
  );
};
export default Carrousels;

