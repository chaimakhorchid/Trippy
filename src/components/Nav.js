import { Link } from "react-router-dom";
import styled from "styled-components";

const List = styled.ul`
	liststyle: none
	margin: 5px;
	padding: 10px;
	display: flex;
	flex-direction: row;
	list-style: none;
	justify-content: space-between;
	align-items: center;
	height: 50px;
  border-bottom: 1px solid white;
`;

const Li = styled.li`
    :hover {
        font-weight: bold; 
    }
`
const Title = styled.h1`
  font-family: "Alegreya Sans SC", sans-serif;
  margin-left: 20px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const linkStyle = {
    color: "white",
    padding: "20px",
    textDecoration: "none",
    fontSize: "25px",
}

const Nav = () => {
  return (
    <>
      <List>
        <Title>Trippy Travel</Title>
        <Row>
          <Li>
            <Link
              to="/"
              style={linkStyle}
            >
              HOME
            </Link>
          </Li>
          <Li>
            <Link
              className="nav"
              to="/favorites"
              style={linkStyle}
            >
              FAVORITES
            </Link>
          </Li>
        </Row>
      </List>
    </>
  );
};

export default Nav;
