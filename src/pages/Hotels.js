import styled from 'styled-components'

import HotelCard from '../components/HotelCard'

const Container = styled.div `
display: flex;
flex-direction: row;
justify-content: space-between;
height: 100vh;
margin: 20px;
`
const HostelsList = styled.div `
width: 50%;
padding-right: 10px;
`
const HostelsMap = styled.div `
width: 50%;
overflow: hidden;
padding-left: 10px;
`

const Hotels = () => {
    return (
        <Container>
            
            <HostelsList>
                <HotelCard />
            </HostelsList>
            <HostelsMap>
                <img style={{ overflow: "hidden" }} src="https://docs.microsoft.com/fr-fr/azure/azure-maps/media/migrate-google-maps-web-app/simple-google-map.png" alt="googleMap"/>
            </HostelsMap>
           
        </Container>
    );
};

export default Hotels;