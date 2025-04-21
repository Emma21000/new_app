import Link from "next/link";

export default function LocationSec({data}) {
  return (
    <div className="w-full h-full bg-[#b18673] pt-12">
        <h2 className="py-14 text-6xl font-medium text-center text-[#3e2b24]">{data.title}</h2>
        <div className="w-full flex items-center justify-around">
            {data.card.map((elem,index)=>(
                <div key={index} className="flex flex-col text-[#3e2b24] text-center">
                    <Link className="text-8xl py-6" href={elem.path} >{elem.title}</Link>
                    <Link className= "text-4xl pb-6" href={elem.path} >{elem.subtitle}</Link>
                </div>
            ))}
        </div>
        <div style={{backgroundImage: data.img}} className=" bg-no-repeat bg-center bg-cover w-4/5 mx-auto h-screen"></div>
    </div>
  )
}
