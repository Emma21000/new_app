import Image from "next/image";
import Link from "next/link";

export default function NewSec({data}) {
  return (
    <div className="w-full h-full bg-[#a77164] ">
        <div className="w-full flex items-center justify-evenly py-28 bg-no-repeat bg-center bg-cover">
        {data.card.map((elem,i)=>(
            <Image  key={i} src={elem.img}
                alt={elem.img}
                width={elem.width}
                height={elem.height}
                className="w-[800px] h-[800px] object-cover" />
            ))}
        </div>
        <div className="flex items-start justify-evenly py-18 text-white">
            <h2 className=" text-8xl font-mono">{data.subtitle}</h2>
            <h2 className=" text-2xl font-thin w-96 ">{data.description}</h2>
            <div className="grid grid-cols-1">
            {data.list.map((elem,i)=>(
                <div key={i} className="flex gap-4 text-4xl text-white">
                    <Link href='#' className="py-2">{elem.icon}</Link>
                    <h2 className="font-mono py-2">{elem.title}</h2>
                </div>
            ))}
            </div>
            <div className="flex flex-col my-6 gap-y-6">
                <Link className="bg-white py-4 px-12 text-4xl text-[#3e2b24]  border-2 border-[#3e2b24] hover:bg-[#b18673] hover:border-white hover:text-[#3e2b24] duration-150 transition-all" href='#'>{data.link.title}</Link>
                <Link className="bg-[#b18673] py-4 px-12 text-4xl text-[#3e2b24] border-2 border-[#3e2b24] hover:bg-[#3e2b24] hover:border-transparent hover:text-[#b18673]  duration-150 transition-all" href='#'>{data.link.but}</Link>
            </div>
        </div>
    </div>
  )
}
