import Image from "next/image";
import Link from "next/link";

export default function Raya({data}) {
  return (
    <div className="w-full h-full bg-[#b18673] py-16">
        <div className="flex flex-col gap-y-8 px-16">
            {data.Section.map((elem,i)=>(
            <div key={i} className={`py-12  flex items-start ${i % 2 == 0 ? "flex-row" : "flex-row-reverse"}`}>
                <Image src={elem.img}
                alt={elem.img}
                width={elem.width}
                height={elem.height}
                className="w-full h-[800px] object-cover px-20" />
                <div className="flex flex-col mx-auto text-[#3e2b24] ">
                    <Link href='#' className="pt-28 text-4xl font-medium">{elem.title}</Link>
                    <Link href='#' className="py-8 text-7xl font-mono" >{elem.subtitle}</Link>
                    <Link href='#' className="pb-8 w-4xl text-4xl">{elem.desc}</Link>
                    <Link href='#' className="w-2xl font-medium text-2xl">{elem.description}</Link>
                </div>
            </div>
            ))}

        </div>
    </div>
  )
}
