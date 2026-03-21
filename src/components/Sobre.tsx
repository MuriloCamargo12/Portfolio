'use client'
import { useReveal } from "@/hooks/scroll";
import { BsTypescript } from "react-icons/bs";
import { FaCss, FaNode, FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { RiNextjsLine } from "react-icons/ri";
import { SiExpress, SiMongodb, SiMysql } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";

export default function Sobre() {
    const { ref, visible } = useReveal()
    return (
        <section id="sobre" ref={ref} className={`flex justify-center  pt-60
        ${visible
                ? "animate-fade-up animate-once animate-duration-[2500ms] animate-delay-[5ms] animate-ease-in-out"
                : "opacity-0"
            }
        `}>
            <div className="md:w-3/4 w-full flex flex-col items-center gap-20 px-1 md:px-0">
                <div>
                    <h1 className="text-5xl">Sobre</h1>
                </div>
                <div className="bg-[#0A0F1C]/50 border flex flex-col border-white/10 shadow-lg md:p-5 p-2 rounded-2xl">
                    <h1 className="text-2xl font-semibold mb-4">Minha jornada</h1>

                    <p className="text-muted-foreground leading-relaxed">
                        Iniciei meus estudos em desenvolvimento web no início de 2025, por meio da formação Dev da Cod3r.
                        Desde então, venho aprofundando meus conhecimentos em HTML, CSS, JavaScript, TypeScript, React e Next.js,
                        aplicando o aprendizado em projetos práticos para fortalecer minha base técnica.
                    </p>

                    <p className="text-muted-foreground leading-relaxed mt-4">
                        Atualmente estou focado na prática, desenvolvendo projetos próprios para consolidar meu conhecimento e evoluir na criação de interfaces modernas e bem estruturadas.
                        Também iniciei meus estudos em Back-End para ampliar minha compreensão sobre integração entre front-end, APIs e banco de dados.
                    </p>

                    <p className="text-muted-foreground leading-relaxed mt-4">
                        Meu objetivo é evoluir como desenvolvedor Front-End e, gradualmente, expandir para o Full Stack,
                        construindo aplicações organizadas e pensadas para resolver problemas reais.
                    </p>

                    <h1 className="text-2xl font-semibold mt-4">Tecnologias Aprendidas</h1>

                    <div className="mt-4 flex gap-5 flex-wrap">
                        <div className="hover:scale-110 transition-all duration-300">
                            <TiHtml5 size={50} className="text-[#E34F26]" />
                        </div>

                        <div className="hover:scale-110 transition-all duration-300">
                            <FaCss className="text-blue-500" size={50} />
                        </div>

                        <div className="hover:scale-110 transition-all duration-300">
                            <IoLogoJavascript className="text-yellow-400" size={50} />
                        </div>

                        <div className="hover:scale-110 transition-all duration-300">
                            <BsTypescript className="text-blue-600" size={50} />
                        </div>

                        <div className="hover:scale-110 transition-all duration-300">
                            <FaReact className="text-cyan-400" size={50} />
                        </div>

                        <div className="hover:scale-110 transition-all duration-300">
                            <RiNextjsLine className="text-white" size={50} />
                        </div>
                    </div>

                    <h1 className="text-2xl font-semibold mt-10">Estudando atualmente</h1>

                    <div className="mt-4 flex gap-5">
                        <div className="hover:scale-110 transition-all duration-300">
                            <SiMysql className="text-blue-400" size={50} />
                        </div>

                        <div className="hover:scale-110 transition-all duration-300">
                            <FaNode className="text-green-500" size={50} />
                        </div>

                        <div className="hover:scale-110 transition-all duration-300">
                            <SiExpress className="text-gray-300" size={50} />
                        </div>

                        <div className="hover:scale-110 transition-all duration-300">
                            <SiMongodb className="text-green-400" size={50} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}