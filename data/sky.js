import { IoIosCard } from "react-icons/io";
import { MdOutlineBathroom, MdOutlineBedroomParent, MdSpaceDashboard } from "react-icons/md";

export const sky = {
    card: [
        {
            img: "/img.png",
            width: 550,
            height: 900
        },
        {
            img: "/img1.png",
            width: 550,
            height: 900
        }
    ],
    subtitle: "Sky Apt.",
    description: "I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.",
        list: [
            {
                icon: <IoIosCard />, 
                title: "Floors: 16-18" 
            },
            {
                icon: <MdSpaceDashboard />,
                title: "Space: 220 Sqm"
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