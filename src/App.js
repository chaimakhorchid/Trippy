
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from 'styled-components';
import Nav from './components/Nav';
import Home from './pages/Home';
import HotelPage from './pages/HotelPage';
import Hotels from './pages/Hotels'
import NotFound from './pages/NotFound';

const Body = styled.div `
  background-color: #3F3260;
  color: white;
  font-family: 'Alegreya Sans SC', sans-serif;
`

const App = () => {
    return (
      <Body>
      <BrowserRouter>
      <div>
        <Nav/>
      </div>
      <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/hotel/:city" component={Hotels}/>
        <Route path="/hotel/:id" component={HotelPage}/>
        <Route path="*" component={NotFound} />
      </Routes>
      </BrowserRouter>
      </Body>
    )
  }


export default App
