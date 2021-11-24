import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CitiesContext } from "../context/ListCity";

const CityCard = (props) => {
  const { city, setCity } = useContext(CitiesContext);

  const Card = styled.div`
    background-color: #b7094c;
    border-radius: 2.5rem 2.5rem 2.5rem 2.5rem;
    width: 350px;
    height: 250px;
    margin: 0 2%;
    text-align: center;

    div {
      background: url("https://trippy-konexio.herokuapp.com/${props.source}")
        no-repeat center/cover;
      height: 75%;
      width: 100%;
      background-position: center;
      border-radius: 2.5rem 2.5rem 0 0;
    }

    p {
      font-size: 1.25rem;
      fontfamily: " Sans SC', sans-serif";
    }
  `;

  // console.log(props)

  return (
    <>
      <Card>
        <div></div>
        <p>
          <Link
            to={`/hotel/${props.slug}`}
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
