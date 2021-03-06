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
import { FavoritesContextProvider } from "./context/Favorites";


const Body = styled.div`
  background-color: #3f3260;
  color: white;
  font-family: "Alegreya Sans SC", sans-serif;
  width: 100%;
  height: 100%;

  @media (max-width: 426px) {
    height 100vh;
  }


`;

const App = () => {
  return (
    <Body>
      <BrowserRouter>
        <CitiesContextProvider>
          <FavoritesContextProvider>
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
          </FavoritesContextProvider>
        </CitiesContextProvider>
      </BrowserRouter>
    </Body>
  );
};
export default App;
