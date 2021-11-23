import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { CityContextProvider } from '../context/ListCity'

const Card = styled.div`
    background-color: #B7094C;
    border-radius: 0.5rem;
    box-shadow: 0.05rem;
    padding-bottom: 1rem;
    overflow: hidden;

    img {
        border-radius: 0.5rem 0.5rem 0 0;
        width: 400px;
	    height: 300px;
        background-position: center;
        
        object-fit: cover;
        max-height: max(10rem, 30vh);

    }

    h3 {
        margin-top: 1rem;
        font-size: 1.25rem;
    }

`
const CityCard = props => {
    return (
        <Card>
            <img src={`https://trippy-konexio.herokuapp.com/${props.source}`} alt="city" />
            <h3><Link to= "/hotel/:city">{props.name}</Link></h3>
        </Card>
    )}
export default CityCard