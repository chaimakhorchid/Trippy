import { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { CitiesContext } from '../context/ListCity'
// import { HotelsContext } from '../context/ListHotel'

const CityCard = props => {
    const { city, setCity } = useContext(CitiesContext)

    const Card = styled.div`
    background-color: #B7094C;
    border-radius: 2.5rem 2.5rem 2.5rem 2.5rem; 
    width: 350px;
    height: 250px; 
    margin: 0 2%;
    text-align: center;

    div {
        background : url('https://trippy-konexio.herokuapp.com/${props.source}') no-repeat center/cover;
        height: 75%;
        width: 100%;
        background-position: center;
        border-radius: 2.5rem 2.5rem 0 0; 
    }

    p {
        font-size: 1.25rem;
        fontFamily:" Sans SC', sans-serif"
    }
    
    `

    function handleCLick(city) {
        setCity(city)
    }

    console.log(city)
    return (
        <>
        <Card onClick={() => handleCLick(props.name)}>
            <div></div>
            <p><Link to={`/hotel/${props.name}`} style={{color: "white",padding:"20px", textDecoration:"none",  fontSize:"25px"}}>{props.name}</Link></p>
        </Card>
        </>
    )}
export default CityCard