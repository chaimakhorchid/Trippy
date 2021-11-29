import styled from 'styled-components'
import {FaSwimmingPool, FaCocktail, FaSpa, FaWheelchair, FaLuggageCart, FaDog, FaShuttleVan } from 'react-icons/fa';
import {MdRoomService, MdOutlineSmokeFree, MdOutlineLanguage,MdFamilyRestroom} from 'react-icons/md';
import {AiOutlineWifi} from 'react-icons/ai';
import {CgGym} from 'react-icons/cg';
import {GiCroissant, GiComputerFan, GiWashingMachine} from 'react-icons/gi';
import {RiFridgeFill} from 'react-icons/ri';
import {BiBed} from 'react-icons/bi';



const Icons = styled.div`
column-count: 2;

`


function Icon (props) {
    return (
      <Icons>
        {props.comodity === "wifi" && <AiOutlineWifi/>}
        {props.comodity === "swimming pool" && <FaSwimmingPool/>}
        {props.comodity === "room service" && <MdRoomService/>}
        {props.comodity === "bar" &&  <FaCocktail/>}
        {props.comodity === "spa" && <FaSpa/>}
        {props.comodity === "gym" && <CgGym/>}
        {props.comodity === "disabled access" && <FaWheelchair/>}
        {props.comodity === "conciergerie" && <FaLuggageCart/>}
        {props.comodity === "non smoking" && <MdOutlineSmokeFree/>}
        {props.comodity === "dry cleaning" && <GiWashingMachine/>}
        {props.comodity === "multilingual staff" && <MdOutlineLanguage/>}
        {props.comodity === "breakfast included" &&  <GiCroissant/>}
        {props.comodity === "air conditioning" &&  <GiComputerFan/>}
        {props.comodity === "minibar" && <RiFridgeFill/>}
        {props.comodity === "suites" &&  <BiBed/>}
        {props.comodity === "family" &&  <MdFamilyRestroom/>}
        {props.comodity === "animals" &&  <FaDog/>}
        {props.comodity === "shuttle" &&  <FaShuttleVan/>}
      </Icons>
    )
}

export default Icon;