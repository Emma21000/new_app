import { hero } from "../../data/hero";
import Hero from "./sections/Hero";

export default function Home() {
  return (
    <div className=''>
      
      <Hero data={hero} />
    </div>
  );
}
