import { BiWifi, BiFridge } from "react-icons/bi";
import { FaCocktail, FaSwimmingPool, FaLuggageCart } from "react-icons/fa";
import { MdPets, MdLocalLaundryService, MdSpa, MdRoomService, MdAccessible, MdFamilyRestroom, MdAirportShuttle } from "react-icons/md"; 
import { IoLogoNoSmoking, IoBed } from "react-icons/io5";
import { GrLanguage } from "react-icons/gr";
import { IoIosRestaurant, IoIosFitness } from "react-icons/io";
import { GiCroissant, GiOfficeChair, GiComputerFan } from "react-icons/gi";

const Commodities =  [
    {
        name: "wifi",
        icon: <BiWifi/>
    },
    {
        name: "bar",
        icon: <FaCocktail/>
    },
    {
        name: "animals",
        icon:  <MdPets/>
    },
    {
        name: "non smoking",
        icon: <IoLogoNoSmoking/>
    },
    {
        name: "multilingual staff",
        icon: <GrLanguage/>
    },
    {
        name: "dry cleaning",
        icon: <MdLocalLaundryService/>
    },
    {
        name: "suites",
        icon: <IoBed/>
    },
    {
        name: "swimming pool",
        icon: <FaSwimmingPool/>
    },
    {
        name: "restaurant",
        icon: <IoIosRestaurant/>
    },
    {
        name: "gym",
        icon: <IoIosFitness/>
    },
    {
        name: "spa",
        icon: <MdSpa/>
    },
    {
        name: "room service",
        icon: <MdRoomService/>
    },
    {
        name: "disabled access",
        icon: <MdAccessible/>
    },
    {
        name: "family",
        icon: <MdFamilyRestroom/>
    },
    {
        name: "conciergerie",
        icon: <FaLuggageCart/>
    },
    {
        name: "shuttle",
        icon: <MdAirportShuttle/>
    },
    {
        name: "breakfast included",
        icon: <GiCroissant/> 
    },
    {
        name: "meeting rooms",
        icon: <GiOfficeChair/>
    },
    {
        name: "air conditioning",
        icon: <GiComputerFan/>
    },
    {
        name: "minibar",
        icon: <BiFridge/>
    },
        
]
            


export default Commodities;