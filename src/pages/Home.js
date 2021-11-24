import { useContext } from "react";
import styled from "styled-components";
import CityCard from "../components/CityCard";
import { CitiesContext } from '../context/ListCity'

const CityContainer = styled.div`
    height: 80vh;
    margin-top: 2%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    font-family: 'Abel', sans-serif;   

` 

const Home = () => {
    const { cities } = useContext(CitiesContext)

    console.log(cities)

    return (

        <CityContainer>
            {cities.map(city => (
                <CityCard key={city.id} source={city.source} name={city.name} slug={city.slug}/>
            )
            )}
        </CityContainer>
    )
}

export default Home
