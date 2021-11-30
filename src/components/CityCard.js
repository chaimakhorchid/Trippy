import { Link } from "react-router-dom";
import styled from "styled-components";


const CityCard = (props) => {
 
  const Card = styled.div`
    background-color: #b7094c;
    border-radius: 1rem;
    width: 16%;
    height: 250px;
    margin: 0 20px;
    text-align: center;

    :hover {
      background-color: #0091AD;
      border: 2px solid white;
    }

    @media (max-width: 812px) {
        margin: 5% 6%;
    }

    div {
        background : url('https://trippy-konexio.herokuapp.com/${props.source}') no-repeat center/cover;
        height: 75%;
        width: 100%;
        background-position: center;
        border-radius: 1rem 1rem 0 0;    
    }

    @media (max-width: 376px) {
        height: 50%;
        width: 90%;

    }

    p {
      font-size: 1.25rem;
      margin-top: 10px;

      @media (max-width: 812px) {
        margin-top: 0px;
    }
    }
  `;

  // console.log(props)

  return (
    <>
      <Card>
        <div></div>
        <p>
          <Link
            to={`/hotels/${props.slug}`}
            style={{
              color: "white",
              padding: "20px",
              textDecoration: "none",
              fontSize: "25px",
            }}
          >
            {props.name}
          </Link>
        </p>
      </Card>
    </>
  );
};
export default CityCard;
