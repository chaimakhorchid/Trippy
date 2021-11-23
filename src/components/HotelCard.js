// import { useContext } from 'react'

import styled from 'styled-components'
// import { HotelsContext } from '../context/ListHotel'

const CardBox = styled.div `
color: white;
background: #B7094C;
border-radius: 20px;
margin: 5px;
height: 100px;
zéa
`

const CardContainer = styled.div `
display: flex;
justify-content: flex-end;
padding-right: 10%;
`

const CardText = styled.div `
padding-right: 10%;
`


const HotelCard = () => {
    // const { hotel, setHotel } = useContext(HotelsContext)

    return (
        <CardBox>
            <CardContainer>
                    <CardText>
                        <h2>Nom Hotel</h2>
                        <p>Prix</p>
                        <h2>Stars</h2>
                    </CardText>
                    <div> 
                        <span className="material-icons-outlined">favorite</span>
                    </div>
            </CardContainer>
        </CardBox>
    );
};

export default HotelCard;