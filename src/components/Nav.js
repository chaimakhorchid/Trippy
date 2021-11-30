// import { useContext } from "react";
import { Link } from "react-router-dom";
import { useState } from "react"
import styled from "styled-components";
// import Burger from "../components/Burger"


const linkStyle = {
    color: "white",
    padding: "20px",
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

  const List = styled.ul`
	liststyle: none
	margin: 5px;
	padding: 10px 5px;
	display: flex;
	list-style: none;
	justify-content: space-between;
	align-items: center;
  ${open ? "flex-direction: column" : "flex-direction: row" };
  ${open && "justify-content: center"}

	height: 50px;
  border-bottom: 1px solid white;
`

  const Menu = styled.div`
    display: flex;
    ${open ? "flex-direction: column" : "flex-direction: row" }
    justify-content: center;
  `

  const Categorie = styled.div`
    display: flex;
    @media (max-width: 426px) {
      flex-direction: column;
      justify-content: center;
    }
  
  `

  const Li = styled.li`
    :hover {
        font-weight: bold; 
    }
    @media (max-width: 426px) {
      ${open ? "display: flex" : "display: none"}
    }
  `

  const Burger = styled.button`
  display: none;

  @media (max-width: 426px) {
    display: flex;
    ${open ? "justify-content: center" : "justify-content: flex-end"} ;
    align-items: center;
    border: none;
    background: none;
    margin-right: 30px;
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
            <Categorie>
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
            </Categorie>

        </Menu>
      </List>
    </>
  );
};

export default Nav;
