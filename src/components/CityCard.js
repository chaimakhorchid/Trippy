import { Link } from "react-router-dom";
import styled from "styled-components";


const CityCard = (props) => {
 
  const Card = styled.div`
    background-color: #b7094c;
    border-radius: 2.5rem 2.5rem 2.5rem 2.5rem;
    width: 25%;
    height: 250px;
    margin: 2% 2%;
    text-align: center;
    :hover {
      background-color: #0091AD;
      box-shadow: 0 0 10px #ADE8F4;
    }

    div {
      background: url("https://trippy-konexio.herokuapp.com/${props.source}")
        no-repeat center/cover;
      height: 75%;
      width: 100%;
      background-position: bottom;
      border-radius: 2.5rem 2.5rem 0 0;
    }

    p {
      font-size: 1.25rem;
      fontfamily: " Sans SC', sans-serif";
      margin-top: 10px;
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
