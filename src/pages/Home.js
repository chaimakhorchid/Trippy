import { useContext } from "react";
import styled from "styled-components";
import CityCard from "../components/CityCard";
import { CitiesContext } from "../context/ListCity";
import HeaderImg from "../assets/hotel2.png"

const Header = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  background-color: #5C4D7D;
  border-bottom: 1px solid white;

  @media (max-width: 376px) {
    display: none;
}
`
const HeaderText = styled.h1`
  text-align: center;

  h1 {
    font-size: 64px;
    font-family: "Alegreya Sans SC", sans-serif;
  }

  h5 {
    font-size: 25px;
    font-family: 'Abel', sans-serif;
  }
  
`
const Title2 = styled.h2 `
  text-align: center;
  margin-top: 20px;
  font-size: 28px;
  font-family: "Alegreya Sans SC", sans-serif;

`
const CityContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-family: 'Abel', sans-serif;
  
  @media (max-width: 376px) {
    display: flex;
    flex-wrap: wrap;
    height 50vh;
    margin : 10px;
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
    <div>
      <Header>
        <HeaderText>
          <h1>find your hotel</h1>
          <h5>All around the world</h5>
        </HeaderText>
        <img src={HeaderImg} style= {{ width: "350px" }} alt="find hotel"/>
      </Header>
      <Title2>Populars destinations</Title2>
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
    </div>
  

  );
};

export default Home;
