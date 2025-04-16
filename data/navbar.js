import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";

export const navbar_data={
    logo: "LP/52",
    links: [
        {
            title: "About",
            path: "/"
        },
        {
            title: "The Building",
            path: "/"
        },
        {
            title: "Location",
            path: "/"
        },
        {
            title: "Amenities",
            path: "/"
        }
    ],
    icon:[ 
    {
        icon: <FaInstagram />,
    },
    { 
        icon: <FiYoutube />,
    },
    {
        icon:  <FaFacebook />
    } 
    ],
    title: "Inquire"
}