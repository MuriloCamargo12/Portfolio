'use client'
import { useReveal } from "@/hooks/scroll";
import { IconArrowDown } from "@tabler/icons-react";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa6";
import { PiReadCvLogoFill } from "react-icons/pi";

export default function Inicio() {
    const { ref, visible } = useReveal()
    return (
        <main ref={ref} className={`min-h-screen flex p-0 md:py-20 justify-center pb-60
                ${visible
                ? "animate-fade-up animate-once animate-duration-[2500ms] animate-delay-[5ms] animate-ease-in-out"
                : "opacity-0"
            }
        `}>
            <div className="md:w-3/4 w-full">
                <div className="flex flex-col md:flex-row justify-center items-center">
                    <div className="md:w-1/2 w-full flex justify-center md:justify-start">
                        <Image src={'/Murilo.png'} width={500} height={500} alt="Foto Murilo" className="object-cover animate-fade-up animate-once animate-duration-[2500ms] animate-delay-[5ms] animate-ease-in-out"></Image>
                    </div>
                    <div className="px-1 md:px-0 flex flex-col items-center text-center md:w-1/2 w-full gap-3 pb-20 animate-fade-up animate-once animate-duration-[3000ms] animate-delay-[5ms] animate-ease-in-out">
                        <div>
                            <span className="text-4xl font-semibold">Olá! Me chamo Murilo.</span>
                        </div>
                        <div className="flex text-muted-foreground leading-relaxed mt-2 md:mt-0">
                            <span>Sou estudante de desenvolvimento web, atualmente com foco no Front End Estou construindo projetos práticos para consolidar meus conhecimentos e evoluindo constantemente para me tornar um desenvolvedor Full Stack.</span>
                        </div>
                            <span>Mais sobre em:</span>
                            <div className="flex justify-center"><IconArrowDown size={30} /></div>
                        <div className="flex gap-5 justify-center items-center text-center">
                            <a href="https://www.linkedin.com/in/murilo-camargo-morais-9b94463b2/" target="_blank" className="flex gap-2 items-center justify-center cursor-pointer bg-blue-600 hover:bg-blue-500 w-28 py-2 px-3 rounded-2xl transition duration-300 transform hover:-translate-y-1">
                                <FaLinkedin/>
                                Linkedin
                            </a>
                            <a href="/curriculo.pdf" download className="flex gap-2 items-center justify-center cursor-pointer bg-blue-600 hover:bg-blue-500 w-28 py-2 px-3 rounded-2xl transition duration-300 transform hover:-translate-y-1">
                                <PiReadCvLogoFill/>
                                CV
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}