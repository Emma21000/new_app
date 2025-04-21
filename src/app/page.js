import { about_team } from "../../data/about_team";
import { aboutList } from "../../data/aboutList";
import { aboutSec } from "../../data/aboutSec";
import { hero } from "../../data/hero";
import { location } from "../../data/location";
import { newSec } from "../../data/newSec";
import { raya } from "../../data/raya";
import { sec } from "../../data/sec";
import { sky } from "../../data/sky";
import AboutList from "./sections/AboutList";
import AboutSec from "./sections/AboutSec";
import AboutTeam from "./sections/AboutTeam";
import Hero from "./sections/Hero";
import HouseSec from "./sections/HouseSec";
import LocationSec from "./sections/location/LocationSec";
import NewSec from "./sections/NewSec";
import Raya from "./sections/Raya";
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
      <LocationSec data={location} />
      <Raya data={raya} />
      <AboutTeam data={about_team} />
      <HouseSec />
    </div>
  );
}
