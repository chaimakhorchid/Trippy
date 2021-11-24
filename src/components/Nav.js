import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import styled from 'styled-components'


const List = styled.ul `
    liststyle: none
    margin: 10px;
    padding: 10px;
    display: flex;
    flex-direction: row;
    list-style: none;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid white;
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
        return (
            <>
            
                    <List className="nav">
                    <Title>TRIPPY TRAVEL</Title>
                    <Row>
                        <li>
                            <Link className='nav' to="/" style={menuStyle}>HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav' to="/hotel/" style={menuStyle}>HOTELS</Link>
                        </li>
                        <li>
                            <Link className='nav' to="" style={menuStyle}>FAVORITES</Link>
                        </li>
                    </Row>
                    </List>   
            </>    
    )
    }


export default Nav


