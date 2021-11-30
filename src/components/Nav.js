// import { useContext } from "react";
import { Link } from "react-router-dom";
import { useState } from "react"
import styled from "styled-components";
// import Burger from "../components/Burger"


const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "25px",
    textAlign: "center",
}

const Nav = () => {
  const [ open, setOpen ] = useState(false)

  const Title = styled.h1`
    font-family: "Alegreya Sans SC", sans-serif;
    margin-left: 30px;
    ${open && "display: none" }
  `

  const List = styled.div`
    padding: 10px ;
    height: ${open ? "100%" : "50px"};
    display: flex;
    align-items: center;

    flex-direction: ${open ? "column" : "row"}; 
    justify-content: ${open ? " center" : "space-between" }; 
    
    border-bottom: 1px solid white;
    
  `

  const Menu = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: ${open ? " column" : "row"}

  `

  const Li = styled.li`
    padding: 20px;

    :hover {
        font-weight: bold; 
    }

    @media (max-width: 376px) {
      padding: 10px;
      ${open ? "display: flex" : "display: none"}
      ${open && "flex-direction: column" }
      ${open && "align-items: center"}
      
    }
  `

  const Burger = styled.button`
  display: none;

  @media (max-width: 376px) {
    display: flex;
    align-items: center;
    border: none;
    background: none;
    font-size: 40px;
    color: white;
    cursor: pointer;   
  }
`

  return (
    <>
      <List>
        <Title>Trippy Travel</Title>
        <Menu>
            <Burger onClick={() => setOpen(!open)} >☰</Burger>
              <Li>
                <Link to="/" style={linkStyle}>
                  HOME
                </Link>
              </Li>
              <Li>
                <Link to="/favorites" style={linkStyle}>
                  FAVORITES
                </Link>
              </Li> 
        </Menu>
      </List>
    </>
  );
};

export default Nav;
