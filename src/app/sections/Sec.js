import Image from "next/image";

export default function Sec({data}) {
  return (
    <div className="w-full h-full bg-[#F1ECEA] py-24">
      <h2 className="text-center text-[#3e2b24] text-4xl w-3/4 mx-auto font-mono">{data.desc}</h2>
      <div className="flex items-center justify-center gap-14 pt-20">
        {data.card.map((elem,i)=>(
            <Image key={i} src={elem.img}
            alt={elem.img}
            height={elem.height}
            width={elem.width} 
            className="object-cover w-[600px] h-[600px]" />
        ))}
      </div>
    </div>
  )
}
