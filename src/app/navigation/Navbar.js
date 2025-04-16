import Link from "next/link";

export default function Navbar({data}) {
  return (
    <div className="w-full h-36 bg-[#F1ECEA] py-10 px-28 flex items-center justify-between relative">
    <div className="flex gap-10">
        {data.links.map((elem,index)=>(
            <Link key={index} className="flex text-4xl font-thin text-[#724024]" href={elem.path} >{elem.title} {data.botton}</Link>
        ))}
    </div>
      <h2 className="absolute left-1/2 transform  -translate-x-1/2 text-[#3e2b24] text-6xl font-medium">{data.logo}</h2>
      <div className="flex gap-10">
        <Link href='#' className="border-2 border-transparent py-6 px-20 bg-[#3e2b24] text-[#c0ad90] text-4xl  hover:bg-[#c0ad90] hover:text-[#3e2b24] hover:border-2 hover:border-[#3e2b24] hover:duration-150 hover:duration-all">{data.title}</Link>
      {data.icon.map((icons,i)=>(
        <h2 className="mt-4 text-6xl" key={i}>{icons.icon}</h2>
      ))}
      </div>
    </div>
  )
}
