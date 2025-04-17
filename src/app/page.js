import { aboutSec } from "../../data/aboutSec";
import { hero } from "../../data/hero";
import AboutSec from "./sections/AboutSec";
import Hero from "./sections/Hero";

export default function Home() {
  return (
    <div className=''>
      <Hero data={hero} />
      <AboutSec data={aboutSec} />
    </div>
  );
}
