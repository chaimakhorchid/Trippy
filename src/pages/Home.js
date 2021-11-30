import { useContext } from "react";
import styled from "styled-components";
import CityCard from "../components/CityCard";
import { CitiesContext } from "../context/ListCity";

const CityContainer = styled.div`
    height: 80vh;
    margin-top: 3%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    font-family: 'Abel', sans-serif;
    
    @media (max-width: 426px) {
        display: flex;
        flex-wrap: wrap;
        height 40vh;
        margin : 30px;

      }

` 

const Home = () => {
    const { cities } = useContext(CitiesContext)

    console.log("city test",cities)

    if (!cities) {
        return <p>Chargement...</p>;
    }

  console.log(cities);

  return (
    <CityContainer>
      {cities.map((city, index) => (
        <CityCard
          key={index}
          source={city.source}
          name={city.name}
          slug={city.slug}
        />
      ))}
    </CityContainer>
  );
};

export default Home;
