import { IoIosCard } from "react-icons/io";
import { MdOutlineBathroom, MdOutlineBedroomParent, MdSpaceDashboard } from "react-icons/md";

export const aboutList = {
    title: "The Building",
    desc: "At 18 stories and with its unique design, La Perla is a modernist icon in the city’s skyline.",
    photo: [
        {
            img: "/kitchen.jpg",
            width: 550,
            height: 900
        },
        {
            img: "/bothroom.jpg",
            width: 550,
            height: 900
        }
    ],
    subtitle: "Gardenia Apt.",
    description: "I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.",
    card: [
        {
           icon: <IoIosCard />, 
           title: "Floors: 1-2" 
        },
        {
            icon: <MdSpaceDashboard />,
            title: "Space: 150 Sqm"
        },
        {
            icon: <MdOutlineBedroomParent />,
            title: "Bedrooms: 2"
        },
        {
            icon: <MdOutlineBathroom />,
            title: "Bathrooms: 1-2"
        }
    ],
    link:{
            title: "Check Availability",
            but: "View floor plan",
    }
        
}