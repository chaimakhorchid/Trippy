import styled from "styled-components";
import { Link } from "react-router-dom";
import {GiHamburgerMenu, GiReturnArrow} from 'react-icons/gi'
import { useState } from "react";



const List = styled.ul`
    liststyle: none
    margin: 10px;
    padding: 10px;
    display: flex;
    flex-direction: row;
    list-style: none;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid white
  `

const Title = styled.h1`
font-family: 'Alegreya Sans SC', sans-serif;

`
const Row = styled.div`
display: flex;
flex-direction: row;
`

const menuStyle = {
    color: "white",
    padding:"20px", 
    textDecoration:"none",  
    fontSize:"25px",
}


const Nav =() => {

    const [show, setShow] = useState(false);
    const hamburgerClick = (boolean) => {
        console.log('hamber', boolean);
        setShow(boolean)
    }
        return (
            <>
                    <List>
                    <Title>TRIPPY TRAVEL</Title>
                    {!show ?
                    <GiHamburgerMenu onClick={() => hamburgerClick(true)} />
                    :(
                    <Row>
                        <li>
                            <Link className='nav' to="/" style={menuStyle}>HOME</Link>
                        </li>
                        <li>
                            <Link className='nav' to="/hotel/:city" style={{color: 'white', padding:"20px", textDecoration:"none", fontSize:"25px"}}>HOTELS</Link>
                        </li>
                        <li>
                            <Link className='nav' to="" style={menuStyle}>FAVORITES</Link>
                        </li>
                        <li>
                            <Link className='nav' to="/hotel/hotelpage" style={{color: "white",padding:"20px", textDecoration:"none",  fontSize:"25px"}}>HOTELPAGE</Link>
                        </li>
                    </Row>
                    )
}
                    </List>

            </>    
    )
    }


export default Nav


