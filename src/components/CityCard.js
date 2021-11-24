import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { CityContextProvider } from '../context/ListCity'

const CityCard = props => {

    const Card = styled.div`
    background-color: #B7094C;
    border-radius: 2.5rem 2.5rem 2.5rem 2.5rem; 
    width: 350px;
    height: 250px; 
    margin: 0 2%;
    text-align: center;

    @media (max-width: 812px) {
        margin: 5% 6%;

      }

    div {
        background : url('https://trippy-konexio.herokuapp.com/${props.source}') no-repeat center/cover;
        height: 75%;
        width: 100%;
        background-position: center;
        border-radius: 2.5rem 2.5rem 0 0;    
    }

    @media (max-width: 376px) {
        height: 50%;
        width: 90%;

      }

    p {
        font-size: 1.25rem;
        fontFamily:" Sans SC', sans-serif"
    }

`
    return (
        <>
        <Card>
            <div></div>
            <p><Link to= "/hotel/:city" style={{color: "white",padding:"20px", textDecoration:"none",  fontSize:"25px"}}>{props.name}</Link></p>
        </Card>
        </>
    )}
export default CityCard