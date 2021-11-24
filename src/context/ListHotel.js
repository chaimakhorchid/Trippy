import { useEffect, useState, createContext, useContext } from "react";
import { useParams } from "react-router-dom";
import { CitiesContext } from "./ListCity";

const HotelsContext = createContext({});

const HotelsContextProvider = (props) => {
  // const value = {
  //   hotels,
  //   centers
  // };

  return <HotelsContext.Provider>{props.children}</HotelsContext.Provider>;
};

export { HotelsContext, HotelsContextProvider };
