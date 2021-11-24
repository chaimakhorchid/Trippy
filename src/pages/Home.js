import { useContext } from "react";
import styled from "styled-components";
import CityCard from "../components/CityCard";
import { CityContext } from '../context/ListCity'

const CityContainer = styled.div`

    height: 80vh;
    margin-top: 2%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    font-family: 'Abel', sans-serif;   

` 

const Home = () => {
    const { city } = useContext(CityContext)

    console.log(city)

    return (

        <CityContainer>
            {city.map(city => (
                <CityCard key={city.id} source={city.source} name={city.name}/>
            )
            )}
        </CityContainer>
    )
}

export default Home