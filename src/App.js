import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import HotelPage from "./pages/HotelPage";
import Hotels from "./pages/Hotels";
import Favorites from './pages/Favorites'
import NotFound from "./pages/NotFound";
import { HotelContextProvider } from "./context/Hotel";
import { CitiesContextProvider } from "./context/ListCity";


const Body = styled.div`
  background-color: #3f3260;
  color: white;
  font-family: "Alegreya Sans SC", sans-serif;
  width: 100%;
  
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: #b7094c;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #b30000;
  }
`;

const App = () => {
  return (
    <Body>
      <BrowserRouter>
        <CitiesContextProvider>
            <HotelContextProvider>
              <div>
                <Nav />
              </div>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/hotels/:city" element={<Hotels />} />
                <Route exact path="/hotelpage/:id" element={<HotelPage />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </HotelContextProvider>
        </CitiesContextProvider>
      </BrowserRouter>
    </Body>
  );
};
export default App;
