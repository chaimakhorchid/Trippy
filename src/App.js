import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from 'styled-components'
import Nav from "./components/Nav";
import { CityContextProvider } from "./context/ListCity";
import { HotelsContextProvider } from "./context/ListHotel"
import Home from "./pages/Home";
import HotelPage from "./pages/HotelPage";
import Hotels from "./pages/Hotels";
import NotFound from "./pages/NotFound";


const Body = styled.div `
  background-color: #3F3260;
  color: white;
`

const App = () => {
  return (
    <Body>
      <BrowserRouter>
        <CityContextProvider>
          <HotelsContextProvider>
            <div>
              <Nav />
            </div>
            <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route path="/hotel/" element={<Hotels/>} />
              <Route path="/hotel/:id" element={<HotelPage/>} />
              <Route path="*" element={<NotFound/>} />
            </Routes>
          </HotelsContextProvider>
        </CityContextProvider>
      </BrowserRouter>
    </Body>
  );
};
export default App
