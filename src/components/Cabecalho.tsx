'use client'
import { useReveal } from "@/hooks/scroll"
import { IconMenu2Filled, IconXFilled } from "@tabler/icons-react"
import { useState } from "react"

export default function Cabecalho() {
    const { ref, visible } = useReveal()
    const [open, setOpen] = useState(false)
    return (
        <header ref={ref} className={`flex items-center flex-col gap-8 w-full py-5 border-b border-white/10 shadow-lg bg-transparent sticky top-0 z-50 backdrop-blur-md
        ${visible
                ? "animate-fade-down animate-once animate-duration-[1500ms] animate-delay-[5ms] animate-ease-in-out"
                : "opacity-0"
            }
        `}>
            <div className="md:w-3/4 w-full flex px-2 md:px-0 justify-between items-center">
                <div className="text-4xl font-black">
                    <a href="#home" className="bg-linear-to-tr from-blue-800 via-white to-blue-800 bg-clip-text text-transparent">{`<Murilo>`}</a>
                </div>
                <div className="hidden md:flex">
                    <ul className="flex gap-8">
                        <li><a href="#home" className="hover:text-blue-600 transition-all duration-300">Início</a></li>
                        <li><a href="#projetos" className="hover:text-blue-600 transition-all duration-300">Projetos</a></li>
                        <li><a href="#sobre" className="hover:text-blue-600 transition-all duration-300">Sobre</a></li>
                        <li><a href="#rodape" className="hover:text-blue-600 transition-all duration-300">Contato</a></li>
                    </ul>
                </div>
                <div className="md:hidden">
                    {open ? <IconXFilled size={40} onClick={() => setOpen((open) =>!open)}/>
                        : <IconMenu2Filled size={40} onClick={() => setOpen((open) =>!open)}/>}
                </div>
            </div>
            {open && 
            <div className="md:hidden">
                <ul className="flex text-center flex-col gap-8">
                    <li><a href="#home" className="hover:text-blue-600 transition-all duration-300">Início</a></li>
                    <li><a href="#projetos" className="hover:text-blue-600 transition-all duration-300">Projetos</a></li>
                    <li><a href="#sobre" className="hover:text-blue-600 transition-all duration-300">Sobre</a></li>
                    <li><a href="#rodape" className="hover:text-blue-600 transition-all duration-300">Contato</a></li>
                </ul>
            </div>
            }
        </header>
    )
}