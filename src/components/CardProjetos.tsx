import Image from "next/image"
import Link from "next/link"
import { AiOutlineGlobal } from "react-icons/ai"
import { FaGithub } from "react-icons/fa6"

interface CardProjetosProps {
    img: string
    nome: string
    github: string
    site: string
    desc: string
}

export default function CardProjetos(props: CardProjetosProps) {
    return (
        <div className="w-full rounded-2xl bg-[#0A0F1C]/50 border border-white/10 shadow-lg overflow-hidden flex flex-col">
            
            <div className="relative w-full h-60">
                <Image
                    src={props.img}
                    alt={`Imagem do projeto ${props.nome}`}
                    fill
                    className="object-cover rounded-t-2xl"
                />
            </div>

            <div className="px-4 py-5 flex flex-col gap-3 text-gray-300">
                
                <h2 className="text-center text-2xl font-semibold text-white">{props.nome}</h2>

                <p className="text-start wrap-break-words overflow-y-auto h-36 line-clamp-5">
                    {props.desc}
                </p>

                <div className="flex justify-center gap-4 mt-3">
                    <Link
                        href={props.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 py-2 w-28 bg-blue-600 hover:bg-blue-500 rounded-2xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                        <FaGithub size={20} />
                        GitHub
                    </Link>
                    <Link
                        href={props.site}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 py-2 w-28 bg-green-600 hover:bg-green-500 rounded-2xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                        <AiOutlineGlobal size={20} />
                        Site
                    </Link>
                </div>
            </div>
        </div>
    )
}