import { aboutList } from "../../data/aboutList";
import { aboutSec } from "../../data/aboutSec";
import { hero } from "../../data/hero";
import { newSec } from "../../data/newSec";
import { sec } from "../../data/sec";
import { sky } from "../../data/sky";
import AboutList from "./sections/AboutList";
import AboutSec from "./sections/AboutSec";
import Hero from "./sections/Hero";
import NewSec from "./sections/NewSec";
import Sec from "./sections/Sec";
import Sky from "./sections/Sky";

export default function Home() {
  return (
    <div className=''>
      <Hero data={hero} />
      <AboutSec data={aboutSec} />
      <AboutList data={aboutList} />
      <NewSec data={newSec} />
      <Sky data={sky} />
      <Sec data={sec} />
    </div>
  );
}
