
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
  `

const Title = styled.h1`
font-family: 'Alegreya Sans SC', sans-serif;

`
const  Row = styled.div`
display: flex;
flex-direction: row;
`

const Nav =() => {
        return (
            <>
                    <List className="nav">
                    <Title>TRIPPY TRAVEL</Title>
                    <Row>
                        <li>
                            <Link className='nav' to="/" style={{color: "white",padding:"20px", textDecoration:"none",  fontSize:"25px"}}>HOME</Link>
                        </li>
                        <li>
                            <Link className='nav' to="/hotel/:city" style={{color: 'white', padding:"20px", textDecoration:"none", fontSize:"25px"}}>HOTELS</Link>
                        </li>
                        <li>
                            <Link className='nav' to="" style={{color: 'white', padding:"20px", textDecoration:"none", fontSize:"25px"}}>FAVORITES</Link>
                        </li>
                    </Row>
                    </List>   
            </>    
    )
    }


export default Nav


