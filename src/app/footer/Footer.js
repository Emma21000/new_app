import Link from "next/link";

export default function Footer({data}) {
  return (
    <div className="w-full h-full bg-[#3e2b24] ">
      <h2 className="text-center text-8xl font-mono text-white pt-20">{data.title}</h2>
      <h2 className="w-4xl mx-auto text-center text-2xl font-mono text-white pt-8">{data.desc}</h2>
    <div className="w-1/2 mx-auto grid grid-cols-3 py-12">
        {data.list.map((elem,i)=>(
            <div key={i} className="flex flex-col px-6  py-4">
            <Link className="text-4xl text-white" href={elem.path}>{elem.title}</Link>
            <input type="text" className="  py-4 my-4 bg-transparent border-b border-white outline-none focus:outline-none"/>
            </div>
        ))}
    <Link href="#"  className="col-span-3 w-full text-center bg-[#F1ECEA] py-6 text-[#3e2b24] text-4xl font-semibold mt-8 border-2 border-transparent hover:bg-[#3e2b24] hover:border-[#F1ECEA] hover:text-[#F1ECEA] transition-all duration-150">
    {data.but}
    </Link>
    </div>
    <div className="flex items-center justify-between px-24 text-[#F1ECEA] py-10">
    <div className="flex gap-10 text-2xl  font-serif underline">
        <h2>{data.titles.statement}</h2>
        <h2>{data.titles.policy}</h2>
    </div>
        <h2 className="text-2xl font-medium">{data.date}</h2>
        
      </div>
    </div>

  )
}
