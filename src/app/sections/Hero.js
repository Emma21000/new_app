import Link from "next/link";

export default function Hero({data}) {
  return (
    <div className="w-full h-screen bg-no-repeat bg-center bg-cover" style={{backgroundImage: data.img}}>
      <div className="px-52 text-[#3e2b24] ">
        <h2 className="pt-60 text-6xl font-serif">{data.list.title}</h2>
        <h2 className="pt-6 text-9xl font-serif tracking-widest">{data.list.subtitle}</h2>
        <h2 className="pt-8 text-6xl font-normal">{data.list.info}</h2>
        <h2 className="text-2xl py-16 w-[450px]">{data.list.desc}</h2>
        <Link href='#' className=" border-2 border-transparent py-4 px-16 bg-[#3e2b24] text-[#c0ad90] text-4xl  hover:bg-[#c0ad90] hover:text-[#3e2b24] hover:border-2 hover:border-[#3e2b24] hover:duration-150 hover:duration-all">{data.list.but}</Link>
      </div>
    </div>
  )
}
