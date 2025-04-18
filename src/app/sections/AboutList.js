import Image from "next/image";
import Link from "next/link";

export default function AboutList({data}) {
  return (
    <div className="bg-[#b18673] w-full h-full ">
        <h2 className="text-center py-20 text-4xl font-serif text-[#3e2b24] ">{data.title}</h2>
        <h2 className="text-[#3e2b24] w-4/5 mx-auto  font-mono text-6xl text-center">{data.desc}</h2>
        <div className="w-full flex items-center justify-evenly py-24 bg-no-repeat bg-center bg-cover">
            {data.photo.map((elem,i)=>(
            <Image  key={i} src={elem.img}
                alt={elem.img}
                width={elem.width}
                height={elem.height}
                className="w-[800px] h-[800px]" />
            ))}
        </div>
        <div className="flex items-start justify-evenly py-18">
            <h2 className="text-[#3e2b24] text-8xl font-mono">{data.subtitle}</h2>
            <h2 className="text-[#3e2b24] text-2xl font-thin w-96 ">{data.description}</h2>
            <div className="grid grid-cols-1">
            {data.card.map((elem,i)=>(
                <div key={i} className="flex gap-4 text-4xl text-[#3e2b24]">
                    <Link href='#' className="py-2">{elem.icon}</Link>
                    <h2 className="font-mono py-2">{elem.title}</h2>
                </div>
            ))}
            </div>
            <div className="flex flex-col my-6 gap-y-6">
                <Link className="bg-[#3e2b24] py-4 px-12 text-4xl text-[#b18673] border-2 border-transparent hover:bg-[#b18673] hover:border-[#3e2b24] hover:text-[#3e2b24] duration-150 transition-all" href='#'>{data.link.title}</Link>
                <Link className="bg-[#b18673] py-4 px-12 text-4xl text-[#3e2b24] border-2 border-[#3e2b24] hover:bg-[#3e2b24] hover:border-transparent hover:text-[#b18673]  duration-150 transition-all" href='#'>{data.link.but}</Link>

            </div>
        </div>
    </div>
  )
}
