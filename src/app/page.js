import { aboutList } from "../../data/aboutList";
import { aboutSec } from "../../data/aboutSec";
import { hero } from "../../data/hero";
import AboutList from "./sections/AboutList";
import AboutSec from "./sections/AboutSec";
import Hero from "./sections/Hero";

export default function Home() {
  return (
    <div className=''>
      <Hero data={hero} />
      <AboutSec data={aboutSec} />
      <AboutList data={aboutList} />
    </div>
  );
}
