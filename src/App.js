import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Nav from "./components/Nav";
import { CitiesContextProvider } from "./context/ListCity";
import { HotelsContextProvider } from "./context/ListHotel"
import Home from "./pages/Home";
import HotelPage from "./pages/HotelPage";
import Hotels from "./pages/Hotels";
import NotFound from "./pages/NotFound";
import { HotelContextProvider } from "./context/Hotel";


const Body = styled.div `
  background-color: #3F3260;
  color: white;
  font-family: "Alegreya Sans SC", sans-serif;
  height: 100vh;
`;

const App = () => {
  return (
    <Body>
      <BrowserRouter>
        <CitiesContextProvider>
          <HotelsContextProvider>
            <HotelContextProvider>
              <div>
                <Nav />
              </div>
              <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/hotel/:city" element={<Hotels/>} />
                <Route path="/hotel/:id" element={<HotelPage/>} />
                <Route path="*" element={<NotFound/>} />
              </Routes>
            </HotelContextProvider>
          </HotelsContextProvider>
        </CitiesContextProvider>
      </BrowserRouter>
    </Body>
  );
};
export default App
