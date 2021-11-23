import React, { Component } from "react";

import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Home from "./pages/Home";
import HotelPage from "./pages/HotelPage";
import Hotels from "./pages/Hotels";
import NotFound from "./pages/NotFound";

class App extends Component {
  render() {
    const title = "Trippy";
    return (
      <BrowserRouter>
        <ListHotel>
          <div>
            <nav>
              <ul style={{ listStyle: "none" }}>
                <li>
                  <Link to="/">Home</Link>
                </li>
              </ul>
            </nav>
          </div>
          <Routes>
            <Route exact path="/" component={Home} />
            <Route path="/hotel/:city" component={Hotels} />
            <Route path="/hotel/:id" component={HotelPage} />
            <Route path="*" component={NotFound} />
          </Routes>
        </ListHotel>
      </BrowserRouter>
    );
  }
}

export default App;
