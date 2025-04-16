import { navbar_data } from "../../data/navbar";
import "./globals.css";
import Navbar from "./navigation/Navbar";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=''>
        <Navbar data={navbar_data} />     
        {children}
      </body>
    </html>
  );
}
