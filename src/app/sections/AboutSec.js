import Image from "next/image";

export default function AboutSec({data}) {
  return (
    <div className="bg-[#e4d4ce] w-full max-h-screen">
        <h2 className="py-16 text-center text-4xl font-serif text-[#3e2b24]">{data.title}</h2>
        <h2 className="text-4xl w-4/5 mx-auto text-center font-serif ">{data.desc}</h2>
        <div className="py-16 w-full flex items-center justify-evenly">
        {data.image.map((elem,i)=>(
            <Image  key={i} src={elem.img}
            alt={elem.img}
            width={elem.width}
            height={elem.height} />
        ))}
        </div>
    </div>
  )
}
