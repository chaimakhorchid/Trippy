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

  const List = styled.div`
    padding: 10px 10px 10px 30px ;
    height: ${open ? "100%" : "50px"};
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: ${open ? "column" : "row"}; 
    
    border-bottom: 1px solid white;

    @media (max-width: 376px) {
      justify-content: flex-end;
      padding-right: 30px;
    }
  `

  const Title = styled.h1`
    font-family: "Alegreya Sans SC", sans-serif;
    font-size: 36px;
    ${open && "display: none"};

    @media (max-width: 280px) {
      font-size: 28px;
    }
  `

  const Burger = styled.button`
    display: none;

    @media (max-width: 376px) {
      display: flex;
      margin-left: ${open ? "0" : "30px"};
      border: none;
      background: none;
      font-size: 40px;
      color: white;
      cursor: pointer;   
    }
  `

  const Menu = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: ${open ? " column" : "row"};
    ${open && "text-align: center;"}
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

 

  return (
    <>
      <List>
        <Title>Trippy Travel</Title>
        <Burger onClick={() => setOpen(!open)} >☰</Burger>
        <Menu>
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
