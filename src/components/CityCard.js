import styled from 'styled-components'

const Card = styled.div`
    background-color: #B7094C;
    border-radius: 0.5rem;
    box-shadow: 0.05rem 

    img {
        border-radius: 0.5rem 0.5rem 0 0;
        width: 100%;
    }

`
const CityCard = props => {
    return (
        <Card>
            hello
            <img src={`https://trippy-konexio.herokuapp.com/${props.source}`} alt="city" />
        </Card>
    )}
export default CityCard