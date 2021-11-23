import { useContext } from "react";
import styled from "styled-components";
import CityCard from "../components/CityCard";
import { CityContext } from '../context/ListCity'

const CityContainer = styled.div`
  height: 100vh;
  width: 100%;
` 

const Home = () => {
    const { city } = useContext(CityContext)

    console.log(city)

    return (
        <CityContainer>
            <h2>City's</h2>
            {city.map(city => (
                <CityCard key={city.id} source={city.source}/>
            )
            )}
        </CityContainer>
    )
}

export default Home