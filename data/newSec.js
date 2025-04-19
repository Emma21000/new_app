import { IoIosCard } from "react-icons/io";
import { MdOutlineBathroom, MdOutlineBedroomParent, MdSpaceDashboard } from "react-icons/md";


export const newSec = {
    card: [
        {
            img: "/table.jpg",
            width: 550,
            height: 900
        },
        {
            img: "/bed.jpg",
            width: 550,
            height: 900
        }
    ],
    subtitle: "Ocean Apt.",
    description: "I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.",
    list: [
        {
            icon: <IoIosCard />, 
            title: "Floors: 3-15" 
        },
        {
            icon: <MdSpaceDashboard />,
            title: "Space: 120 Sqm"
        },
        {
            icon: <MdOutlineBedroomParent />,
            title: "Bedrooms: 3"
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